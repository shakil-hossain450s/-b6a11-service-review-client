import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {

    const { _id, name, image, description, price, rating } = service;

    return (
        <div>
            <div className="card border-2 mx-auto bg-base-200 shadow-xl lg:my-12 my-4">
                <figure className="px-3 pt-3">
                    <img src={image} alt="Shoes" className="rounded-md lg:h-80 h-52 w-full object-cover border" />
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
                    <p>{description.length > 100 ? description.slice(0, 100) + "..." : description}</p>
                    <div className="card-actions mt-5">
                        <Link to={`/services/${_id}`}>
                            <button
                                className='btn bg-blue-600 px-8 py-2 border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 hover:border-blue-600 '>
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;