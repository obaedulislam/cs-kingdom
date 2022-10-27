import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cdetails = () => {
    const course = useLoaderData();

    const {id, title, course_name, image_url, rating, totalEnroll, instructor} = course;
    console.log(course);
    return (
        <div>
            <h1>Hello</h1>
            
        </div>
    );
};

export default Cdetails;