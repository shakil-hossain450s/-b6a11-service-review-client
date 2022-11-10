import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import MyReviewTable from './MyReviewTable';

const MyReview = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/my-reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure you want to delete this review');
        if (confirm) {
            fetch(`http://localhost:5000/my-reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Review deleted successfully')
                        const remainingReviews = reviews.filter(rev => rev._id !== id);
                        setReviews(remainingReviews)
                    }
                })
        }
    }

    return (
        <div className='lg:mb-[35%] mt-5 '>
            <h2 className='text-2xl font-semibold mb-2'>You Have {reviews.length} reviews</h2>
            {
                reviews.length === 0 ?
                    <p
                        className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                        <span className='text-3xl font-semibold'>You Have No Review To see Here</span>
                    </p>
                    :
                    <>
                        {
                            reviews.map(review => <MyReviewTable
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            ></MyReviewTable>)
                        }
                    </>

            }
        </div>
    );
};

export default MyReview;