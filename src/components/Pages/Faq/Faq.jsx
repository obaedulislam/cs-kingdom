import React from 'react';

const Faq = () => {
    return (
        <div className='lg:py-16 md:py-12 py-8 md:px-0 px-3  max-w-[700px] mx-auto sm:px-0 px-3 '>

            <div className="page-head flex justify-center items-center pb-8">
                <h1 className='lg:text-5xl sm:text-3xl text-2xl text-[#FAB400]  font-bold '> FAQ</h1>
            </div>  
                <div tabindex="0" class="collapse collapse-plus border border-base-300 rounded-box mb-3">
                    <div class="collapse-title text-2xl font-medium bg-gray-900 ">
                        <h3>Who we are CS Kingdom?</h3>
                    </div>
                    <div class="collapse-content  bg-[#000]">
                        <p className='mt-2'>CS Kingdom Is a Computer Science Kingdom. Where you can find modern Computer science course. It is the world best Learning platform that we can honestly say.</p>
                    </div>
                </div>

                <div tabindex="1" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
                    <div class="collapse-title text-2xl font-medium bg-gray-900 ">
                        <h3>What we learn here?</h3>
                    </div>
                    <div class="collapse-content bg-[#000]">
                        <p className='mt-2'>You can learn world hot Computer Course Here. They Are Artificial Intelligence, Neural Networks, Algorithms & Analysis, Python for Everybody, Google Data Analytic, CS50's Introduction, Python Data Structures, Data Science & Python & java Programming. In future we will provide more corse.</p>
                    </div>
                </div>

                <div tabindex="2" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
                    <div class="collapse-title text-2xl font-medium bg-gray-900 ">
                        <h3>What about instructor?</h3>
                    </div>
                    <div class="collapse-content bg-[#000]">
                        <p className='mt-2'>All instructor are world class. they are graduated from world top university & work on world top companies.</p>
                    </div>
                </div>

                <div tabindex="3" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
                    <div class="collapse-title text-2xl font-medium bg-gray-900 ">
                        <h3>How can we pay for course?</h3>
                    </div>
                    <div class="collapse-content bg-[#000]">
                        <p className='mt-2'>We usually accept Bank Payment also Paypal, stripe payment available.</p>
                    </div>
                </div>
        </div>
    );
};

export default Faq;