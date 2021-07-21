from django.urls import path
from django.conf.urls import include, url
from . import views


urlpatterns = [
    path('CableElec/', views.CableElec, name='CableElec'),
    path('Transformador/', views.Transformador, name='Transformador'),
    path('UPS/', views.UPS, name='UPS'),
    path('Servidor/', views.Servidor, name='Servidor'),
    path('Celdas/', views.Celdas, name='Celdas'),
    path('PLC/', views.PLC, name='PLC'),
    path('', views.Principal, name='Principal'),
    path('Generador/', views.Generador, name='Generador'),
    path('Transfer/', views.Transfer, name='Transfer'),
    path('CableComun/', views.CableComun, name='CableComun'),
    path('SeccionadorElec/', views.SeccionadorElec, name='SeccionadorElec'),
    path('Radio/', views.Radio, name='Radio'),
    path('TableroProtec/', views.TableroProtec, name='TableroProtec'),
    path('TableroControl/', views.TableroControl, name='TableroControl'),
    path('Est_Meteoro/', views.Est_Meteoro, name='Est_Meteoro'),
    path('Diagrama/', views.Diagrama, name='Diagrama'),
]
