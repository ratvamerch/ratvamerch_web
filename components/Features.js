import FeatureCard from "../components/FeatureCard";
import {request, gql} from 'graphql-request';
import {useRef} from 'react';
import useIntersection from '../hooks/useIntersection';


const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getFeatures = async () => {
    const query = gql`
        {
            features {
                id
                title
                thumbnail {
                    url
                }
                des
            }
        }
    `;

    const result = await request(graphqlAPI, query);

    return result.features;
};

const Features = ({features}) => {
    const ref = useRef();
    const inViewport = useIntersection(ref, '50px');

    return (
        <section className="w-full flex flex-col justify-center items-center my-20 box-border">
            <h2 ref={ref} className={`${inViewport ? 'animate__fadeInUp' : ''} font-bold text-4xl text-cyan-500 text-center mb-6`}>CÁC TÍNH NĂNG CỦA RẤT VÃ</h2>
            <div className="grid lg:grid-cols-3 lg:grid-flow-col gap-6">
                {features.map(feature => {
                    return (
                        <FeatureCard key={feature.id} feature={feature} />
                    )
                })}
            </div>
        </section>
    )
}

export default Features;