from django.contrib import admin
from .models import Users


@admin.register(Users)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('id', 'full_name', 'phone', 'email', 'birth_date', 'vkontakte_profile', 'username', 'password', 'avatar')
