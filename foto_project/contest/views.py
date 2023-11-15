from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import status, viewsets, generics
from rest_framework.permissions import IsAuthenticated
from .models import Category, Photo
from .serializers import CategorySerializer, PhotoSerializer
from django.views.decorators.csrf import ensure_csrf_cookie


class CategoryList(APIView):

    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class PhotoListView(APIView):
    def get(self, request):
        photos = Photo.objects.filter(is_approved=True)  # Фильтр для получения только утвержденных работ
        serializer = PhotoSerializer(photos, many=True)
        return Response(serializer.data)


@ensure_csrf_cookie
def get_csrf(request):
    return JsonResponse({"message": "CSRF cookie set"})

class PhotoDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        photo = get_object_or_404(Photo, pk=pk)
        serializer = PhotoSerializer(photo)
        return Response(serializer.data)

    def put(self, request, pk):
        photo = get_object_or_404(Photo, pk=pk)
        serializer = PhotoSerializer(photo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        photo = get_object_or_404(Photo, pk=pk)
        photo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




class PhotoCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = PhotoSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

