from rest_framework import serializers

from slots.models import Booking


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ('day', 'start_time', 'end_time', 'user')

