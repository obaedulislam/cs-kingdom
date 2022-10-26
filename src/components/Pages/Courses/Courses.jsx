import React from 'react';
import { useLoaderData } from 'react-router-dom';

import RightSideBar from '../../Shared/RightSideBar/RightSideBar';

const Courses = ({course}) => {
    const courses = useLoaderData();
     return (
        <div className='grid grid-cols-12 gap-4'>
            {
            courses.map(course => <RightSideBar
                key={course.id}
                course = {course}
            ></RightSideBar>)
            }

        </div>
    );
};

export default Courses;