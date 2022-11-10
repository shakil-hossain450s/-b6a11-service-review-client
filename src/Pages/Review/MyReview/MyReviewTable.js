import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaTrash } from "react-icons/fa";

const MyReviewTable = ({ review, handleDelete }) => {
    const { _id, serviceName, userName, email, message, serviceId } = review;

    console.log(review)
    return (
        <section>
            <div className='border-2 bg-base-200 p-8 shadow-md rounded-lg relative'>
                <button
                    onClick={() => handleDelete(_id)}
                    className='border-2 absolute right-4 top-4 hover:text-white border-gray-200 p-3 rounded-full hover:bg-red-500 duration-200 ease-out'>
                    <FaTrash></FaTrash>
                </button>
                <h3 className='text-2xl font-bold mb-2'>{serviceName}</h3>
                <h3 className='text-xl mb-1'>{email}</h3>
                <div>
                    <p><span className='font-bold'>Review:</span> <span>{message}</span></p>
                </div>
            </div>
            <div className='divider'></div>
        </section>


    );
};

export default MyReviewTable;