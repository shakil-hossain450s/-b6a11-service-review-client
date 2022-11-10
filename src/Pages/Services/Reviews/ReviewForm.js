import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const ReviewForm = ({ foodDetails }) => {

    const { user } = useContext(AuthContext);
    console.log(foodDetails)

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoUrl.value;
        const message = form.message.value;

        const review = {
            foodId: foodDetails._id,
            foodName: foodDetails.name,
            price: foodDetails.price,
            name: name,
            email: email,
            photoURL: photoURL,
            message: message,
        }

        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Review Added Successfully");
                    form.reset();
                }
                console.log(data)
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message);
            })

    }

    return (
        <div>
            <form onSubmit={handlePlaceReview}>
                <h3 className='text-2xl font-semibold text-center my-3'>Leave a Review</h3>
                <div className="form-control mb-5">
                    <input
                        type="text"
                        name='name'
                        placeholder="Name"
                        className="input border border-gray-300 "
                        required />
                </div>
                <div className="form-control mb-5">
                    <input
                        type="text"
                        name='photoUrl'
                        placeholder="photoUrl"
                        className="input border border-gray-300 "
                        required />
                </div>
                <div className="form-control mb-5">
                    <input
                        type="text"
                        name='email'
                        placeholder="email"
                        className="input border border-gray-300 "
                        required />
                </div>
                <div className="form-control mb-5 border-2 border-gray-200 rounded">
                    <textarea name="message" className='p-4' placeholder='your message' id="" cols="10" rows="4"></textarea>
                </div>
                <div className='flex justify-center'>
                    <button
                        type="submit"
                        className='btn w-9/12 px-8 py-2 bg-blue-600 border-2 border-blue-600 hover:bg-transparent hover:border-blue-600 hover:text-blue-600' >Post</button>
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;