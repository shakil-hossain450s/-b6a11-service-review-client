import React from 'react';
import toast from 'react-hot-toast';

const ReviewForm = () => {

    const handleToSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const message = form.message.value;

        console.log(name, email, photoUrl, message);

        const reviewData = {
            userName: name,
            userEmail: email,
            userPhoto: photoUrl,
            userMessage: message
        }

        fetch('http://localhost:5000/userReview', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("review accepted");
                    form.reset();
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleToSubmit}>
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
                    <textarea name="message" className='p-4' placeholder='your message' id="" cols="30" rows="10"></textarea>
                </div>
                <div className='flex justify-center'>
                    <button
                        className='btn w-9/12 px-8 py-2 bg-blue-600 border-2 border-blue-600 hover:bg-transparent hover:border-blue-600 hover:text-blue-600' type="submit">Post</button>
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;