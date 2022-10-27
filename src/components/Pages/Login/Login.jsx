import React, { useState } from 'react';
import signinphoto from "../../../assets/signinphoto.png"
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { BiLogInCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { GrGithub} from "react-icons/gr";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {

    const {googleProviderLogin, githubProviderLogin, signIn, setLoading} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            if(user.emailVerified){
                navigate(from, {replace: true});
            }
            else{
                toast.error('Your email is not verified');
                return;
            }
            setError('');
        })
        .catch(e => {
            console.error(e);
            setError(e.message);
        })

    }
    
    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast("")
        })
        .catch(error => {
            console.error(error);
        })
    }

    const handleGithubSignIn = () => {
        githubProviderLogin(githubProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='py-16 max-w-[900px] grid md:grid-cols-2 grid-cols-1 md:px-0 px-3  mx-auto gap-20'>

            <div className=" side-img flex items-center ">
                <img className='md:w-full sm:w-[50%] w-[60%]  mx-auto ' src={signinphoto} alt="" />
            </div>

            <div className="form-control w-full mx-auto bg-gray-900 p-5 rounded-xl shadow-xl">

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label className="label">
                            <span className="label-text text-xl">Your Email:</span>
                        </label>
                        <input type="email" name='email' placeholder="Your email" className="input rounded-lg input-bordered bg-gray-700 w-full text-lg" />
                    </div>
                    
                    <div>
                        <label className="label mt-2">
                            <span className="label-text text-xl">Your Password:</span>
                        </label>
                        <input type="password" name='password' placeholder="Your password" className="input  input-bordered bg-gray-700 rounded-lg w-full text-lg " />
                    </div>
                    <div>
                        <p className="text-danger mt-2 mb-0">
                        {error}
                        </p>
                    </div>

                    <div className='mt-7 '>
                        <button className=" text-black py-1 w-full text-xl font-bold rounded-lg bg-[#FAB400] duration-300  hover:bg-[#c99204] flex justify-center items-center cursor-pointer">Login <BiLogInCircle className=' ml-1'></BiLogInCircle></button>
                        <p className='text-center mt-2'>Don't have an account? <span className='text-[#c3a6f7] hover:text-[#9c6bf2] duration-200 underline font-bold '><Link to='/register'>Register Now</Link></span></p>
                        <p className='text-[#c3a6f7] text-xl text-center mt-3'>--------- OR ---------</p>
                    </div>

                    
                </form>

                <div className='mt-5 '>
                    <button onClick = {handleGoogleSignIn} className=" text-[#9c6bf2] py-1 w-full text-lg font-semibold rounded-lg bg-[#111111] hover:bg-black  duration-300 flex justify-center items-center"><FcGoogle className='text-2xl'></FcGoogle> <span className='ml-2'>Continue with Google</span></button>
                </div>
                <div className='mt-2 '>
                    <button onClick={handleGithubSignIn} className=" text-[#9c6bf2] py-1 w-full text-lg font-semibold rounded-lg bg-[#111111] hover:bg-black duration-300  flex justify-center items-center"><GrGithub className='text-2xl'></GrGithub> <span className='ml-2'>Continue with Github</span></button>
                </div>
            </div>
        </div>
    );
};

export default Login;