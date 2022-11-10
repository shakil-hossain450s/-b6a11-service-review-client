import React, { useEffect, useState } from 'react';
import ShowReviewRow from './ShowReviewRow';

const ShowReview = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h2 className='text-3xl font-medium text-center my-5'>Total Review: {reviews.length}</h2>
            <div className="overflow-x-auto w-full">
                        {
                            reviews.map(review => <ShowReviewRow
                                key={review._id}
                                review={review}
                            ></ShowReviewRow>)
                        }
            </div>
        </div>
    );
};

export default ShowReview;