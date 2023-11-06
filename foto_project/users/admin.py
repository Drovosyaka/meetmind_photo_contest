from django.contrib import admin
from .models import CustomUser
from django.contrib.auth.admin import UserAdmin

@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    list_display = ('id', 'full_name', 'phone', 'email', 'birth_date', 'vk_link')

    fieldsets = (
        ('Персональная информация', {'fields': ('full_name', 'username', 'email', 'avatar')}),
        ('Доп. информация', {'fields': ('phone', 'birth_date', 'vk_link')}),
        ('Права доступа', {'fields': ('is_active','is_staff')}),
        ('Смена пароля', {'fields': ('password',)}),
    )

