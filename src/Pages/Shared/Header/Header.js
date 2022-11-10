import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBloggerB, FaInfo, FaPlusCircle } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { MdExpandMore } from "react-icons/md";
import logo from "../../../assets/logo.png"
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut();
        toast.success("logout success");
    }

    const menuItems = <>
        <li className='lg:mb-0 mb-1 font-semibold'>
            <Link to="/">
                <FaHome></FaHome>
                <span>Home</span>
            </Link>
        </li>
        <li className='lg:mb-0 mb-1 font-semibold'>
            <Link to='/services'>
                <GrServices></GrServices>
                <span>Services</span>
            </Link>
        </li>
        <li className='lg:mb-0 mb-1 font-semibold'>
            <Link to="/blog">
                <FaBloggerB></FaBloggerB>
                <span>Blog</span>
            </Link>
        </li>
        {
            user ?
                <>
                    <div className="dropdown lg:block hidden dropdown-hover mr-1">
                        <label tabIndex={0}>
                            <li className='lg:mb-0 mb-1 font-semibold'>
                                <Link>
                                    <span>More</span>
                                    <MdExpandMore className='text-xl ml-0'></MdExpandMore>
                                </Link>
                            </li>
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44">
                            <li className='lg:mb-0 mb-1 font-semibold'>
                                <Link to='/myReview'>
                                    <FaInfo></FaInfo>
                                    <span>My Review</span>
                                </Link>
                            </li>
                            <li className='lg:mb-0 mb-1 font-semibold'>
                                <Link to="/addService">
                                    <FaPlusCircle></FaPlusCircle>
                                    <span>Add Service</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:hidden'>
                        <li className='lg:mb-0 mb-1 font-semibold'>
                            <Link to='/myReview'>
                                <FaInfo></FaInfo>
                                <span>My Review</span>
                            </Link>
                        </li>
                        <li className='lg:mb-0 mb-1 font-semibold'>
                            <Link to="/addService">
                                <FaPlusCircle></FaPlusCircle>
                                <span>Add Service</span>
                            </Link>
                        </li>
                    </div>
                    <li>
                        <button onClick={handleLogout}
                            className='btn px-4 py-2 text-gray-100 border-2 bg-blue-500 border-blue-500 hover:bg-transparent hover:text-gray-900 hover:border-gray-900'>
                            <span>Logout</span>
                            <BiLogOut className='text-xl'></BiLogOut>
                        </button>
                    </li>
                </>
                :
                <li>
                    <Link to="/login"
                        className='btn py-3 text-gray-100 border-2 bg-blue-500 border-blue-500 hover:bg-transparent hover:text-gray-900 hover:border-gray-900'>
                        <span>Login</span>
                        <BiLogIn className='text-xl'></BiLogIn>
                    </Link>
                </li>
        }

    </>
    return (
        <div className="navbar bg-base-100 shadow-md py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="flex items-center gap-2">
                    <img className='w-14' src={logo} alt="" />
                    <span className='text-xl font-medium'>Home Food</span>
                </Link>
            </div>
            <div className="hidden lg:flex navbar-end">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;