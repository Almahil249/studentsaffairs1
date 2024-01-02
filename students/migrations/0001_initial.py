# Generated by Django 5.0 on 2023-12-26 19:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.CharField(max_length=15, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('dob', models.DateField()),
                ('gpa', models.FloatField()),
                ('gender', models.CharField(choices=[('male', 'Male'), ('female', 'Female')], max_length=6)),
                ('level', models.CharField(choices=[('first', 'First'), ('second', 'Second'), ('third', 'Third'), ('fourth', 'Fourth')], max_length=6)),
                ('status', models.CharField(choices=[('active', 'Active'), ('inactive', 'Inactive')], max_length=8)),
                ('department', models.CharField(choices=[('GR', 'General'), ('CS', 'Computer Science'), ('AI', 'Artificial Intelligence'), ('IT', 'Information Technology'), ('IS', 'Information System'), ('DS', 'Decision Support')], max_length=4)),
                ('email', models.EmailField(max_length=50)),
                ('mobile', models.BigIntegerField()),
            ],
        ),
    ]