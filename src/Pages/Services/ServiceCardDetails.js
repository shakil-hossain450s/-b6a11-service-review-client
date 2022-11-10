import React from 'react';
import { FaArrowCircleLeft, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import useSetTitles from '../../Hook/useSetTitels';
import Review from '../Review/Review/Review';

const ServiceCardDetails = () => {

    useSetTitles('Services Details')

    const foodDetails = useLoaderData();
    const { name, price, image, rating, description } = foodDetails;
    return (
        <section>
            <Link to="/services" className='absolute top-[100px] lg:left-12 left-5 text-2xl cursor-pointer'>
                <FaArrowCircleLeft></FaArrowCircleLeft>
            </Link>
            <h2 className='lg:text-4xl text-3xl text-center lg:my-5 mt-10 mx-5'>Welcome to {name} Details Page</h2>
            <div className='lg:w-10/12 w-11/12 mx-auto border-2 rounded-lg shadow-md bg-base-200 border-gray-300 lg:my-12 my-5 lg:p-12 p-4'>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-center items-center'>
                        <img className='rounded-lg border-2 p-2 drop-shadow-sm w-full lg:h-[550px] object-cover' src={image} alt="" />
                    </div>
                    <h2 className='text-start font-semibold lg:text-3xl text-[22px]'>Food Name: {name}</h2>
                    <p className='lg:text-2xl text-xl font-medium'>Price: ${price}</p>

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
                    <div>
                        <Link to='/allReviews'>
                            <button className='btn btn-outline'>Show Review</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <Review foodDetails={foodDetails}></Review>
            </div>
        </section>

    );
};

export default ServiceCardDetails;