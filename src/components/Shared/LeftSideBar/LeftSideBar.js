import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const LeftSideBar = () => {
    const courses = useLoaderData();
     return (
        <div className='text-center p-4 bg-slate-900 shadow-xl rounded-xl'>
            {
            courses.map(course => <Link to={`/course/${course.id}`} className='bg-[#9c6bf2] hover:bg-[#c3a6f7] duration-300 cursor-pointer mb-4 last:mb-0 shadow-inner block text-[18px]  rounded px-3 py-1 text-black font-bold'
                key={course.id}
                course = {course}
            ><span >{course.course_name}</span></Link>)
            }

        </div>
    );
};

export default LeftSideBar;