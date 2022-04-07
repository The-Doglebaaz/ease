from rest_framework import viewsets

from home.serializers import SportSerializer, PlayAreaSerializer
from home.models import *


class SportViewSet(viewsets.ModelViewSet):
    queryset = Sport.objects.all()
    serializer_class = SportSerializer


class PlayAreaViewSet(viewsets.ModelViewSet):
    queryset = PlayArea.objects.all()
    serializer_class = PlayAreaSerializer
