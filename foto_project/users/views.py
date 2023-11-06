from PIL import Image
from io import BytesIO
from rest_framework import status, viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import authenticate, login
from .models import CustomUser
from .serializers import (
    UserRegistrationSerializer, UserLoginSerializer, UserGetData, UserPutData
)

@api_view(['POST'])
@permission_classes([AllowAny])
def register_custom_user(request):
    if request.method == 'POST':
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Регистрация прошла успешно."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response({"error": "Invalid request method"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def login_custom_user(request):
    if request.method == 'POST':
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(request, username=username, password=password)

            if user is not None:
                if user.is_active:
                    login(request, user)
                    return TokenObtainPairView.as_view()(request)
                else:
                    return Response({"error": "Ваш аккаунт заблокирован"}, status=status.HTTP_423_LOCKED)
            else:
                return Response({"error": "Нет такого аккаунта"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "Ошибка сервера"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = UserGetData(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

class UserProfileUpdateView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserPutData

    def update(self, request, *args, **kwargs):
        current_user = request.user

        serializer = self.get_serializer(current_user, data=request.data, partial=True)
        try:
            serializer.is_valid(raise_exception=True)
        except ValidationError as e:
            return Response({'error_message': e.detail}, status=status.HTTP_400_BAD_REQUEST)

        # Обработка загрузки аватара
        avatar = request.data.get('avatar')
        if avatar:
            # Сохранение аватара на сервере
            current_user.avatar = avatar
            current_user.save()

        try:
            self.perform_update(serializer)
        except Exception as e:
            return Response({'error_message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        self.perform_update(serializer)
        return Response({'data': serializer.data, 'message': 'Данные успешно обновлены'}, status=status.HTTP_200_OK)