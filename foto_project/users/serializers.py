from rest_framework import serializers
from .models import CustomUser
from rest_framework.validators import UniqueValidator

class UserGetData(serializers.ModelSerializer):


    class Meta:
        model = CustomUser
        fields = ['id','full_name', 'phone', 'email', 'birth_date', 'vk_link', 'username', 'avatar']


class UserPutData(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ('username', 'full_name', 'birth_date', 'phone', 'email', 'avatar')

    def validate(self, data):
        if 'password' in data and 'password_confirmation' in data:
            if data['password'] != data['password_confirmation']:
                raise serializers.ValidationError("Пароли не совпадают.")
        return data


class UserRegistrationSerializer(serializers.Serializer):
    username = serializers.CharField(
        max_length=50,
        required=True,
        validators=[UniqueValidator(queryset=CustomUser.objects.all())]
    )
    phone = serializers.CharField(
        max_length=15,
        required=False
    )
    email = serializers.EmailField(
        max_length=255,
        required=True,
        validators=[UniqueValidator(queryset=CustomUser.objects.all())]
    )
    vk_link = serializers.URLField(
        max_length=255,
        required=False
    )
    password = serializers.CharField(
        required=True,
        write_only=True,
        style={'input_type': 'password'}
    )
    password_confirmation = serializers.CharField(
        required=True,
        write_only=True,
        style={'input_type': 'password'}
    )

    def validate(self, data):
        if data['password'] != data['password_confirmation']:
            raise serializers.ValidationError("Пароль и подтверждение пароля не совпадают.")
        return data

    def create(self, validated_data):
        user = CustomUser.objects.create(
            username=validated_data['username'],
            phone=validated_data['phone'],
            email=validated_data['email'],
            vk_link=validated_data['vk_link'],
        )

        user.set_password(validated_data['password'])
        user.save()

        return user

    class Meta:
        model = CustomUser
        fields = ('username', 'phone', 'email', 'vk_link', 'password', 'password_confirmation')

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)
