from django.contrib import admin
from .models import Student

class StudentAdmin(admin.ModelAdmin):
    list_display = ("id","name","gpa","level","status","department","email","mobile")


admin.site.register(Student,StudentAdmin)
