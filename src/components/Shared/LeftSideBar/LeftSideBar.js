import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';



const LeftSideBar = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4100/courses')
        .then(res => res.json())
        .then(data => setCourses(data))

    }, []);

     return (
        <div className='text-center p-4 bg-slate-900 shadow-xl rounded-xl lg:block md:block sm:grid grid-cols-4  gap-2'>
            {
            courses.map((course, index) => {
                return (<Link to={`/course/${course.id}`} className=' bg-[#9c6bf2] hover:bg-[#c3a6f7] duration-300 cursor-pointer lg:mb-4 md:mb-3 mb-1 last:mb-0 shadow-inner lg:block lg:text-[18px] sm:text-[12px]  rounded px-3 py-1 text-black font-bold'
                key={index}
                course = {course}
            ><span >{course.course_name}</span></Link>); 
            })
            }
           
        </div>
    );
};

export default LeftSideBar;