from django.urls import path, include
import users.views as user_views
import home.views as views
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'sports', views.SportViewSet)
router.register(r'playarea', views.PlayAreaViewSet)

urlpatterns = [
    path('home/', user_views.home, name='home'),
    path('', include(router.urls)),
]
