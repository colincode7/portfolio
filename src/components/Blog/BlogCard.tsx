// BlogCard.tsx
import React, { useState } from 'react';
import { BlogPost } from './BlogData'; // Ensure this path is correct

interface BlogCardProps {
    post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);

        if (!isModalOpen) {
            // Disable scroll when the modal is opened
            document.body.style.overflow = 'hidden';
        } else {
            // Enable scroll when the modal is closed
            document.body.style.overflow = '';
        }
    };
    return (
        <div className="w-full md:w-1/2 p-4">
            <div className="min-h-[250px] border-black border-2 p-3 rounded-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] h-full flex flex-col">
                <article className="relative flex flex-col justify-between h-full">
                    <figure className="w-full border-black border-b-2">
                        <div>
                            {post.publicationDate}
                        </div>
                    </figure>
                    <div className="px-6 py-5 text-left flex-grow">
                        <h1 className="text-lg md:text-xl lg:text-2xl rounded end-auto mb-4 pl-2">{post.title}</h1>
                        <p className="text-sm mb-2 line-clamp-4 p-2 pl-4 lg:text-lg">
                            {post.Introduction}
                        </p>
                    </div>
                    <button onClick={toggleModal} className="absolute bottom-0 right-0 font-bold rounded hover:bg-accent duration-300 hover:-translate-y-1 p-2">See full post</button>
                </article>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-30">
                    <div className="relative bg-light p-5 rounded-md border-2 border-black max-h-[80vh] overflow-y-auto">
                        <button onClick={toggleModal} className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 hover:text-dark px-4 py-2 rounded text-black">X</button>
                        <h2 className="text-xl md:text-2xl font-bold mb-3">{post.title}</h2>
                        <div className="prose prose-lg p-4 mt-10" dangerouslySetInnerHTML={{ __html: post.mainContent }} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogCard;
