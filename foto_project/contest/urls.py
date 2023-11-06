from django.urls import path
from . import views

urlpatterns = [
    path('profile/categories/', views.CategoryList.as_view(), name='category-list'),
    path('profile/photos/', views.PhotoViewSet.as_view({'get': 'list', 'post': 'create'}), name='photo-list'),
]
