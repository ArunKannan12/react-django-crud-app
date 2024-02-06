import axios from "axios";
export const getStudents=() =>{
    return axios.get('http://127.0.0.1:8000/students/')
      .then(response => response.data)
  }

export const deleteStudent=(studentId) =>{
    return axios.delete(`http://127.0.0.1:8000/students/${studentId}/`, {
     method: 'DELETE',
     headers: {
       'Accept':'application/json',
       'Content-Type':'application/json'
     }
    })
    .then(response => response.data)
  }

export const addStudent=(student)=>{
    return axios.post('http://127.0.0.1:8000/students/', {
      studentId:null,
      Firstname:student.Firstname.value,
      Lastname:student.Lastname.value,
      RegistrationNo:student.RegistrationNo.value,
      Email:student.Email.value,
      Course:student.Course.value
      
    })
      .then(response=>response.data)
      

  }

export const updateStudent=(stuid, student)=> {
    return axios.put(`http://127.0.0.1:8000/students/${stuid}/`, {
      Firstname:student.Firstname.value,
      Lastname:student.Lastname.value,
      RegistrationNo:student.RegistrationNo.value,
      Email:student.Email.value,
      Course:student.Course.value
    })
     .then(response => response.data)
  }