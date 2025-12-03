import React from 'react';
import { useRouteError } from 'react-router';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
            <NavBar></NavBar>
            <div>
                <p>{error.message}</p>
                <p>4O4 error</p>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ErrorPage;