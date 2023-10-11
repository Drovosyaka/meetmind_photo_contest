from django.db import models
from django.contrib.auth.models import BaseUserManager


class CustomUserManager(BaseUserManager):
    def create_user(self, username, password=None, **extra_fields):
        if not username:
            raise ValueError('Имя пользователя не может быть пустым')
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(username, password, **extra_fields)







class Users(models.Model):
    class Meta:
        db_table = 'users'
        verbose_name_plural = 'Пользователи'

    id = models.AutoField(primary_key=True)
    full_name = models.CharField(max_length=255, verbose_name='ФИО')
    phone = models.CharField(max_length=15, verbose_name='Номер телефона')
    email = models.EmailField(verbose_name='Email')
    birth_date = models.DateField(auto_now_add=False, auto_now=False, verbose_name='Дата рождения')
    vkontakte_profile = models.URLField(blank=True, null=True, verbose_name='Профиль VK')
    username = models.CharField(max_length=100, unique=True, verbose_name='Логин')
    password = models.CharField(max_length=128, verbose_name='Пароль')
    avatar = models.ImageField(blank=True, upload_to='uploads/', verbose_name='Аватар профиля')

    def __str__(self):
        return self.full_name



