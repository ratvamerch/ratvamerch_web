import React from 'react'
import Head from 'next/head'
import FeedbackForm from '../../components/FeedbackForm';
import PreOrder from '../../components/PreOrder';
import PostDetail from '../../components/PostDetail';
import {getBlogPosts} from '../../components/Blogs';
import {request, gql} from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPostDetail = async (slug) => {
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
                describtion
                detail
            }
        }
    `;

    const result = await request(graphqlAPI, query);

    return result.blogPosts;
};

const Post = ({data}) => {
    return (
        <>  
            <Head>
                <title>Mua bán trao đổi merch một cách hiệu quả và thú vị hơn</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="px-24 pb-2 overflow-hidden">
                <div className="w-full rounded-md">
                    <img 
                        src="https://media.graphassets.com/TJrPzqKRdO5KXz0ccKoW"
                        className="h-96 w-4/5 mx-auto"
                        alt="Mua bán trao đổi merch một cách hiệu quả và thú vị hơn"
                        title="Mua bán trao đổi merch một cách hiệu quả và thú vị hơn"
                    />
                </div>
                <div>
                    <h2 className="px-2 font-bold text-4xl">Mua bán trao đổi merch một cách hiệu quả và thú vị hơn</h2>
                    <span className="text-neutral-500">2022-05-22</span>
                </div>
                <div className="mt-8 px-4 text-neutraul-500">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in urna ex. Fusce ullamcorper, lorem at fermentum dignissim, sem mi aliquet nulla, ut fermentum diam enim ut ligula. Pellentesque a turpis diam. Vestibulum sed vehicula lectus. Fusce a purus libero. Nulla eu enim at lectus laoreet fringilla ac eu quam. Proin eu bibendum neque. Praesent porttitor nulla non facilisis malesuada. Nunc aliquet sit amet lacus id finibus. Suspendisse in magna nisi. Fusce luctus a tortor in volutpat.

Mauris consequat in nisi eu ullamcorper. Vestibulum et ligula et ante fermentum semper et et dui. Sed ac odio ante. Curabitur sit amet convallis risus. Cras neque nunc, lobortis in erat eu, facilisis venenatis lorem. Integer placerat ipsum magna, ac faucibus metus tristique id. Sed tempor elementum lorem, hendrerit cursus risus facilisis a. Morbi vitae lectus aliquet, dignissim leo malesuada, porttitor tellus. Nulla facilisi. Nunc nec tincidunt ligula, ut placerat dolor. Sed egestas sem et nibh pretium cursus.

Maecenas ut placerat arcu. Aliquam mattis sollicitudin velit, sit amet lobortis tellus feugiat et. Integer eget est semper, scelerisque elit non, luctus leo. Donec porttitor eros vel libero vehicula, id consequat magna luctus. Etiam eleifend ultricies tincidunt. Mauris malesuada pretium urna, eget dapibus neque dapibus nec. Nullam in eleifend tortor, vel dapibus metus. Vivamus placerat orci metus, et tristique justo bibendum eu. Cras sit amet pharetra nibh, id tincidunt ex.

Vivamus finibus rhoncus augue et luctus. Duis non massa ac tortor rutrum mattis dictum quis orci. Morbi non libero condimentum, feugiat orci ac, vulputate est. Nunc porttitor sodales mauris, nec consectetur magna vestibulum non. Integer nulla nisl, porta sit amet sem quis, facilisis scelerisque nulla. Integer semper neque quam, accumsan congue quam dictum nec. Etiam egestas pretium suscipit. Vestibulum venenatis orci quis augue semper, et maximus mi ullamcorper. Sed consequat egestas accumsan. Cras ullamcorper posuere tortor in aliquam. Donec ac leo urna. Proin elementum pulvinar volutpat. Quisque dignissim aliquet velit, rutrum lobortis velit congue nec.</p>
                </div>
            </div>
            <PreOrder />
            <FeedbackForm />
        </>
    )
}

export default Post;

// export async function getStaticProps({params}) {
//     const postDetail = (await getPostDetail(params.slug)) || [];
  
//     return {
//         props: {
//             data: postDetail
//         }
//     };
// }

// export async function getStaticPaths() {
//     const blogPosts = await getBlogPosts();
//     return {
//       paths: blogPosts.map(( { slug } ) => ({ params: { slug } })),
//       fallback: true,
//     };
// }