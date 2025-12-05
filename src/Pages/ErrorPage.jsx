import React from 'react';
import { Link, useRouteError } from 'react-router';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
            <NavBar></NavBar>
            <div className='text-center my-10 space-y-5'>
                <p className='text-red-500'>{error.message}</p>
                <div className="w-90 mx-auto">
                    <img src="https://i.ibb.co.com/JW59hBK8/error-404.png" alt="" />
                </div>
                <h1 className='text-5xl font-bold'>Oops, page not found!</h1>
                <p>The page you are looking for is not available.</p>
                <Link className='btn btn-primary' to='/'>Go back</Link>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ErrorPage;