import React from 'react';
import { Link } from 'react-router';

const EmptyPage = () => {
    return (
        <div className='text-center mt-20 space-y-3 pb-5'>
            <img className='w-[30%] mx-auto' src="https://i.ibb.co.com/8np24d2T/App-Error.png" alt="" />
            <h1 className='text-5xl font-bold'>OPPS!! APP NOT FOUND</h1>
            <p>The App you are requesting is not found on our system.  please try another apps</p>
            <Link className='btn btn-primary' to='/'>Go back</Link>
        </div>
    );
};

export default EmptyPage;