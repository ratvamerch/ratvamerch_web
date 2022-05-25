import React from 'react'
import Head from 'next/head'
import FeedbackForm from '../../components/FeedbackForm';
import PreOrder from '../../components/PreOrder';
import { request, gql} from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default function PostDetail({blogDetail}) {
    return (
        <>
            <Head>
                <title>{blogDetail.tittle}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="px-24 pb-2 overflow-hidden">
                <div className="w-full rounded-md">
                    <img 
                        src={blogDetail.thumnail.url}
                        className="h-96 w-4/5 mx-auto"
                        alt={blogDetail.tittle}
                        title={blogDetail.tittle}
                    />
                </div>
                <div>
                    <h2 className="px-2 font-bold text-4xl">{blogDetail.tittle}</h2>
                    <span className="text-neutral-500">{blogDetail.dateCreated}</span>
                </div>
                <div className="mt-8 px-4 text-neutraul-500">
                    <p>{blogDetail.detail}</p>
                </div>
            </div>
            <PreOrder />
            <FeedbackForm />
        </>
    )
}

export async function getStaticPaths() {
    const query = gql`
        {
            blogPosts {
                id
                slug
            }
        }
    `;

    const result = await request(graphqlAPI, query);
    const blogPaths =  result.blogPosts;
    return { 
        paths: blogPaths.map(blogPath =>({params: {slug: [blogPath.slug]}})),
        fallback: false};
}

export async function getStaticProps({params}) {
    const slug = params.slug[0];
    const query = gql`
        query GetPostDetail($slug : String!) {
            blogPosts(where: {slug: $slug}) {
                id
                tittle
                slug
                thumnail {
                  url
                }
                dateCreated
                detail
            }
        }
    `;
    const result = await request(graphqlAPI, query, {slug});
    const blogDetail = result.blogPosts;
    return {
        props: {
            blogDetail: blogDetail[0]
        }
    }
}