from django.urls import path, include
import users.views as views

urlpatterns = [
    path('test/', views.test, name='test'),
]