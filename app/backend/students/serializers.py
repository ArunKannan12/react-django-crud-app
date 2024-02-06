from rest_framework import serializers
from .models import Student
from django.core.validators import EmailValidator
class StudentSerializer(serializers.ModelSerializer):
    Email = serializers.EmailField()

    def validate_email(self, value):
        lower_email = value.lower()
        if Student.objects.filter(Email__iexact=lower_email).exists():
            raise serializers.ValidationError("Duplicate")
        return lower_email
    class Meta:
        extra_kwargs = {
        'Email': {'validators': [EmailValidator,]},
        }
        model=Student
        fields=['studentId','Firstname','Lastname','RegistrationNo','Email','Course']
