import React from 'react'
import Link from 'next/link';

const BlogPost = ({blogPost}) => {
    return (
        <div className="w-80 h-4/5 px-4 pb-4 mt-6 border-2 border-neutral-200 shadow-md rounded-2xl overflow-hidden">
            <div className="w-full h-full overflow-hidden">
                <div className="w-full rounded-md">
                    <img 
                        src={blogPost.thumnail.url}
                        alt={blogPost.tittle}
                        title={blogPost.tittle}
                    />
                </div>
                <div>
                    <h2>
                        <Link href={`/post/${blogPost.slug}`}>
                            <a className="max-h-32 px-2 font-bold text-lg overflow-hidden">{blogPost.tittle}</a>
                        </Link>
                    </h2>
                    <span className="text-sm text-neutral-500">{blogPost.dateCreated}</span>
                </div>
                <div className="text-neutraul-400">
                    <p>{blogPost.describtion}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogPost;