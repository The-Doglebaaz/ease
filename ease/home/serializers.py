from rest_framework import serializers
from home.models import *


class SportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sport
        fields = ('name',)


class PlayAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayArea
        fields = ('name', 'sport', 'max_space', 'is_available')
