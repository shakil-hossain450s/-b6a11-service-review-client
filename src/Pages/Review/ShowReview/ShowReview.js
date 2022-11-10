import React, { useEffect, useState } from 'react';
import useSetTitles from '../../../Hook/useSetTitels';
import ShowReviewRow from './ShowReviewRow';

const ShowReview = () => {

    useSetTitles('All Review')

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://service-review-server-eta.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className=''>
            <h2 className='text-3xl font-medium text-center my-5'>Total Review: {reviews.length}</h2>
            <div className="overflow-x-auto w-full">
                {
                    reviews.length === 0 ?
                        <>
                            <p className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>No review to show</p>
                        </>
                        :
                        <>
                            {
                                reviews.map(review => <ShowReviewRow
                                    key={review._id}
                                    review={review}
                                ></ShowReviewRow>)
                            }
                        </>
                }
            </div>
        </div>
    );
};

export default ShowReview;