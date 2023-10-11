from rest_framework import serializers
from .models import Users

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['id', 'full_name', 'phone', 'email', 'birth_date', 'vkontakte_profile', 'username', 'avatar']
