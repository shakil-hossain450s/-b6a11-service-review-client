import React from 'react';

const ReviewForm = () => {

    const handleToSubmit = (event) => { 
        event.preventDefault();
        const form = event.target;
        
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
                <div className="form-control mb-5 border-2 border-gray-200 p-4 rounded">
                    <textarea name="message" placeholder='your message' id="" cols="30" rows="10"></textarea>
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