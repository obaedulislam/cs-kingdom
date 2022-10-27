import React from 'react';
import { Link } from 'react-router-dom';
import { MdReadMore  } from "react-icons/md";
import { AiTwotoneStar } from "react-icons/ai";

const RightSideBar = ({course}) => {
    const {id, title, course_name, image_url, rating, totalEnroll, instructor} = course;

     return (
            <div className="card w-full bg-gray-900 shadow-xl rounded-xl lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12  h-full">
                <div className='col-span-4'>
                    <figure><img src={image_url} alt="Shoes" /></figure>
                    <div className="card-body px-3 py-5 relative ">
                        <div className="card-title flex justify-between">
                            <h2 className=" font-bold text-[18px] text-[#FAB400]">{course_name}</h2>
                            <div className="badge badge-outline text-[#FAB400]"><AiTwotoneStar className='text-[12px] mr-1'></AiTwotoneStar><span className='text-[14px]'>{rating.number}</span></div>
                        </div>
                        <p>By <span className='text-[#9c6bf2]'>{instructor.name}</span></p>
                        <div className=" mt-3">
                            <Link to={`/course/${course.id}`} ><button className=" text-black py-1 w-full  font-bold rounded-lg bg-[#FAB400] duration-300  hover:bg-[#c99204] flex justify-center items-center cursor-pointer">See Course Details <MdReadMore className=' ml-1 text-xl'></MdReadMore></button></Link>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default RightSideBar;