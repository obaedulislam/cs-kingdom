import React from 'react';
import nodejs from '../../../assets/nodejs.png'
const Blog = () => {
    return (
        <div className='max-w-[1150px] mx-auto lg:py-16 md:py-12 py-8 md:px-0 px-3'>
            <div className="page-head flex justify-center items-center pb-8">
                <h1 className='lg:text-5xl sm:text-3xl text-2xl text-[#FAB400]  font-bold '> 4 React JS Q & A</h1>
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
                    <h5 className ="text-[#d3a736] font-semibold mt-2 ">Other options we use to to implement authentication:</h5>
                    <ul className='list-decimal ml-10'>
                        <li className=''><p>Password-based authentication</p></li>
                        <li className=''><p>Two-factor/multifactor authentication</p></li>
                        <li className=''><p>Biometric authentication</p></li>
                        <li className=''><p>Single sign-on</p></li>
                        <li className=''><p>Token-based authentication</p></li>
                        <li className=''><p>Certificate-based authentication</p></li>
                    </ul>
                    <p className='mt-2'>There are many option to implement authentication such as Auth0, MongoDB, Passport, Okta, Amazon Cognito and Keycloak are the most popular alternatives to Firebase Authentication.</p>
                </div>
            </div>
            {/* Single Blog End */}
 
            <div className="single-blog bg-black p-6 rounded-lg shadow-lg mt-4">
                <h2 className='sm:text-xl text-lg font-semibold text-[#9c6bf2]'>3. How does the private route work?</h2>
                <div>
                    <p><span className= "text-[#FAB400] font-bold sm:text-xl text-lg mr-2 underline">Ans:</span> PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.</p>
                    <p className= "mt-2">Most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though.</p>
                    <p className='mt-2'>For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
                </div>
            </div>
            {/* Single Blog End */}
 
            <div className="single-blog bg-black p-6 rounded-lg shadow-lg mt-4">
                <h2 className='sm:text-xl text-lg font-semibold text-[#9c6bf2]'>4. What is Node? How does Node work?</h2>
                <div>
                    <p><span className= "text-[#FAB400] font-bold sm:text-xl text-lg mr-2 underline">Ans:</span> Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.</p>
                    <p>We often use Node.js for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Walmart, and so on.</p>
                    <p className='text-[#FAB400] mt-1 ml-2'>Node.js = Runtime Environment + JavaScript Library</p>
                    <p className='font-semibold mt-4'>Node Working procedure:</p>
                    <p >Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                    <p className='font-semibold mt-4'>Node.js basically works on two concept:</p>
                    <ul className='list-decimal ml-10'>
                        <li className=''><p>Asynchronous</p></li>
                        <li className=''><p>Non-blocking I/O</p></li>
                    </ul>
                    <p className=' mt-3'><span className= "text-[#9c6bf2] font-bold underline">Asynchronous:</span> Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.</p>
                    <p><span className= "text-[#9c6bf2] font-bold underline">Non-blocking I/o:</span> Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.</p>
                    <div className="blog-img flex justify-center">
                        <img className='max-w-[500px]' src={nodejs} rounded-xl alt="node" />
                    </div>
                </div>
            </div>
            {/* Single Blog End */}
 
        </div>
    );
};

export default Blog;