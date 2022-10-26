import React from 'react';
import LeftSideBar from '../../Shared/LeftSideBar/LeftSideBar';
import Courses from '../Courses/Courses';

const Home = () => {

    return (
        <div className='max-w-[1150px] mx-auto py-16 grid grid-cols-12 gap-8'>
            <div className='col-span-3 '>
                <LeftSideBar></LeftSideBar>
            </div>
            <div className='col-span-9'>
                <Courses></Courses>
            </div>

        </div>
    );
};

export default Home;