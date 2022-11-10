import React, { useEffect, useState } from 'react';
import useSetTitles from '../../Hook/useSetTitels';
import BlogCard from './BlogCard';

const Blog = () => {
    const [blogQuestions, setBlogQuestions] = useState([]);
    useSetTitles('Blog')
    useEffect(() => {
        fetch('https://service-review-server-eta.vercel.app/blog')
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