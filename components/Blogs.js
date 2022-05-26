import React from 'react'
import BlogPost from "../components/BlogPost";
import {request, gql} from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getBlogPosts = async () => {
    const query = gql`
        {
            blogPosts {
                id
                tittle
                slug
                thumnail {
                  url
                }
                dateCreated
                describtion
            }
        }
    `;

    const result = await request(graphqlAPI, query);

    return result.blogPosts;
};

const Blogs = ({blogPosts}) => {
    return (
        <section className="flex flex-col justify-center items-center mt-10 px-10">
            <h2 className="font-bold text-2xl text-cyan-500 text-center mb-4">TIN MỚI CỦA RẤT VÃ</h2>
            <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-flow-col md:gap-6">
                {blogPosts.map(blogPost => {
                    return (
                        <BlogPost key={blogPost.id} blogPost={blogPost} />
                    )
                })}
            </div>
        </section>
    )
}

export default Blogs