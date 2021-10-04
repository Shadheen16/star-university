import React from 'react';
import { useContext } from 'react';
import Course from '../Course/Course';

const Courses = (props) => {
    const courses = useContext(CourseContext);
    return (
        <div>
            <img className="img-fluid w-100" src="https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
            <h1 className="ms-5 text-light position-absolute bottom-0 ">
               Course List
            </h1>
            <div className="row p-5 pt-5">
                {
                    courses.map(course => <Course
                        buttonText="Show Detail"
                        key={course.title}
                        course={course}
                    >

                    </Course>)
                }

            </div>
        </div>

    );
};

export default Courses;