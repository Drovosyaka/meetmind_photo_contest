from rest_framework import serializers
from .models import Category, Photo

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'image', 'name']


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ['id', 'photo_category', 'image', 'copyright', 'vk_link', 'name_work', 'description', 'photo_place', 'processing', 'model_release', 'additional_info', 'vote_count']

    def create(self, validated_data):
        request = self.context.get('request')
        user = request.user if request and hasattr(request, 'user') else None

        # validated_data не содержит user
        if 'user' in validated_data:
            del validated_data['user']

        photo = Photo.objects.create(user=user, **validated_data)
        return photo


