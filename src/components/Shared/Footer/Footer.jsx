import React from 'react';
import { Link } from 'react-router-dom';
import appstore from '../../../assets/appstore.png'
import googleplay from '../../../assets/googlplay.png'

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-gray-900 py-8 w-[100%]' >
            <div className='max-w-[1150px] mx-auto'>
                 <h2 className=" font-bold text-3xl text-[#FAB400] text-center">Connect With Us!</h2>

                 <div className='flex justify-center  mt-5'>
                    <ul className='flex'>
                        <Link className='w-[43px] h-[43px] mx-[5px] bg-black hover:bg-[#333333] text-[#9c6bf2]  rounded-full pt-3 flex justify-center' to='https://www.facebook.com/obaedulislam.mohammad/' target="_blank"><FaFacebookF className='text-lg text-lg '></FaFacebookF></Link>
                        <Link className='w-[43px] h-[43px] mx-[5px] bg-black hover:bg-[#333333] text-[#9c6bf2]  rounded-full pt-3 flex justify-center' to='https://www.twitter.com/obaedulislam' target="_blank"><FaTwitter className='text-lg text-lg '></FaTwitter></Link>
                        <Link className='w-[43px] h-[43px] mx-[5px] bg-black hover:bg-[#333333] text-[#9c6bf2]  rounded-full pt-3 flex justify-center' to='https://github.com/obaedulislam' target="_blank"><FaGithub className='text-lg text-lg '></FaGithub></Link>
                        <Link className='w-[43px] h-[43px] mx-[5px] bg-black hover:bg-[#333333] text-[#9c6bf2]  rounded-full pt-3 flex justify-center' to='https://www.linkedin.com/in/obaedulislam/' target="_blank"><FaLinkedinIn className='text-lg text-lg '></FaLinkedinIn></Link>
                        <Link className='w-[43px] h-[43px] mx-[5px] bg-black hover:bg-[#333333] text-[#9c6bf2]  rounded-full pt-3 flex justify-center' to='https://www.instagram.com/obaedul_islam/' target="_blank"><FaInstagram className='text-lg text-lg '></FaInstagram></Link>

                    </ul>
                 </div>
                 <div>
                    <p className='text-center mt-5'>Copyright &copy; 2022 | All right Reserved by Obaedul Islam</p>
                 </div>

            </div>

        </div>
    );
};

export default Footer;