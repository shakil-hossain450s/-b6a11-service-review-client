import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeFoodCard from './HomeFoodCard';

const HomeServices = () => {
    const [foodHome, setFoodHome] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/food-home')
            .then(res => res.json())
            .then(data => setFoodHome(data))
    }, [])
    return (
        <div className='mb-20'>
            <h2 className='text-center my-5 text-3xl font-semibold'>Food Services</h2>
            <div>
                <h4 className='text-2xl font-semibold'><li>Foods</li></h4>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        foodHome.map(food => <HomeFoodCard
                            key={food._id}
                            food={food}
                        ></HomeFoodCard>)
                    }
                </div>
            </div>
            <div className='mt-12 flex items-center justify-center'>
                <Link to="/services">
                    <button
                        className='btn bg-blue-600 px-8 py-2 border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 hover:border-blue-600 hover:scale-105 shadow-md'>
                        See All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HomeServices;