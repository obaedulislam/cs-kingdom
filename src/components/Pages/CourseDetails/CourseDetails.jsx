import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideBar from '../../Shared/LeftSideBar/LeftSideBar';
import { AiFillPrinter } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import { TbPremiumRights } from "react-icons/tb";

const CourseDetails = () => {
    const course = useLoaderData();
    const {id, title, course_name, image_url, rating, total_enroll, price, instructor, description, course_features} = course;

    return (
        <div className='max-w-[1150px] mx-auto lg:py-16 md:py-12 py-8 grid grid-cols-12 lg:gap-5 gap-4'>
            <div className='lg:col-span-3 md:col-span-3 sm:col-span-12 col-span-12 md:px-0 sm:px-3'>
                <LeftSideBar></LeftSideBar>
            </div>
            <div className='md:col-span-9  sm:col-span-12 col-span-12 md:px-0 sm:px-3 bg-[#151515] rounded-lg'>
                <div className="course-header bg-gray-900 rounded-t-lg flex justify-between p-4">
                    <div>
                         <h2 className='text-[#FAB400] font-bold lg:text-2xl  sm:text-xl text-lg'>{title}</h2>

                         <div className='flex items-center mt-2'>
                            <h2 className='font-semibold lg:text-xl  sm:text-lg text-lg'>Course Price: <span className='text-[#FAB400] text-2xl font-bold'> ${price}</span></h2>
                            <div className="badge badge-outline text-[#FAB400] ml-8"><AiTwotoneStar className='text-[12px] mr-1'></AiTwotoneStar><span className='text-[14px] '>{rating?.number}</span></div>
                            <p className=" text-[#FAB400] ml-2">{rating?.badge}</p>
                         </div>

                         <div className="head-bottom flex items-center mt-2">
                            <div className="instructor-img">
                                <img className='w-8 h-8 rounded-full' src={instructor?.img} alt="" />
                            </div>
                            <p className='ml-3'>By: <span className='text-[#9c6bf2] font-bold '>{instructor?.name}</span></p>
                            <p className='ml-5'>Total Enrol: <span className='text-[#9c6bf2] font-bold '>{total_enroll}</span></p>
                         </div>

                    </div>
                    <div>
                        <AiFillPrinter className='text-3xl'></AiFillPrinter>
                    </div>
                </div>
                <div className="course-body p-5">
                    <img className='w-[400px] h-[300px] mx-auto rounded-xl' src={image_url} alt="" />
                    <div className="description mt-4">
                        <p>{description}</p>
                    </div>
                    <div className="course-feature">
                    <h3 className='text-[#FAB400] text-xl font-semibold mt-4'>Feature of this Course:</h3>
                        <ul className='list-decimal ml-10'>
                            <li className='font-bold'><p>{course_features[0]}</p></li>
                            <li className='font-bold'><p>{course_features[1]}</p></li>
                            <li className='font-bold'><p>{course_features[2]}</p></li>
                            <li className='font-bold'><p>{course_features[3]}</p></li>
                            <li className='font-bold'><p>{course_features[4]}</p></li>
                            <li className='font-bold'><p>{course_features[5]}</p></li>
                        </ul>
                    </div>
                </div>
                <div className="course-footer bg-slate-900 rounded-t-lg p-5 flex justify-between items-center">
                    <div className="update-date">
                        <p className='text-lg'>Last Update: <span className='text-[#FAB400]  font-bold '>{instructor?.last_update}</span></p>
                    </div>
                    <div className="get-premium-access ">
                        <Link to={`/premium-access`} ><button className=" text-black py-1 px-5 text-lg  font-bold rounded-lg bg-[#9c6bf2] duration-300  hover:bg-[#c3a6f7] hover:scale-105 flex justify-center items-center cursor-pointer"> <TbPremiumRights className=' mr-2 text-2xl'></TbPremiumRights> Get Premium Access</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;