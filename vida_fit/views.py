from django.shortcuts import render

def home(request):
    return render(request, 'vida_fit/pages/home.html')
