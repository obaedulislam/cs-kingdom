import React from 'react';
import { BsCartDash } from "react-icons/bs";
const PremiumAccess = () => {
    return (
        <div className='max-w-[1150px] mx-auto lg:py-16 md:py-12 py-8 '>
            <div className="page-head flex justify-center items-center">
                <h1 className='text-5xl text-[#FAB400]  font-bold '>Checkout Now</h1>
                {/* <BsCartDash className='text-5xl text-[#FAB400]  font-bold'></BsCartDash>  */}
            </div>  
            <div className="checkout-container grid grid-cols-12 gap-5 ">
                <div className="checkout-left col-span-8 bg-black p-5">
                    <h4 className='px-5 font-semibold text-lg py-2 shadow-lg bg-[#121212] '>Please Complete payment detail to enroll this course</h4>

                    <h3 className='text-bold mt-7 uppercase tracking-wide'>Billing Information</h3>
                    <div className='billing-person bg-[#121212] shadow-lg rounded mt-2'>
                        <p className='border-b-[1px] border-[#000] px-3 py-2'>Name: <span>Obaedul Islam</span></p>
                        <p className='px-3 py-2'>Eamil: <span>Obaed.cse@gmail.com</span></p>
                    </div>


                </div>
                <div className="checkout-right col-span-4"></div>
            </div>

        </div>

    );
};

export default PremiumAccess;