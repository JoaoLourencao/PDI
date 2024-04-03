from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    return render(request, 'recipes/home.html', {'msg': 'Olá, mundo!'})


def contato(request):
    return HttpResponse('Contato')


def sobre(request):
    return HttpResponse('Sobre')
