import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';



const User = () => {

    const {user} =  useContext(AuthContext);
    return (
        <div className='lg:py-16 md:py-12 py-8 md:px-0 px-3'>
            <div className=' max-w-[400px] mx-auto text-center bg-slate-900 p-4 rounded-lg shadow-lg'>

            <h1 className='lg:text-5xl sm:text-3xl text-2xl mt-3 text-[#FAB400]  font-bold '> User Data</h1>

            <div className='flex justify-center mt-4'>
                <img className='rounded-full w-32 h-32' src={user?.photoURL} alt={user?.displayName} />
            </div>
            <h1 className='lg:text-3xl sm:text-3xl text-xl mt-3 text-[#FAB400]  font-bold '> {user?.displayName}</h1>
            <h1 className='lg:text-2xl sm:text-lg text-md text-[#9c6bf2] font-bold '> {user?.email}</h1>

            </div>  
        </div>
        
    );
};

export default User;