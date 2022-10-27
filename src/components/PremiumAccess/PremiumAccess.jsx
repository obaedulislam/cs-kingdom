import React, { useContext } from 'react';
import { BsFillCartPlusFill } from "react-icons/bs";
import {  useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';



const PremiumAccess = () => {
    const course = useLoaderData();
    const {id, title, course_name, image_url, rating, total_enroll, price, instructor, description, course_features} = course;

    const {user} =  useContext(AuthContext);

    return (
        <div className='max-w-[1150px] mx-auto lg:py-16 md:py-12 py-8 md:px-0 px-3'>
            <div className="page-head flex justify-center items-center">
                <h1 className='lg:text-5xl sm:text-3xl text-2xl text-[#FAB400]  font-bold '>Checkout Now</h1>
            </div>  
            {/* Check Top  End */}

            <div className="checkout-container grid grid-cols-12 gap-5 mt-12">
                <div className="checkout-left sm:col-span-8 col-span-12 bg-black p-5 rounded-xl">
                    <h4 className='px-3 py-2  font-semibold text-xl shadow-lg bg-[#121212] text-[#9c6bf2]'>Please Complete payment detail to enroll this course</h4>

                    <h3 className='font-semibold mt-7 uppercase tracking-wide'>Billing Information</h3>
                    <div className='billing-person bg-[#121212] shadow-lg rounded mt-2'>
                        <p className='border-b-[1px] border-[#000] px-3 py-2'>Name: <span>{user?.displayName}</span></p>
                        <p className='px-3 py-2'>Email: <span>{user?.email}</span></p>
                    </div>

                    <h3 className='font-semibold mt-7 uppercase tracking-wide'>Payment Menthod</h3>
                    <div className='billing-person bg-[#121212] shadow-lg  mt-2 px-3 py-3'>
                        <label className='mr-3' htmlFor="text">Bank AC No.</label>
                        <input type="text" placeholder="Type here" class="input input-sm w-full max-w-xs border-slate-700  rounded-0  " />
                    </div>
                    <div className="checkout-btn mt-7">
                            <button className=" text-black lg:text-2xl sm:text-xl text-md py-1 w-full  font-bold rounded-lg bg-[#FAB400] duration-300  hover:bg-[#c99204] flex justify-center items-center cursor-pointer">Pay Now <BsFillCartPlusFill className=' ml-1 lg:text-3xl sm:text-xl text-md'></BsFillCartPlusFill></button>
                    </div>
                </div>
               {/* Check Out Left End */}


                <div className="checkout-right sm:col-span-4 col-span-12 bg-black p-5 rounded-xl">
                    <div className="course-hint flex md:flex-row flex-col ">
                        <div className="course-img">
                            <img className='w-[70px] h-[50px]' src={image_url}  alt="" />
                        </div>
                        <h2 className=" font-bold text-[18px] text-[#FAB400] md:ml-3 sm:ml-o ml-0 lg:mt-0 md:mt-0 mt-3">{title}</h2>
                    </div>
                    <div className="course-price sm:mt-7 mt-3">
                        <div className='flex justify-between items-center '>
                            <h2 className='font-semibold lg:text-xl  sm:text-lg text-lg'>Course Price: </h2>
                            <h2 className='text-[#FAB400] md:text-2xl sm:text-lg text-md font-bold'> ${price}</h2>
                         </div>
                        <div className='flex justify-between items-center sm:mt-2 mt-1'>
                            <h2 className='font-semibold lg:text-xl  sm:text-lg text-lg'>Tax: </h2>
                            <h2 className='text-[#FAB400] md:text-2xl sm:text-lg text-md font-bold'> $11.23</h2>
                         </div>
                         <div className='h-[1px] w-full bg-slate-900 md:mt-10 sm:mt-5 mt-3  '></div>
                        <div className='flex justify-between items-center sm:mt-2 mt-1'>
                            <h2 className='font-semibold lg:text-xl  sm:text-lg text-lg'>Total: </h2>
                            <h2 className='text-[#FAB400] font-bold md:text-2xl sm:text-lg text-md'> $11.23</h2>
                         </div>

                    </div>

                </div>
                {/* Check Out Right End */}
            </div>

        </div>

    );
};

export default PremiumAccess;