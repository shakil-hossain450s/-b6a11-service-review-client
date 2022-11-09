import React, { useContext } from 'react';
import { FaArrowCircleLeft, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewForm from './Reviews/ReviewForm';

const ServiceCardDetails = () => {

    const { user } = useContext(AuthContext);

    const foodDetails = useLoaderData();
    const { name, price, image, rating, description } = foodDetails;
    return (
        <section>
            <Link to="/services" className='absolute top-[100px] left-12 text-2xl cursor-pointer'>
                <FaArrowCircleLeft></FaArrowCircleLeft>
            </Link>
            <h2 className='text-4xl text-center my-5'>Welcome to {name} Details Page</h2>
            <div className='w-10/12 mx-auto border-2 rounded-lg shadow-md bg-base-200 border-gray-300 my-12 p-12'>
                <div className='flex flex-col gap-5'>
                    <div className='flex justify-center items-center'>
                        <img className='rounded-lg border-2 p-2 drop-shadow-sm w-full h-[550px] object-cover' src={image} alt="" />
                    </div>
                    <h2 className='text-start font-semibold text-3xl'>Food Name: {name}</h2>
                    <p className='text-2xl font-medium'>Price: ${price}</p>

                    <div className='flex items-center text-orange-500 gap-1'>
                        <span><FaStar></FaStar></span>
                        <span><FaStar></FaStar></span>
                        <span><FaStar></FaStar></span>
                        <span><FaStar></FaStar></span>
                        <span><FaStar></FaStar></span>
                        :
                        <span className='font-medium'>{rating}</span>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
            <div className='bg-base-200 border-2 border-gray-300 p-8 w-10/12 mx-auto rounded-lg my-8'>
                {
                    user ?
                        <ReviewForm foodDetails={foodDetails}></ReviewForm>
                        : 
                        <>
                            <p className='font-bold text-2xl'>Please <Link className='hover:underline text-orange-500' to="/login">Login</Link> First To Send a Review</p>
                        </>
                }
            </div>
        </section>
        
    );
};

export default ServiceCardDetails;