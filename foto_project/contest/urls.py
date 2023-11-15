from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.CategoryList.as_view(), name='category-list'),
    path('profile/photos/', views.PhotoCreateView.as_view(), name='photo-create'),
    path('photos/list/', views.PhotoListView.as_view(), name='photo-list'),
    path('profile/photos/<int:pk>/', views.PhotoDetailView.as_view(), name='photo-detail'),
]
