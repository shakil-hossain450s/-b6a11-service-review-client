import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

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
                    blogQuestions.map(blogQuestion => <BlogCard
                        key={blogQuestion._id}
                        blogQuestion= {blogQuestion}
                    ></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blog;