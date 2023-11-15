from rest_framework import serializers
from .models import Category, Photo
from users.models import CustomUser

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'image', 'name']





class PhotoSerializer(serializers.ModelSerializer):
    user_full_name = serializers.SerializerMethodField()

    class Meta:
        model = Photo
        fields = ['id', 'photo_category', 'image', 'copyright', 'vk_link', 'name_work', 'description', 'photo_place', 'processing', 'model_release', 'additional_info', 'vote_count', 'is_approved', 'user_full_name']

    def create(self, validated_data):
        request = self.context.get('request')
        user = request.user if request and hasattr(request, 'user') else None

        if 'user' in validated_data:
            del validated_data['user']

        photo = Photo.objects.create(user=user, **validated_data)
        return photo

    def get_user_full_name(self, obj):
        user_id = obj.user_id
        user = CustomUser.objects.get(id=user_id)
        return user.full_name





