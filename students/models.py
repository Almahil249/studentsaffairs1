from django.db import models


class Student(models.Model):
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
    ]

    LEVEL_CHOICES = [
        ('first', 'First'),
        ('second', 'Second'),
        ('third', 'Third'),
        ('fourth', 'Fourth'),
    ]

    STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    ]

    DEPARTMENT_CHOICES = [
        ('GR', 'General'),
        ('CS', 'Computer Science'),
        ('AI', 'Artificial Intelligence'),
        ('IT', 'Information Technology'),
        ('IS', 'Information System'),
        ('DS', 'Decision Support'),
    ]

    id = models.CharField(primary_key=True, max_length=15)
    name = models.CharField(max_length=50)
    dob = models.DateField()
    gpa = models.FloatField()
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES)
    level = models.CharField(max_length=6, choices=LEVEL_CHOICES)
    status = models.CharField(max_length=8, choices=STATUS_CHOICES)
    department = models.CharField(max_length=4, choices=DEPARTMENT_CHOICES)
    email = models.EmailField(max_length=50)
    mobile = models.BigIntegerField()

    def __str__(self):
        return f"{self.name}  ID: {self.id}"
