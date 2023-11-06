from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    full_name = models.CharField(max_length=30, verbose_name='ФИО', blank=True, null=True)
    birth_date = models.DateField(blank=True, null=True, verbose_name='Дата рождения')
    phone = models.CharField(max_length=15, verbose_name='Телефон', blank=True, null=True)
    vk_link = models.URLField(max_length=255, blank=True, null=True, verbose_name='Профиль VK')
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True, verbose_name='Аватар профиля')

    is_active = models.BooleanField(default=True, verbose_name='Активный пользователь')
    is_staff = models.BooleanField(default=False, verbose_name='Модератор')

    REQUIRED_FIELDS = ['full_name', 'phone', 'email']

    class Meta:
        verbose_name = 'пользователя'
        verbose_name_plural = 'Пользователи'

