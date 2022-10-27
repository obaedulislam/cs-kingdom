import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-[1150px] mx-auto lg:py-16 md:py-12 py-8'>
            <div className="page-head flex justify-center items-center pb-8">
                <h1 className='lg:text-5xl sm:text-3xl text-2xl text-[#FAB400]  font-bold '> 4 React JS Q&A</h1>
            </div>  
            <div className="single-blog bg-black p-6 rounded-lg shadow-lg ">
                <h2 className='sm:text-xl text-lg font-semibold text-[#9c6bf2]'>1. What is CORS?</h2>
                <div>
                    <p><span className= "text-[#FAB400] font-bold sm:text-xl text-lg mr-2 underline">Ans:</span> CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.The word CORS stands for “Cross-Origin Resource Sharing”. Cross-Origin Resource Sharing is an HTTP-header based mechanism implemented by the browser which allows a server or an API to indicate any origins (different in terms of protocol, hostname, or port) other than its origin from which the unknown origin gets permission to access and load resources.</p>
                </div>
            </div>
            {/* Single Blog End */}
 
            <div className="single-blog bg-black p-6 rounded-lg shadow-lg mt-4">
                <h2 className='sm:text-xl text-lg font-semibold text-[#9c6bf2]'>2. Why are you using `firebase`? What other options do you have to implement authentication?</h2>
                <div>
                    <p><span className= "text-[#FAB400] font-bold sm:text-xl text-lg mr-2 underline">Ans:</span> Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.</p>
                    <h5 className ="text-[#d3a736] font-semibold mt-3 ">The best Firebase features that I am addicted to use are:</h5>
                    <ul className='list-decimal ml-10'>
                        <li className=''><p>Firebase Remote Config: I love this product; it actually saved me sometimes from going broke.</p></li>
                        <li className=''><p>Firebase Database: The feature I have been using from the very first day since it stores data as JSON and synchronized in realtime.</p></li>
                        <li className=''><p>Firebase Authentication: it has saved countless hours of my life since it allows to authenticates your app with the users.</p></li>
                    </ul>
                    <h5 className ="text-[#d3a736] font-semibold mt-3 ">The best Firebase features that I am addicted to use are:</h5>
                    <p>There are many option to implement authentication such as Auth0, MongoDB, Passport, Okta, Amazon Cognito and Keycloak are the most popular alternatives to Firebase Authentication.</p>
                </div>
            </div>
            {/* Single Blog End */}
 
            <div className="single-blog bg-black p-6 rounded-lg shadow-lg mt-4">
                <h2 className='sm:text-xl text-lg font-semibold text-[#9c6bf2]'>3. How does the private route work?</h2>
                <div>
                    <p><span className= "text-[#FAB400] font-bold sm:text-xl text-lg mr-2 underline">Ans:</span> Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
                </div>
            </div>
            {/* Single Blog End */}
 
            <div className="single-blog bg-black p-6 rounded-lg shadow-lg mt-4">
                <h2 className='sm:text-xl text-lg font-semibold text-[#9c6bf2]'>4. What is Node? How does Node work?</h2>
                <div>
                    <p><span className= "text-[#FAB400] font-bold sm:text-xl text-lg mr-2 underline">Ans:</span> Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.</p>
                    <p>Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.</p>
                    <p className='text-[#FAB400] mt-1 ml-2'>Node.js = Runtime Environment + JavaScript Library</p>
                    <p className='font-semibold mt-4'>Node Working procedure:</p>
                    <p >Node is completely event-driven. Basically the server consists of one thread processing one event after another.</p>
                    <p>A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function. The server then immediately starts to process another event (maybe another request). When the IO operation is finished, that is another kind of event, and the server will process it (i.e. continue working on the request) by executing the callback as soon as it has time.</p>
                    <p>So the server never needs to create additional threads or switch between threads, which means it has very little overhead. If you want to make full use of multiple hardware cores, you just start multiple instances of node.js</p>
                </div>
            </div>
            {/* Single Blog End */}
 
        </div>
    );
};

export default Blog;