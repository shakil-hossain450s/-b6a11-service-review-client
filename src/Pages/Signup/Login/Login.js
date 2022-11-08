import React from 'react';
import loginImage from "../../../assets/login/login.jpg";
import { FaUserAlt, FaLock, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero mb-12">
            <div className="hero-content flex-col lg:flex-row gap-20 ">
                <div className="text-center lg:text-left">
                    <img className='w-[550px]' src={loginImage} alt="" />
                </div>
                <div className="card p-8 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200 border-2">
                    <div className='text-7xl inline-block w-11/12 mx-auto mb-2'>
                        <FaUserCircle className='w-full'></FaUserCircle>
                    </div>
                    <h2
                        className='text-gray-700 text-3xl font-semibold text-center'>Login
                    </h2>
                    {/* <hr className='mt-2 w-3/4 border border-gray-300 mx-auto' /> */}
                    <div className="card-body">
                        <div className="form-control mb-5">
                            <label className="input-group">
                                <span><FaUserAlt></FaUserAlt></span>
                                <input
                                    type="email"
                                    placeholder="enter email"
                                    className="input border border-gray-300"
                                    required />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group">
                                <span><FaLock></FaLock></span>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input border border-gray-300"
                                    required />
                            </label>
                        </div>
                        <p>
                            <small
                                className='font-semibold'>Don't Have an account?
                                <Link
                                    to='/register'
                                    className='text-orange-500 ml-1 hover:underline'>Register</Link>
                            </small>
                        </p>
                        <div className="form-control mt-6">
                            <button
                                className='btn px-8 py-3 text-gray-100 border-2 bg-blue-500 border-blue-500 hover:bg-transparent hover:text-gray-900 hover:border-gray-900'>
                                <span>Login</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;