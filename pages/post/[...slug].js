import Image from 'next/image';
import Head from 'next/head';
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
            <section className="w-full flex flex-col justify-center items-center mt-6 mb-10 box-border">
                <div className="relative h-80 w-5/6 rounded-md rounded-lg overflow-hidden mb-6 flex justify-center items-center">
                    <Image 
                        src={blogDetail.thumnail.url}
                        className="rounded-lg overflow-hidden"
                        alt={blogDetail.tittle}
                        title={blogDetail.tittle}
                        layout="fill"
                        priority
                    />
                </div>
                <div className="w-full md:px-20">
                    <h2 className="font-bold text-4xl mb-2">{blogDetail.tittle}</h2>
                    <span className="text-neutral-500">{blogDetail.dateCreated}</span>
                </div>
                <div className="mt-6 px-2 md:px-20 text-lg text-neutraul-500">
                    <p>{blogDetail.detail}</p>
                </div>
            </section>
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