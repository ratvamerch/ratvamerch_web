import FeatureCard from "../components/FeatureCard";
import {request, gql} from 'graphql-request';

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
    return (
        <section className="flex flex-col justify-center items-center my-10 px-10">
            <h2 className="font-bold text-2xl text-cyan-500 text-center">CÁC TÍNH NĂNG CỦA RẤT VÃ</h2>
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