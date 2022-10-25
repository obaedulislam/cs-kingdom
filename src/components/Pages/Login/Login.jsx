import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { BiLogInCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { GrGithub} from "react-icons/gr";
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const {googleProviderLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    
    
    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='py-16'>
            <div className="form-control w-full max-w-[400px] mx-auto bg-gray-900 p-5 rounded-xl shadow-xl">
                <label className="label">
                    <span className="label-text text-xl">Your Email:</span>
                </label>
                <input type="text" placeholder="Your email" className="input rounded-lg input-bordered bg-gray-700 w-full text-lg" />
                <label className="label mt-2">
                    <span className="label-text text-xl">Your Password:</span>
                </label>
                <input type="password" placeholder="Your password" className="input  input-bordered bg-gray-700 rounded-lg w-full text-lg " />
                <div className='mt-7 '>
                    <button className=" text-black py-1 w-full text-xl font-bold rounded-lg bg-[#FAB400] duration-300  hover:bg-[#c99204] flex justify-center items-center">Login <BiLogInCircle className=' ml-1'></BiLogInCircle></button>
                </div>
                <div className='mt-7 '>
                    <button onClick = {handleGoogleSignIn} className=" text-[#9c6bf2] py-1 w-full text-lg font-semibold rounded-lg bg-[#111111] hover:bg-black  duration-300 flex justify-center items-center"><FcGoogle className='text-2xl'></FcGoogle> <span className='ml-2'>Continue with Google</span></button>
                </div>
                <div className='mt-2 '>
                    <button className=" text-[#9c6bf2] py-1 w-full text-lg font-semibold rounded-lg bg-[#111111] hover:bg-black duration-300  flex justify-center items-center"><GrGithub className='text-2xl'></GrGithub> <span className='ml-2'>Continue with Github</span></button>
                </div>
            </div>
        </div>
    );
};

export default Login;