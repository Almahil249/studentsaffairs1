from django.urls import path
from . import views

urlpatterns = [
    path('', views.Related_Websites, name='Related_Websites'),
    #path('Add_Student.html', views.Add_Student, name='Add_Student'),
    path('Add_Student.html', views.add_student, name='add_student'),
    path('Department_Assignment.html', views.Department_Assignment, name='Department_Assignment'),
    path('Related-Websites.html', views.Related_Websites, name='Related_Websites'),
    path('Search_Student.html', views.Search_Student, name='Search_Student'),
    path('Update_Student_Info.html', views.Update_Student_Info, name='Update_Student_Info'),
    path('View_Students.html', views.View_Students, name='View_Students'),
    path('Home.html/', views.Home, name='Home'),
    
    path('Home.html/Add_Student.html', views.add_student, name='add_student'),
    #path('Home.html/Add_Student.html', views.Add_Student, name='Add_Student'),
    path('Home.html/Department_Assignment.html', views.Department_Assignment, name='Department_Assignment'),
    path('Home.html/Related-Websites.html', views.Related_Websites, name='Related_Websites'),
    path('Home.html/Search_Student.html', views.Search_Student, name='Search_Student'),
    path('Home.html/Update_Student_Info.html', views.Update_Student_Info, name='Update_Student_Info'),
    path('Home.html/View_Students.html', views.View_Students, name='View_Students'),
    path('Home.html/Home.html', views.Home, name='Home'),


    path('get-student-dept/<str:student_id>/', views.get_student_dept, name='get_student_dept'),
    path('update-department/', views.department_assignment, name='update_department'),

    path('Home.html/get-student-dept/<str:student_id>/', views.get_student_dept, name='get_student_dept'),
    path('Home.html/update-department/', views.department_assignment, name='update_department'),

    path('get-students-from-db/', views.get_students_from_db, name='get_students_from_db'),
    path('update-status/<str:student_id>/<str:new_status>/', views.update_status, name='update_status'),

    path('Home.html/get-students-from-db/', views.get_students_from_db, name='get_students_from_db'),
    path('Home.html/update-status/<str:student_id>/<str:new_status>/', views.update_status, name='update_status'),

    path('update-student/', views.update_student, name='update_student'),
    path('delete-student/<str:student_id>/', views.delete_student, name='delete_student'),

    path('Home.html/update-student/', views.update_student, name='update_student'),
    path('Home.html/delete-student/<str:student_id>/', views.delete_student, name='delete_student'),

]