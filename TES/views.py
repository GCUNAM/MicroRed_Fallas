from django.shortcuts import render
from django.utils import timezone
from .models import Post

# Create your views here.
def CableElec(request):
    posts = Post.objects.filter(Elemento='Cable de energía eléctrica')
    return render(request, 'CableElec.html', {'posts': posts})

def UPS(request):
    posts = Post.objects.filter(Elemento='UPS')
    return render(request, 'UPS.html', {'posts': posts})

def Radio(request):
    posts = Post.objects.filter(Elemento='Radio')
    return render(request, 'Radio.html', {'posts': posts})

def PLC(request):
    posts = Post.objects.filter(Elemento='PLC (Controladores de Lógica Programable)')
    return render(request, 'PLC.html', {'posts': posts})

def Servidor(request):
        posts = Post.objects.filter(Elemento='Servidor')
        return render(request, 'Servidor.html', {'posts': posts})

def Celdas(request):
    posts = Post.objects.filter(Elemento='Celdas Solares')
    return render(request, 'Celdas.html', {'posts': posts})

def Transformador(request):
    posts = Post.objects.filter(Elemento='Transformador')
    return render(request, 'Transformador.html', {'posts': posts})

def Transfer(request):
    posts = Post.objects.filter(Elemento='Transfer')
    return render(request, 'Transfer.html', {'posts': posts})

def Generador(request):
    posts = Post.objects.filter(Elemento='Generador')
    return render(request, 'Generador.html', {'posts': posts})

def CableComun(request):
    posts = Post.objects.filter(Elemento='Cable de Comunicaciones')
    return render(request, 'CableComun.html', {'posts': posts})

def SeccionadorElec(request):
    posts = Post.objects.filter(Elemento='Seccionador eléctrico')
    return render(request, 'SeccionadorElec.html', {'posts': posts})

def TableroProtec(request):
    posts = Post.objects.filter(Elemento='Tablero de Protecciones')
    return render(request, 'TableroProtec.html', {'posts': posts})

def TableroControl(request):
    posts = Post.objects.filter(Elemento='Tablero de Control')
    return render(request, 'TableroControl.html', {'posts': posts})

def Principal(request):
    posts = Post.objects.filter(Elemento='Principal')
    return render(request, 'Principal.html', {'posts': posts})

def Est_Meteoro(request):
    posts = Post.objects.filter(Elemento='Est_Meteoro')
    return render(request, 'Est_Meteoro.html', {'posts': posts})

def Diagrama(request):
    posts = Post.objects.filter(Elemento='Diagrama')
    return render(request, 'Diagrama.html', {'posts': posts})
