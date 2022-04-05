from django.db import models


# Create your models here.
class Sport(models.Model):
    name = models.CharField(max_length=150)

    def __str__(self):
        return self.name


class PlayArea(models.Model):
    name = models.CharField(max_length=150)
    sport = models.ForeignKey(Sport, on_delete=models.CASCADE)
    max_space = models.PositiveIntegerField(null=True, blank=True)

    def __str__(self):
        return self.name
