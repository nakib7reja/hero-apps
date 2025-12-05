import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <NavBar></NavBar>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default MainLayout;