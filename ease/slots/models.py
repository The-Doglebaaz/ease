from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator
from django.db import models
from home.models import *


# Create your models here.

class Booking(models.Model):
    date = models.DateField(auto_now_add=False, auto_now=False)
    time_start = models.TimeField(auto_now_add=False, auto_now=False)
    time_end = models.TimeField(auto_now=False, auto_now_add=False)
    last_modified = models.DateTimeField(auto_now=True)

    area = models.ForeignKey(PlayArea, on_delete=models.CASCADE)
    sport = models.ForeignKey(Sport, on_delete=models.CASCADE)

    user = models.ForeignKey(User, on_delete=models.CASCADE)
