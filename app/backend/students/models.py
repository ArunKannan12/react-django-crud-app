from django.db import models

# Create your models here.
class Student(models.Model):
    studentId=models.AutoField(primary_key=True)
    Firstname=models.CharField( max_length=50)
    Lastname=models.CharField(max_length=50)
    RegistrationNo=models.CharField( max_length=50)
    Email=models.EmailField( max_length=254)
    Course=models.CharField( max_length=50)

    def __str__(self):
        return self.Firstname

    
