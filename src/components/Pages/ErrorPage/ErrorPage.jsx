import React from 'react';
import errorimage from '../../../assets/errorimage.gif'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";


const ErrorPage = () => {
    console.log(Error);
    return (
        <div>
            <div className="error-container mx-auto max-w-[600px] py-12 sm:px-5 px-3">
                <div className="error-img w-[150px] mx-auto">
                    <img className='rounded-lg' src={errorimage}  alt='ErrorImage'/>

                </div>
                <div className="error-name  mt-4" >
                    <h1 className=' lg:text-7xl md:text-5xl text-4xl  text-[#FAB400]  text-center font-bold'>404</h1>
                </div>
                <div className="error-title mt-3">
                    <h2 className='lg:text-2xl md:text-xl text-lg text-center text-[#00A0C8] font-bold'>Oops! This page not found.</h2>
                </div>
                <div className="error-desc text-center sm:mt-4 mt-2">
                    <p className='sm:text-[15px] text-[14px]'>We can't found this page. This website don't contain any page like it. So please go to the homepage to navigate our website.</p>
                </div>
                <div className="back-hom text-center mt-4">
                    <Link to='/'>
                        <button  className = "btn  text-black font-lg font-bold py-2 px-2  duration-300 bg-[#FAB400] hover:bg-[#00A0C8]  rounded">
                                        <span className='uppercase sm:text-[15px] text-[13px]'>Back to Home</span>  
                                        <FaHome></FaHome> 
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;