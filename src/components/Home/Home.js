import React from 'react';
import './Home.css'
import { Accordion, Button, Carousel } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Course from '../Course/Course';


const Home = (props) => {
    const courses = useContext(CourseContext);
    const courseArray = Object.entries(courses);
    const slicedCourses = Object.values(Object.fromEntries(courseArray.slice(0, 3)));

    let history = useHistory();
    function goToAdmission() {
        history.push("/admission");
    }
    function goToCourses() {
        history.push("/courses")
    }
    return (
        <div>
            <div className="img-slider">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.architecturaldigest.com/photos/58ac7548a4527904a46a63dc/master/w_1600%2Cc_limit/6%252520-%252520Lassonde%252520Studios%252520-%252520Credit%252520CannonDesign.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>The Best University of The State</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGlnaGVyJTIwZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1>More Than 180 Majors and Minors</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className=" p-5">
                <h2 className="my-3 fw-bold"> AVAILABLE COURSES </h2>
                <div className="row pt-3">
                    {
                        slicedCourses.map(course => <Course
                            buttonVariant="light"
                            key="course.title"
                            course={course}
                        ></Course>)
                    }

                </div>
                <Button variant="danger" onClick={goToCourses}>More Courses</Button>
            </div>
            <div className="p-5">
            <div className="d-md-flex">
                <div className="p-3">
                    <img className="img-fluid" src="https://admissions-office.net/images/site/top_v1.jpg" alt="" />
                </div>
                <div>
                  <div>
                  <h3 className="fw-bold mt-auto pt-3">
                        APPLY FOR ADMISSION
                    </h3>
                    <p className="text-danger">Fall 2021 applications are now open</p>
                    <br />
                    <p>
                        We don’t just give students an education and experiences that set them up for success in a career. We help them succeed in their career—to discover a field they’re passionate about and dare to lead it.
                    </p>
                  </div>

                    <Button variant="danger" onClick={goToAdmission} >Appy Now</Button>
                </div>
            </div>
            </div>
            <div className="p-5">
                <h1>
                    Frequently Asked Quistions
                </h1>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How can I get a scholarship ?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How can I get waver on tution fees ?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is the opportuinity for international student ? ?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Home;
