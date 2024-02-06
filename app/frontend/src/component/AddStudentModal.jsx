import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { addStudent } from './Services';

const AddStudentModal = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(e.target)
    .then((result)=>{
        alert('Student has been added');
        props.setupdated(true);
    })
    .catch((err) => {
        console.log(err);
        if(err.status=404){
           alert("email already used");
        }})
}
  return (
    
    <div className="container">

    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered >

        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Fill In Student Information
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col sm={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="Firstname">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="Firstname" required placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="Lastname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="Lastname" required placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="RegistrationNo">
                            <Form.Label>Registration No.</Form.Label>
                            <Form.Control type="text" name="RegistrationNo" required placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="Email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="Email" required placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="Course">
                            <Form.Label>Course</Form.Label>
                            <Form.Control type="text" name="Course" required placeholder="" />
                    </Form.Group>
                    <Form.Group>
                        <p></p>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" type="submit" onClick={props.onHide}>
                Close
        </Button>

        </Modal.Footer>
    </Modal>
</div>
  )
}

export default AddStudentModal