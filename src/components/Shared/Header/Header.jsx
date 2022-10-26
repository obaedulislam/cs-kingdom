import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import cslogo from "../../../assets/cslogo.png"
import './Header.css'
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {user, logOut} =  useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then( () => {})
    .catch(error => console.error(error))
  }

  return (
    <div className="sticky top-0 z-10">
      <div className="header bg-gray-900 py-2 w-[100%]">
        <div className="lg:px-0 md:px-5 px-3  navbar-menu max-w-[1150px]   mx-auto flex justify-between items-center">
        <Link to='/'>
            <div className="site-logo flex items-center">

                    <div className="logo">
                        <img src={cslogo}alt="Quiz Dev" className="w-[60px] h-[60px]" />
                    </div>
                    <div className="logo-text ml-1">
                        <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold"><span className="text-[#FAB400] ">CS</span> <span className="text-[#9c6bf2]">Kingdom</span> </h1>
                    </div>
            </div>
            </Link>
            <nav className="nav-item md:flex items-center hidden">
                <NavLink to='/home'className={({isActive}) => isActive ? 'border-b-4 border-[#FAB400] text-[#9c6bf2]' : undefined }>Home</NavLink>
                <NavLink to='/courses'className={({isActive}) => isActive ? 'border-b-4 border-[#FAB400] text-[#9c6bf2]' : undefined }>Courses</NavLink>
                <NavLink to='/faq'className={({isActive}) => isActive ? 'border-b-4 border-[#FAB400] text-[#9c6bf2]' : undefined }>FAQ</NavLink>
                <NavLink to="/blog" className={({isActive}) => isActive ? 'border-b-4 border-[#FAB400] text-[#9c6bf2]' : undefined }>Blog</NavLink>
                <NavLink to="/" className={({isActive}) => isActive ? '  text-[#9c6bf2]' : undefined }><MdOutlineDarkMode className="text-[26px] " ></MdOutlineDarkMode></NavLink>

                <div  >
                {
                    user?.uid ? 
                    <div className="flex items-center">
                        <Link to='/user'><img className="w-[35px] h-[35px] rounded-full mr-4" src={user?.photoURL} alt="User" /></Link>
                        <button to='/login' onClick={handleSignOut}  className=' bg-[#FAB400] duration-300 hover:bg-[#c99204] rounded text-black  text-[14px] font-semibold py-1 px-2 ' >Log Out</button>
                    </div>
                    :
                    <Link to="/login">
                        <button className="bg-[#9c6bf2] duration-300 hover:bg-[#c3a6f7] rounded text-black text-[15px] font-semibold py-1 px-3 " to='/login'>Login</button>
                    </Link>
                }
                </div>
            </nav>

            <div className='lg:hidden md:hidden bg-[#121212'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className='w-5 text-[#FAB400]' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className='absolute top-0 left-0 w-full'>
                <div className='p-5 bg-[#121212] border rounded shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                    <Link to='/'>
                        <div className="site-logo flex items-center">
                            <div className="logo">
                                <img src={cslogo} alt="Quiz Dev" className="w-[50px] h-[50px] sm:w-[40px] sm:h-[40px]" />
                            </div>
                            <div className="logo-text ml-1">
                                <h1 className="text-4xl sm:text-2xl  font-semibold"><span className="text-[#FAB400] ">CS</span> <span className="text-[#9c6bf2]">Kingdom</span> </h1>
                            </div>
                        </div>
                    </Link>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-white focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className='w-5 text-[#FAB400]' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav className="text-center">
                    <ul className='space-y-4'>
                      <li>
                        <Link
                          to='/'
                          aria-label='Home'
                          title='home'
                          className='font-medium tracking-wide text-white hover:text-[#FAB400] transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/faq'
                          aria-label='faq'
                          title='faq'
                          className='font-medium tracking-wide text-white hover:text-[#FAB400]  transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/blog'
                          aria-label='Blog'
                          title='Blog'
                          className='font-medium tracking-wide text-white hover:text-[#FAB400]  transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="text-center flex justify-center">
                        <Link
                          to='/'
                          aria-label='Mode'
                          title='Mode'
                          className='font-medium tracking-wide text-center text-white hover:text-[#FAB400]  transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          <MdOutlineDarkMode className="text-[26px] mt-1 mb-0 pb-0" ></MdOutlineDarkMode>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/blog'
                          aria-label='Blog'
                          title='Blog'
                          className='font-medium tracking-wide text-white hover:text-[#FAB400]  transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
        </div>
        </div>

      </div>

    </div>

  );
};

export default Header;
