import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    const {id, course_name} = courses;

    return (
        <div>
            <h1>This is Course: {course_name}</h1>
            <p>{course_name}</p>
        </div>
    );
};

export default Courses;