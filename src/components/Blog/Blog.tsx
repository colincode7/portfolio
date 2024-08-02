// Blog.tsx
import React from 'react';
import BlogCard from './BlogCard';
import blogData from './BlogData';

function Blog() {
    return (
        <div className="flex flex-col items-center py-12 px-6">
            <h2 className="bg-light text-dark rounded p-4 text-5xl lg:text-7xl font-bold underline mb-6">Blog</h2>
            <div className="w-full flex flex-wrap justify-center text-black">
                {blogData.map((post, index) => (
                    <BlogCard  key={index} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Blog;
