from .serializers import StudentSerializer
from rest_framework.views import APIView
from .models import Student
from django.http.response import Http404
from rest_framework.response import Response
from rest_framework import status

class StudentList(APIView):
    """
    List all Mobiles, or create a new Mobile
    """
  
    def get(self, request, format=None):
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)
  
    def post(self, request, format=None):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            instance,created=Student.objects.update_or_create(Email=serializer.validated_data.get('Email',None),defaults=serializer.validated_data)
            if not created:
                serializer.update(instance,serializer.validated_data)
            # serializer.save()
            return Response(serializer.data,
                            status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
class StudentDetail(APIView):
    """
    Retrieve, update or delete a Mobile instance
    """
    def get_object(self, pk):
        # Returns an object instance that should 
        # be used for detail views.
        try:
            return Student.objects.get(pk=pk)
        except Student.DoesNotExist:
            raise Http404
  
    def get(self, request, pk, format=None):
        students = self.get_object(pk)
        serializer = StudentSerializer(students)
        return Response(serializer.data)
  
    def put(self, request, pk, format=None):
        students = self.get_object(pk)
        serializer = StudentSerializer(students, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
    def patch(self, request, pk, format=None):
        students = self.get_object(pk)
        serializer = StudentSerializer(students,
                                           data=request.data,
                                           partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
          
  
    def delete(self, request, pk, format=None):
        students = self.get_object(pk)
        students.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# from django.shortcuts import render
# from .serializers import StudentSerializer
# from rest_framework import views
# from .models import Student
# from django.http.response import JsonResponse
# from django.http.response import Http404
# from rest_framework.response import Response
# # Create your views here.

# class StudentView(views.APIView):
    

#     def get_student(self,pk):
#         try:
#             student=Student.objects.get(studentId=pk) 
#             return student
#         except Student.DoesNotExist():
#             return JsonResponse( "student Does not exist" ,safe=False) 
#     def get(self,request,pk=None):
#         if pk:
#             data=self.get_student(pk)
#             serializer=StudentSerializer(data)
#         else:
#             data=Student.objects.all()
#             serializer=StudentSerializer(data,many=True)
#         return Response(serializer.data)
#     def post(self,request):
#         data=request.data
#         serializer=StudentSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse('Student created successfully', serializer.data,safe=False)
#         return JsonResponse('Failed to create student',safe=False)
#     def put(self,request,pk=None):
#         student_to_update=Student.objects.get(studentId=pk)
#         serializer=StudentSerializer(instance=student_to_update,data=request.data, partial=True)

#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse("student updated successfully",safe=False)
#         return JsonResponse('failed to update student',safe=False)
    
#     def delete(self,request,pk=None):
#         student_to_delete=Student.objects.get(studentId=pk)
#         student_to_delete.delete()
#         return JsonResponse("student deleted successfuly",safe=False)