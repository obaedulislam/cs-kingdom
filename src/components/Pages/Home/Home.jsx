import React from 'react';
import LeftSideBar from '../../Shared/LeftSideBar/LeftSideBar';
import Courses from '../Courses/Courses';

const Home = () => {

    return (
        <div className='max-w-[1150px] mx-auto lg:py-16 md:py-12 py-8 grid grid-cols-12 lg:gap-5 gap-4'>
            <div className='lg:col-span-3 md:col-span-3 sm:col-span-12 col-span-12 md:px-0 sm:px-3'>
                <LeftSideBar></LeftSideBar>
            </div>
            <div className='md:col-span-9  sm:col-span-12 col-span-12 md:px-0 sm:px-3'>
                <Courses></Courses>
            </div>

        </div>
    );
};

export default Home;