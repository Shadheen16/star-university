import React from 'react';
import { useContext } from 'react';
import { CourseContext } from '../../App';
import Course from '../Course/Course';

const Courses = (props) => {
    const courses = useContext(CourseContext);
    return (
        <div>
            <img className="img-fluid w-100" src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_823315500_406162.jpg" alt="" />
            <h1 className="ms-5 fw-bold text-dark mt-5">
               COURSE LIST
            </h1>
            <div className="row p-5 pt-5">
                {
                    courses.map(course => <Course
                        buttonVariant="danger"
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