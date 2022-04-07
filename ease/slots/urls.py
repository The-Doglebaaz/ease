from django.urls import path, include
import users.views as views

urlpatterns = [
    path('home/', views.home, name='home'),
]
