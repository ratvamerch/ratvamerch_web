import React from 'react'
import Link from 'next/link';

const BlogPost = ({blogPost}) => {
    return (
        <div className="w-80 h-4/5 px-4 pb-2 border-2 border-neutral-500 rounded-2xl overflow-hidden">
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
                        <a className="px-2 font-bold text-lg">{blogPost.tittle}</a>
                    </Link>
                </h2>
                <span className="text-sm text-neutral-500">{blogPost.dateCreated}</span>
            </div>
            <div className="text-neutraul-500">
                <p>{blogPost.describtion}</p>
            </div>
        </div>
    )
}

export default BlogPost;