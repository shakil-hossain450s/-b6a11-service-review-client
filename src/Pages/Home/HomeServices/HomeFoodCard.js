import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeFoodCard = ({ food }) => {

    const { _id, name, image, description, price, rating } = food;

    return (
        <div className="card w-10/12 border-2 mx-auto bg-base-200 shadow-xl">
            <figure className="px-3 pt-3">
                <img src={image} alt="Shoes" className="rounded-md h-52 w-full object-cover border" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='flex items-center justify-between gap-1 my-3'>
                    <div>
                        Price: ${price}
                    </div>
                    <div className='flex items-center text-orange-500 gap-1'>
                        <span><FaStar></FaStar></span>
                        <span><FaStar></FaStar></span>
                        <span><FaStar></FaStar></span>
                        <span><FaStar></FaStar></span>
                        <span><FaStar></FaStar></span>
                        :
                        <span className='font-medium'>{rating}</span>
                    </div>
                </p>
                <p>{description.length > 20 ? description.slice(0, 50) + "..." : description}</p>
                <div className="card-actions">
                    <Link to={`/services/${_id}`}>
                        <button
                            className='btn bg-blue-600 px-8 py-2 border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 hover:border-blue-600 '>
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeFoodCard;