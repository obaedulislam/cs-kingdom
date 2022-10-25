import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../components/Pages/Blog/Blog';
import Courses from '../../components/Pages/Courses/Courses';
import Faq from '../../components/Pages/Faq/Faq';
import Home from '../../components/Pages/Home/Home';
import Login from '../../components/Pages/Login/Login';
import Register from '../../components/Pages/Register/Register';
import User from '../../components/Pages/User/User';
import Main from '../../Layouts/Main';

export const Routes = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/courses',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/courses/')
        },
        {
            path: '/courses/:id',
            element: <Courses></Courses>,
            loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
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
        }
    ]

}]); 

export default Routes;