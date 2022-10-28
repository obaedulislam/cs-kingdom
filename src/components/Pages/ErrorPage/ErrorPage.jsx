import React from 'react';
import errorimage from '../../../assets/errorimage.png'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";


const ErrorPage = () => {
    console.log(Error);
    return (
        <div>
            <div className="error-container mx-auto max-w-[600px] py-12 sm:px-5 px-3">
                <div className="error-img sm:w-[350px] w-[200px] mx-auto">
                    <img className='rounded-lg' src={errorimage}  alt='ErrorImage'/>
                </div>
                {/* Error Image End */}

                <div className="error-title mt-3">
                    <h2 className='lg:text-2xl md:text-xl text-lg text-center text-[#9c6bf2] font-bold'>Oops! This page not found.</h2>
                </div>
                {/* Error Title End */}

                <div className="error-desc text-center sm:mt-4 mt-2">
                    <p className='sm:text-[15px] text-[14px]'>We can't found this page. This website don't contain any page like it. So please go to the homepage to navigate our website.</p>
                </div>
                 {/* Error Description End */}

                <div className="back-home text-center mt-4">
                    <Link to='/'>
                        <button  className = "btn  btn-md text-black font-lg font-bold py-2 px-5  duration-300 bg-[#FAB400] hover:bg-[#c99204]  rounded">
                            <span className='uppercase sm:text-[17px] text-[15px]'>Back to Home</span>  
                            <FaHome className='text-lg ml-1'></FaHome> 
                        </button>
                    </Link>
                </div>
                {/* Back To home button End */}
            </div>
        </div>
    );
};

export default ErrorPage;