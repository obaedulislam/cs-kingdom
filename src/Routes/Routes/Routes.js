import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../components/Pages/Blog/Blog';
import Cdetails from '../../components/Pages/Cdetails/Cdetails';



import Faq from '../../components/Pages/Faq/Faq';
import Home from '../../components/Pages/Home/Home';
import Login from '../../components/Pages/Login/Login';
import Register from '../../components/Pages/Register/Register';
import User from '../../components/Pages/User/User';
import TermsAndCondition from '../../components/TermsAndCondition/TermsAndCondition';
import Main from '../../Layouts/Main';

export const Routes = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:4100/courses/')
        },
        {
            path: '/home',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:4100/courses/')
        },
        {
            path: '/courses',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:4100/courses/')
        },
        {
            path: '/courses/:id',
            loader: ({params}) => fetch(`http://localhost:4100/courses/${params.id}`),
            element: <Cdetails></Cdetails>
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
    ]

}]); 

export default Routes;