import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div>
            <div className='text-center w-[70%] mx-auto space-y-5'>
                <h1 className='text-6xl font-bold'>We Build <br /> <span className="text-violet-500">Productive</span> Apps</h1>
                <p>At HERO.IO,  we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <Link className='btn m-2 p-6 text-xl font-bold' to={'https://play.google.com/store/games?hl=en'}>
                <img className='w-6 h-6' src="https://i.ibb.co.com/S7Jht5Tb/fi-16076057.png" alt="" />
                <span>Google Play</span>
                </Link>
                <Link className='btn m-2 p-6 text-xl font-bold' to={'https://www.apple.com/app-store/'}>
                <img className='w-6 h-6' src="https://i.ibb.co.com/Sw2w216G/fi-5977575.png" alt="" />
                <span>App Store</span>
                </Link>
                <div className='mt-2 w-[80%] mx-auto'>
                    <img src="https://i.ibb.co.com/wZc8Ms4L/hero.png" alt="" />
                </div>
            </div>
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center p-15 text-white'>
                <h1 className='text-4xl mb-10 font-bold'>Trusted by Millions, Built for You</h1>
                <div className="flex justify-evenly w-[80%] mx-auto space-y-2">
                    <div className="">
                        <p className='text-xs'>Total Downloads</p>
                        <h className="text-4xl font-bold">29.6M</h>
                        <p className='text-xs'>21% more than last month</p>
                    </div>
                    <div className="">
                        <p className='text-xs'>Total Reviews</p>
                        <h className="text-4xl font-bold">906K</h>
                        <p className='text-xs'>46% more than last month</p>
                    </div>
                    <div className="">
                        <p className='text-xs'>Active Apps</p>
                        <h className="text-4xl font-bold">132+</h>
                        <p className='text-xs'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;