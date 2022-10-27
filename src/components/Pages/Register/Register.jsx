import React, { useState } from 'react';
import signupphoto from "../../../assets/signupphoto.png"
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { SiGnuprivacyguard } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { GrGithub} from "react-icons/gr";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';


const Register = () => {

    
    const {googleProviderLogin, githubProviderLogin, createUser, signIn, verifyEmail, updateUserProfile} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const[error, setError] = useState('');
    // const[accepted, setAccepted] = useState(false);
    
    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('Successfully SignUp With Google');
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
            toast.success('Successfully SignUp With Github');
        })
        .catch(error => {
            console.error(error);
        })
    }


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password);


        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            handleUserUpdateProfile(name, photoURL);
            handleEmailVerification();
            form.reset();
            toast.success('Please verify your email ');
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
            const errorCode = error.code;
            toast.error(`Please provide valid data, ${errorCode}`)
        })
    }


    const handleUserUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        };
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error)) 
    }

    const handleEmailVerification = () => {
        verifyEmail()
        .then(() => {})
        .catch(error => console.error(error)) 
    }

    // const handleAcceptTerms = event => {
    //     setAccepted(event.target.check);
    // }


    return (
        <div className='py-16 max-w-[900px] grid md:grid-cols-2 grid-cols-1 md:px-0 px-3  mx-auto gap-20'>
        <div className="side-img flex items-center">
            <img className='md:w-full sm:w-[50%] w-[60%] mx-auto ' src={signupphoto} alt="" />
        </div>
        <div className="form-control w-full mx-auto bg-gray-900 p-5 rounded-xl shadow-xl">
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label">
                        <span className="label-text text-xl">Your Full Name:</span>
                    </label>
                    <input type="text" name='name' placeholder="Full name" className="input rounded-lg input-bordered bg-gray-700 w-full text-lg" />
                </div>

                <div className='mt-2'>
                    <label className="label">
                        <span className="label-text text-xl">Your Photo URL:</span>
                    </label>
                    <input type="url" name='photoURL' placeholder="Your photoURL" className="input rounded-lg input-bordered bg-gray-700 w-full text-lg" />
                </div>

                <div className='mt-2'>
                    <label className="label">
                        <span className="label-text text-xl">Your Email:</span>
                    </label>
                    <input type="email" name='email' placeholder="Your email" className="input rounded-lg input-bordered bg-gray-700 w-full text-lg" />
                </div>

                <div className='mt-2'>
                    <label className="label ">
                        <span className="label-text text-xl">Your Password:</span>
                    </label>
                    <input type="password" name='password' placeholder="Your password" className="input  input-bordered bg-gray-700 rounded-lg w-full text-lg " />
                </div>
                <div>
                    <p className="text-danger mt-2 mb-0">
                    {error.message}
                    </p>
                </div>

                {/* <div className='mt-3 flex justify-center items-center'>
                    <input className='w-4 h-4 cursor-pointer'   onClick={handleAcceptTerms} type="checkbox" name="checkbox" value="accepted"/>
                    <Link to='terms' className='text-lg ml-2 cursor-pointer'><label htmlFor="checkbox"> Accept Terms & Condition</label></Link>
                </div> */}

                <div className='mt-7 '>
                    <button  className=" text-black py-1 w-full text-xl font-bold rounded-lg bg-[#FAB400] duration-300  hover:bg-[#c99204] flex justify-center items-center cursor-pointer">Register <SiGnuprivacyguard className=' ml-1'></SiGnuprivacyguard></button>
                    <p className='text-center mt-2'>Already Register? <span className='text-[#c3a6f7] hover:text-[#9c6bf2] duration-200 underline font-bold '><Link to='/login'>Login</Link></span></p>
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

export default Register;