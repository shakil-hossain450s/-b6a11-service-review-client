import React from 'react';

const BlogCard = ({ blogQuestion }) => {
    // console.log(blogQuestion)
    // console.log(ans)
    return (
        <div className='my-12'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    {blogQuestion?.question}
                </div>
                
                <div className="collapse-content">
                <div className='divider'></div>
                    <p className='font-medium'>
                        {blogQuestion?.ans}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;