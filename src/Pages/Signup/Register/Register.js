import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaLock, FaUserAlt, FaUserCircle } from 'react-icons/fa';
import { MdMail } from "react-icons/md";
import { Link } from 'react-router-dom';
import registerImage from "../../../assets/login/register.jpg";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password !== confirm) {
            toast.error("Password Didn't Match")
            return;
        }
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                toast.success('User Created successfully')
                console.log(user);
            })
            .catch(err => {
                console.log(err)
                toast.error(err.message)
        })


    }

    return (
        <div className="hero mb-12">
            <div className="hero-content flex-col lg:flex-row gap-20 ">
                <div className="text-center lg:text-left">
                    <img className='w-[550px]' src={registerImage} alt="" />
                </div>
                <div className="card p-8 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200 border-2">
                    <div className='text-7xl inline-block w-11/12 mx-auto mb-2'>
                        <FaUserCircle className='w-full'></FaUserCircle>
                    </div>
                    <h2
                        className='text-gray-700 text-3xl font-semibold text-center'>Register
                    </h2>
                    {/* <hr className='mt-2 w-3/4 border border-gray-300 mx-auto' /> */}
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control mb-3">
                            <label className="input-group">
                                <span><FaUserAlt></FaUserAlt></span>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="name"
                                    className="input border border-gray-300"
                                    required />
                            </label>
                        </div>
                        <div className="form-control mb-3 ">
                            <label className="input-group">
                                <span><MdMail className='text-xl'></MdMail></span>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="enter email"
                                    className="input border border-gray-300"
                                    required />
                            </label>
                        </div>
                        <div className="form-control mb-3">
                            <label className="input-group">
                                <span><FaLock></FaLock></span>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder="password"
                                    className="input border border-gray-300"
                                    required />
                            </label>
                        </div>
                        <div className="form-control mb-3">
                            <label className="input-group">
                                <span><FaLock></FaLock></span>
                                <input
                                    type="password"
                                    name='confirm'
                                    placeholder="confirm password"
                                    className="input border border-gray-300"
                                    required />
                            </label>
                        </div>
                        <p><small className='font-semibold'>Already have an account? <Link className='hover:underline text-orange-500' to='/login'>Login</Link></small></p>
                        <div className="form-control mt-6">
                            <button
                                className='btn px-8 py-3 text-gray-100 border-2 bg-blue-500 border-blue-500 hover:bg-transparent hover:text-gray-900 hover:border-gray-900'>
                                <span>Login</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;