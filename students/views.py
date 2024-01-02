from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.template import loader
from .models import Student
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt 
def update_student(request):
  if request.method == "POST":
    form_data = request.POST
    try:
        student = Student.objects.get(id=form_data['id'])
        student.name = form_data['name']
        student.dob = form_data['dob']
        student.gpa = form_data['gpa']
        student.gender = form_data['gender']
        student.level = form_data['level']
        student.status = form_data['status']
        student.email = form_data['email']
        student.mobile = form_data['mobile']
        student.save()
        return JsonResponse({'success': True})
    except Student.DoesNotExist:
        return JsonResponse({'success': False, 'error': 'Student not found'})
    except Exception as e:
        return JsonResponse({'success': False, 'error': str(e)})

@csrf_exempt
def delete_student(request, student_id):
  try:
    student = Student.objects.get(id=student_id)
    student.delete()
    return JsonResponse({'success': True})
  except Student.DoesNotExist:
    return JsonResponse({'success': False, 'error': 'Student not found'})
  except Exception as e:
    return JsonResponse({'success': False, 'error': str(e)})




def get_students_from_db(request):
    students = list(Student.objects.values())
    return JsonResponse(students, safe=False)

def update_status(request, student_id, new_status):
    try:
        student = Student.objects.get(id=student_id)
        student.status = new_status
        student.save()
        return JsonResponse({'success': True})
    except Student.DoesNotExist:
        return JsonResponse({'success': False, 'error': 'Student not found'})

def View_Students(request):
  template = loader.get_template('View_Students.html')
  return HttpResponse(template.render())


def department_assignment(request):
    if request.method == 'POST':
        student_id = request.POST.get('id')
        new_department = request.POST.get('department')

        try:
            student = Student.objects.get(id=student_id)
            if student.level.lower() == 'third':
                student.department = new_department
                student.save()
                JsonResponse({'error': 'Department updated successfully!'}, status=200)
            else:
                JsonResponse({'error': 'Department assignment is allowed only for third-level students.'}, status=300)
        except Student.DoesNotExist:
            return JsonResponse({'success': False, 'error': 'Student not found'})
    return redirect('Department_Assignment')

def get_student_dept(request, student_id):
    try:
        student = Student.objects.get(id=student_id)
        student_data = {
            'name': student.name,
            'dob': student.dob,
            'gpa': student.gpa,
            'gender': student.gender,
            'level': student.level,
            'status': student.status,
            'department': student.department,
            'email': student.email,
            'mobile': student.mobile
        }
        return JsonResponse(student_data)
    except Student.DoesNotExist:
        return JsonResponse({'error': 'Student not found'}, status=404)

def add_student(request):
    if request.method == 'POST':
        form_data = request.POST
        try:
            student = Student.objects.create(
                id=form_data['id'],
                name=form_data['name'],
                dob=form_data['dob'],
                gpa=form_data['gpa'],
                gender=form_data['gender'],
                level=form_data['level'],
                status=form_data['status'],
                department='GR',
                email=form_data['email'],
                mobile=form_data['mobile']
            )
            return JsonResponse({'success': True}) 
        except Exception as e:            
            return JsonResponse({'success': False, 'error': str(e)})
    else:
        return render(request, 'Add_Student.html')


def Home(request):
  template = loader.get_template('Home.html')
  return HttpResponse(template.render())
def Department_Assignment(request):
  Allstudents = Student.objects.all().values()
  template = loader.get_template('Department_Assignment.html')
  context = {
    'Allstudents': Allstudents,
  }
  return HttpResponse(template.render(context, request))
def Related_Websites(request):
  template = loader.get_template('Related-Websites.html')
  return HttpResponse(template.render())
def Search_Student(request):
  template = loader.get_template('Search_Student.html')
  return HttpResponse(template.render())
def Update_Student_Info(request):
  template = loader.get_template('Update_Student_Info.html')
  return HttpResponse(template.render())

