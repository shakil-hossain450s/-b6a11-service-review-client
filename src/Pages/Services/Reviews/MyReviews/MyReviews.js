import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [user?.email])

    return (
        <div>
            <h3 className='font-semibold text-center text-3xl mt-5'>My Review</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12'>
                {
                    reviews.map(review => <div key={review._id}>
                        <div className='border-2 bg-base-200 p-5 flex items-center gap-5 rounded-md shadow-lg'>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={review.photoURL} alt="" />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-2xl'>{review.foodName}</h4>
                                <p className='text-xl font-medium'>{review.message}</p>
                                <p className='font-semibold'>${review.price}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyReviews;