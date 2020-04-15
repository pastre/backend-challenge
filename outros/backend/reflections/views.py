from django.http import HttpResponse

def reflections(request, name = None):
	return HttpResponse(f'<h1>NOME TOSCO {name}</h1>')