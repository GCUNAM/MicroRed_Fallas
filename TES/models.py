from django.db import models
from django.utils import timezone


class Post(models.Model):
    Autor = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    Elemento = models.CharField(max_length=200)
    Descripción_1 = models.CharField(max_length=200)
    Causa_1 = models.TextField()
    Efectos_1 = models.TextField()
    Descripción_2 = models.CharField(max_length=200)
    Causa_2 = models.TextField()
    Efectos_2 = models.TextField()
    Descripción_3 = models.CharField(max_length=200)
    Causa_3 = models.TextField()
    Efectos_3 = models.TextField()
    Descripción_4 = models.CharField(max_length=200)
    Causa_4 = models.TextField()
    Efectos_4 = models.TextField()
    Descripción_5 = models.CharField(max_length=200)
    Causa_5 = models.TextField()
    Efectos_5 = models.TextField()
    Descripción_6 = models.CharField(max_length=200)
    Causa_6 = models.TextField()
    Efectos_6 = models.TextField()
    Descripción_7 = models.CharField(max_length=200)
    Causa_7 = models.TextField()
    Efectos_7 = models.TextField()
    Descripción_8 = models.CharField(max_length=200)
    Causa_8 = models.TextField()
    Efectos_8 = models.TextField()
    Descripción_9 = models.CharField(max_length=200)
    Causa_9 = models.TextField()
    Efectos_9 = models.TextField()
    Descripción_10 = models.CharField(max_length=200)
    Causa_10 = models.TextField()
    Efectos_10 = models.TextField()
    Descripción_11 = models.CharField(max_length=200)
    Causa_11 = models.TextField()
    Efectos_11 = models.TextField()
    Descripción_12 = models.CharField(max_length=200)
    Causa_12 = models.TextField()
    Efectos_12 = models.TextField()


    Datos_Creados = models.DateTimeField(
            default=timezone.now)
    Datos_Publicados = models.DateTimeField(
            blank=True, null=True)

    def publish(self):
        self.Datos_Publicados = timezone.now()
        self.save()

    def __str__(self):
        return self.Elemento

# Create your models here.
