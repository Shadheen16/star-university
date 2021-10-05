import React from 'react';
import "./Course.css"
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Course = (props) => {
    const {img, title, department, campus, credit, instructor } = props.course;

    const buttonText = props.buttonText;
    const variant = props.buttonVariant;

    return (
        <div className="col col-lg-4 mb-4">
            <Card style={{ width: '18rem' }} className="card">
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title><span className=" me-1">Course title:</span>{title}</Card.Title>
                    <small className="text-danger">Instructor: {instructor}</small> 
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> Fuculty: {department}</ListGroupItem>
                    <ListGroupItem> Campus: {campus}</ListGroupItem>
                    <ListGroupItem>Credit: {credit}</ListGroupItem>
                </ListGroup>

                <Button variant={variant}>{buttonText}</Button>
            </Card>

        </div>
    );
};

export default Course;