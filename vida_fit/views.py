from django.shortcuts import render

def home(request):
    return render(request, 'vida_fit/pages/home.html')

def calculator(request):
    return render(request, 'vida_fit/pages/calculator.html')
