import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Review = ({ foodDetails }) => {

    const {user} = useContext(AuthContext)

    console.log(foodDetails);

    const { _id, name } = foodDetails;

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = user?.email;
        const message = form.review.value;

        console.log(email, name, message);

        const review = {
            serviceId: _id,
            serviceName: name,
            userName,
            email,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("review accepted");
                    form.reset();
                }
            console.log(data)
        })

    }

    return (
        <div className='my-8'>
            <form onSubmit={handleReview} className='border-2 p-5 bg-base-100 w-9/12 mx-auto rounded'>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        className="input input-bordered w-full my-3 shadow" />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        defaultValue={user?.email || 'unregisterd'}
                        readOnly
                        className="input input-bordered w-full my-3 shadow" />
                </div>
                <div>
                    <textarea
                        type="text"
                        name="review"
                        placeholder="review"
                        className="border-2 rounded p-5 w-full my-3 shadow" />
                </div>
                <div className='flex justify-center'>
                    <button className='btn btn-outline w-9/12' type="submit">Add Review</button>
                </div>
            </form>
            <div>

            </div>
        </div>
    );
};

export default Review;