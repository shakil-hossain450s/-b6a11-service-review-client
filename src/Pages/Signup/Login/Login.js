import React, { useContext } from 'react';
import loginImage from "../../../assets/login/login.jpg";
import { FaUserAlt, FaLock, FaUserCircle, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import useSetTitles from '../../../Hook/useSetTitels';

const Login = () => {
    const { signIn, providerLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    useSetTitles('Login')

    const googleProvider = new GoogleAuthProvider();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                toast.success("User Login Successfully");
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message)
            })
    };

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success("User Login Successfully");
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message)
            })
    }

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
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control mb-5">
                            <label className="input-group">
                                <span><FaUserAlt></FaUserAlt></span>
                                <input
                                    type="email"
                                    name='email'
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
                                    name="password"
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
                        <div className='flex items-center justify-center gap-8 mt-5'>
                            <button
                                onClick={handleGoogleSignIn}
                                className='border-2 border-gray-300 hover:bg-gray-300 duration-200 ease-out p-4 rounded-full'>
                                <FaGoogle></FaGoogle>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;