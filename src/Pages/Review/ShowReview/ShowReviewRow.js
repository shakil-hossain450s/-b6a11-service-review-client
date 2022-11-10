import React from 'react';
import useSetTitles from '../../../Hook/useSetTitels';

const ShowReviewRow = ({ review }) => {
    useSetTitles('AllReviews')

    const { serviceName, serviceImage, userName, email, message } = review;

    return (
        <section>
            <div className='border-2 bg-base-200 p-8 shadow-md rounded-lg'>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={serviceImage} alt='' />
                    </div>
                </div>
                <p className='text-2xl font-bold mb-2'>User Name: {userName}</p>
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

export default ShowReviewRow;