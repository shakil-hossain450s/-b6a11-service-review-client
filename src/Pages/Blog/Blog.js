import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";

const Blog = () => {
    const [blogQuestions, setBlogQuestions] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => setBlogQuestions(data))
    }, [])
    return (
        <div>
            <h2 className='text-4xl text-center my-5 font-semibold'>Here is your some question</h2>
            <div>
                {
                    blogQuestions.map(blogQuestion => <li
                        className='text-3xl my-16 '
                        key={blogQuestion._id}
                    >
                        <span
                            className='bg-gray-300 px-6 py-6 rounded-lg shadow-md'>{blogQuestion?.question}
                            <span className='tooltip tooltip-bottom ml-5 cursor-pointer' data-tip="Show Answer">
                                <FaArrowAltCircleRight
                                    className='inline-block '
                                ></FaArrowAltCircleRight>
                            </span>
                        </span>

                    </li>)
                }
            </div>
        </div>
    );
};

export default Blog;