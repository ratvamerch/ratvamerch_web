import React from 'react'
import Head from 'next/head';
import Blogs from '../components/Blogs';
import {getBlogPosts} from '../components/Blogs';
import Carousel from '../components/Carousel';
import FeedbackForm from '../components/FeedbackForm';
import PreOrder from '../components/PreOrder';

const News = ({blogPosts}) => {
  return (
    <>  
        <Head>
            <title>Rất Vã News</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Carousel />
        <Blogs blogPosts={blogPosts} />
        <PreOrder />
        <FeedbackForm />
    </>
  )
}

export default News;

export async function getStaticProps() {
    const blogPosts = (await getBlogPosts()) || [];
  
    return {
        props: {
            blogPosts: blogPosts
        }
    };
}