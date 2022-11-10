import React from 'react';
import toast from 'react-hot-toast';
import { FaPlusCircle } from "react-icons/fa";

const AddService = () => {

    const handlePlaceService = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const description = form.description.value;

        // console.log(name, price, rating, image, description);

        const service = {
            name,
            price,
            rating,
            image,
            description
        }

        fetch('https://service-review-server-eta.vercel.app/services', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Service added successfully");
                    form.reset();
                }
                console.log(data)
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='mb-[35%]'>
            <h2 className='text-2xl text-center mt-5 font-medium'>Add a New Service</h2>
            <hr className='lg:w-2/12 w-2/3 border border-gray-300 mb-3 mx-auto' />
            <form
                onSubmit={handlePlaceService}
                className='border-2 bg-base-200 lg:w-7/12 lg:mx-auto mx-2 border-gray-300 rounded shadow-lg p-8'>
                <div>
                    <label className="label">
                        <span className="label-text mb-[-13px] text-xl font-medium">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        className="input input-bordered w-full my-3 shadow" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text mb-[-13px] text-xl font-medium">Price</span>
                    </label>
                    <input
                        type="text"
                        name="price"
                        placeholder="price"
                        className="input input-bordered w-full my-3 shadow" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text mb-[-13px] text-xl font-medium">Rating</span>
                    </label>
                    <input
                        type="text"
                        name="rating"
                        placeholder="rating"
                        className="input input-bordered w-full my-3 shadow" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text mb-[-13px] text-xl font-medium">ImageURL</span>
                    </label>
                    <input
                        type="text"
                        name="image"
                        placeholder="imageURL"
                        className="input input-bordered w-full my-3 shadow" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text mb-[-13px] text-xl font-medium">Description</span>
                    </label>
                    <textarea
                        type="text"
                        name="description"
                        placeholder="description"
                        className="border-2 textarea textarea-bordered w-full my-3 shadow" />
                </div>
                <div className='flex justify-center'>
                    <button className='btn btn-outline w-9/12' type="submit">
                        <span className='mr-2'>Add Service</span>
                        <FaPlusCircle></FaPlusCircle>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddService;