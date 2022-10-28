import React from 'react';
import { Link } from 'react-router-dom';

import googleplay from '../../../assets/googleplay.png'
import { BsApple } from "react-icons/bs";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-gray-900 py-8 w-[100%]' >
            <div className='max-w-[1150px] mx-auto'>
                 <h2 className=" font-bold text-3xl text-[#FAB400] text-center">Download Our App!</h2>

                 <div className="app flex flex-col items-center sm:flex-row justify-center my-5 ">
                    <Link>
                        <div class="flex items-center border rounded-lg px-4 py-2 bg-[#111111]  mx-2">
                            <img src={googleplay} class="w-5 md:w-6" alt="welcome"/>
                            <div class="text-left ml-3">
                                <p class="text-xs text-gray-200">Download from </p>
                                <p class="text-sm md:text-base"> Google Play Store </p>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div class="flex items-center border rounded-lg px-4 bg-[#111111] py-2  mx-2 md:mt-0 mt-2">
                            <BsApple class="text-[22px] text-gray-300" ></BsApple>
                            <div class="text-left ml-3">
                                <p class="text-xs text-gray-200">Download from </p>
                                <p class="text-sm md:text-base"> Google Play Store </p>
                            </div>
                        </div>
                    </Link>
                 </div>
                 {/* App section end */}

                 <div>
                    <h2 className=" font-bold text-lg  text-center">Connected With Us</h2>
                    <div className='flex justify-center  mt-2'>
                    
                        <ul className='flex'>
                            <Link className='w-[43px] h-[43px] mx-[5px] bg-black hover:bg-[#333333] text-[#9c6bf2]  rounded-full pt-3 flex justify-center' to='https://www.facebook.com/obaedulislam.mohammad/' target="_blank"><FaFacebookF className='text-lg text-lg '></FaFacebookF></Link>
                            <Link className='w-[43px] h-[43px] mx-[5px] bg-black hover:bg-[#333333]  text-[#9c6bf2]  rounded-full pt-3 flex justify-center' to='https://www.twitter.com/obaedulislam' target="_blank"><FaTwitter className='text-lg text-lg '></FaTwitter></Link>
                            <Link className='w-[43px] h-[43px] mx-[5px] bg-black hover:bg-[#333333] text-[#9c6bf2]  rounded-full pt-3 flex justify-center' to='https://github.com/obaedulislam' target="_blank"><FaGithub className='text-lg text-lg '></FaGithub></Link>
                            <Link className='w-[43px] h-[43px] mx-[5px] bg-black hover:bg-[#333333] text-[#9c6bf2]  rounded-full pt-3 flex justify-center' to='https://www.linkedin.com/in/obaedulislam/' target="_blank"><FaLinkedinIn className='text-lg text-lg '></FaLinkedinIn></Link>
                            <Link className='w-[43px] h-[43px] mx-[5px] bg-black hover:bg-[#333333] text-[#9c6bf2]  rounded-full pt-3 flex justify-center' to='https://www.instagram.com/obaedul_islam/' target="_blank"><FaInstagram className='text-lg text-lg '></FaInstagram></Link>

                        </ul>
                    </div>
                 </div>
                 {/* Social Media Icon End */}

                 <div>
                    <p className='text-center mt-5'>Copyright &copy; 2022 | All right Reserved by <Link to='http://obaedulislam.com/' target= "_blank" className='text-gray-400 hover:text-[#FAB400]'>Obaedul Islam</Link>  | <Link className='text-gray-400 hover:text-[#FAB400]'>Privacy Policy</Link> | <Link className='text-gray-400 hover:text-[#FAB400]  '>Terms & Conditions</Link></p>
                 </div>
                {/* Footer Bottom End */}
                
            </div>

        </div>
    );
};

export default Footer;