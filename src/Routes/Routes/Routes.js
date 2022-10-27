import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../components/Pages/Blog/Blog';
import CourseDetails from '../../components/Pages/CourseDetails/CourseDetails';
import ErrorPage from '../../components/Pages/ErrorPage/ErrorPage';
import Faq from '../../components/Pages/Faq/Faq';
import Home from '../../components/Pages/Home/Home';
import Login from '../../components/Pages/Login/Login';
import Register from '../../components/Pages/Register/Register';
import User from '../../components/Pages/User/User';
import PremiumAccess from '../../components/PremiumAccess/PremiumAccess';
import TermsAndCondition from '../../components/TermsAndCondition/TermsAndCondition';
import Main from '../../Layouts/Main';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const Routes = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://b610-lerning-platform-server-side-obaedulislam.vercel.app/courses/')
        },
        {
            path: '/courses',
            element: <Home></Home>,
            loader: () => fetch('https://b610-lerning-platform-server-side-obaedulislam.vercel.app/courses/')
        },
        {
            path: '/course/:id',
            loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-obaedulislam.vercel.app/course/${params.id}`),
            element: <CourseDetails></CourseDetails>
        },
        {
            path: '/premium-access/:id',
            element: <PrivateRoute><PremiumAccess></PremiumAccess></PrivateRoute>,
            loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-obaedulislam.vercel.app/premium-access/${params.id}`)
        },
        {
            path: '/faq',
            element:<Faq></Faq>
        },
        {
            path: '/blog',
            element:<Blog></Blog>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/user',
            element: <User></User>
        },
        {
            path: '/register/terms',
            element: <TermsAndCondition></TermsAndCondition>
        }, 
        {
            path: '*', element: <ErrorPage></ErrorPage>
          }
    ]



}]); 

export default Routes;