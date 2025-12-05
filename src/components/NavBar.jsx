import React from 'react';
import { Link, NavLink } from 'react-router';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/apps'>Apps</NavLink></li>
                        <li><NavLink to='/installedApp'>My Installation</NavLink></li>
                    </ul>
                </div>
                <Link className="btn p-6 flex gap-2 items-center  ml-10 font-bold text-2xl text-[#632EE3]">
                <img className='w-10 h-10' src="https://i.ibb.co.com/r222xsnZ/logo.png" alt="logo" />
                <span>HERO.IO</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/apps'>Apps</NavLink></li>
                    <li><NavLink to='/installedApp'>My Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink className="btn bg-[#632EE3] text-white font-bold mr-5" to={"https://github.com/nakib7reja?tab=repositories"}>Contribute</NavLink>
            </div>
        </div>
    );
};

export default NavBar;