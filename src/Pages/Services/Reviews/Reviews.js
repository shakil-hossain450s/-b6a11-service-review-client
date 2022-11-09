import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userImage from "../../../assets/user.jpg";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import AllReview from './AllReview';
import ReviewForm from './ReviewForm';

const Reviews = ({name}) => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/userReview')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err));
    }, [])

    const { user } = useContext(AuthContext);
    return (
        <section>
            <h2 className='text-3xl font-semibold mt-12'>Review Section</h2>
            <div className='lg:flex justify-between gap-8 mx-4'>
                <div className='my-5'>
                    {
                        user ?
                            <>
                                <div className='border-2 border-gray-200 rounded-md p-5 lg:w-[35vw]'>
                                    <ReviewForm></ReviewForm>
                                </div>
                            </>
                            :
                            <>
                                <div className='border border-gray-200 rounded-md p-5 lg:w-[35vw]'>
                                    <p className='font-semibold text-xl'>For Reviewing Please
                                        <Link className='font-bold text-orange-600 ml-1 hover:underline' to="/login">Login</Link> First</p>
                                </div>

                            </>
                    }
                </div>

                <div className='h-[650px] overflow-y-scroll border-2 p-4 my-5 w-full '>
                    <h2>All Reviews</h2>
                    {
                        reviews.length === 0 ?
                        <>
                         <h3>No reviews</h3>
                        </>
                        :
                        reviews.map(review => <AllReview
                            key={review._id}
                            review={review}
                            name={name}
                        ></AllReview>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;