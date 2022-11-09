import React, { useEffect, useState } from 'react';

const AllReview = ({review, name}) => {
    
    const {userName, userEmail, userPhoto, userMessage} = review;

    return (
        <div>
            <div
                className='flex items-start gap-5 border-2 border-base-300 rounded-lg p-8 my-5 shadow-lg'>
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src={userPhoto} alt="user Photo" />
                    </div>
                </div>
                <div className=''>
                    <h3>{userName}</h3>
                    <p>{userEmail}</p>
                    <p>{ name}</p>
                    <p>
                        {userMessage}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AllReview;