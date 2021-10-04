import React from 'react';
import "./Course.css"
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Course = (props) => {
    console.log(props)
    const {img, title, department, campus, credit, instructor } = props.course;

    const buttonText = props.buttonText;
    return (
        <div className="col col-lg-4 mb-4">
            <Card style={{ width: '18rem' }} className="card">
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title><span className="fw-bold me-1">Course title:</span>{title}</Card.Title>
                    <small>Instructor: {instructor}</small> 
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><strong> Fuculty: </strong>{department}</ListGroupItem>
                    <ListGroupItem> <strong>Campus: </strong>{campus}</ListGroupItem>
                    <ListGroupItem><strong>Credit: </strong>{credit}</ListGroupItem>
                </ListGroup>

                <Button variant="danger">{buttonText}</Button>
            </Card>

        </div>
    );
};

export default Course;