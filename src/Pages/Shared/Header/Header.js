import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBloggerB, FaInfo } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { BiLogIn } from "react-icons/bi";
import logo from "../../../assets/logo.png"

const Header = () => {
    const menuItems = <>
        <li className='font-semibold mr-3'>
            <Link to="/">
                <FaHome></FaHome>
                <span>Home</span>
            </Link>
        </li>
        <li className='font-semibold mr-3'>
            <Link>
                <GrServices></GrServices>
                <span>Services</span>
            </Link>
        </li>
        <li className='font-semibold mr-3'>
            <Link>
                <FaBloggerB></FaBloggerB>
                <span>Blog</span>
            </Link>
        </li>
        <li className='font-semibold mr-3'>
            <Link>
                <FaInfo></FaInfo>
                <span>About</span>
            </Link>
        </li>
        <li>
            <Link to="/login"
                className='btn px-8 py-3 text-gray-100 border-2 bg-blue-500 border-blue-500 hover:bg-transparent hover:text-gray-900 hover:border-gray-900'>
                    <span>Login</span>
                    <BiLogIn className='text-xl'></BiLogIn>
            </Link>
        </li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-md px-5 py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="flex items-center gap-2">
                    <img className='w-14' src={logo} alt="" />
                    <span className='text-xl font-medium'>Home Food</span>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;