import React,{useState,useEffect} from 'react'
import {Table,Button,ButtonToolbar} from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { getStudents,deleteStudent } from './Services';
import AddStudentModal from "./AddStudentModal";
import UpdateStudentModal from "./UpdateStudentModal";
import '../App.css'
import axios from 'axios'
const Manage = () => {
    const [students,setStudents]=useState([]);
    const [addModalShow,setAddModalShow]=useState(false)
    const [editModalShow, setEditModalShow] = useState(false);
    const [editStudent, setEditStudent] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
      let mounted = true;
      if(students.length && !isUpdated) {
       return;
       }
      getStudents()
        .then(data => {
          if(mounted) {
            setStudents(data);
          }
        })
      return () => {
         mounted = false;
         setIsUpdated(false);
      }
    }, [isUpdated, students])

    const handleAdd = (e) => {
      e.preventDefault();
      setAddModalShow(true);
    };
  
    const handleDelete = (e, studentId) => {
    if(window.confirm('Are you sure to delete ?')){
        e.preventDefault();
        deleteStudent(studentId)
        .then((result)=>{
            alert('Student deleted successfully!');
            setIsUpdated(true);
        },
        (error)=>{
            alert("Failed to Delete Student");
        })
    }
};
    const handleUpdate = (e, stu) => {
      e.preventDefault();
      setEditModalShow(true);
      setEditStudent(stu);
  };
  let AddModelClose=()=>setAddModalShow(false);
  let EditModelClose=()=>setEditModalShow(false);
  return (
    <div className="container-fluid side-container">
    <div className="row side-row" >
    <p id="manage"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
            <thead>
            <tr>
              <th >ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Registration No</th>
              <th>Email</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
              { students.map((stu,index) =>
              <tr key={index}>
              <td>{stu.studentId}</td>
              <td>{stu.Firstname}</td>
              <td>{stu.Lastname}</td>
              <td>{stu.RegistrationNo}</td>
              <td>{stu.Email}</td>
              <td>{stu.Course}</td>
              <td>

              <Button className="mr-2" variant="danger"
                onClick={event => handleDelete(event,stu.studentId)}>
                    <RiDeleteBin5Line />
              </Button>
              <span>&nbsp;&nbsp;&nbsp;</span>
              <Button className="mr-2"
                onClick={event => handleUpdate(event,stu)}>
                    <FaEdit />
              </Button>
              <UpdateStudentModal show={editModalShow} student={editStudent} setupdated={setIsUpdated}
                          onHide={EditModelClose}></UpdateStudentModal>
            </td>
            </tr>)}
          </tbody>
        </Table>
        <ButtonToolbar>
            <Button variant="primary" onClick={handleAdd}>
            Add Student
            </Button>
            <AddStudentModal show={addModalShow} setupdated={setIsUpdated}
            onHide={AddModelClose}></AddStudentModal>
        </ButtonToolbar>
    </div>
    </div>   
  )
}

export default Manage