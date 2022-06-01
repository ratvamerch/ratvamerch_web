import {request, gql} from 'graphql-request';
import { useRef } from 'react';
import useIntersection from '../hooks/useIntersection';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPartners = async () => {
    const query = gql`
        {
            partners {
                id
                partnerName
                partnerAva {
                  url
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query);

    return result.partners;
};

const Partners = ({partners}) => {
    const ref = useRef();
    const inViewport = useIntersection(ref, '50px');

    return (
        <section ref={ref} className={`${inViewport ? 'animate__fadeInBottomLeft' : ''} w-full flex flex-col justify-center items-center mb-20 md:my-20`}>
            <h2 className="font-bold text-4xl text-cyan-500 text-center mb-8">CÁC THÀNH VIÊN CỦA CHÚNG MÌNH</h2>
            <div className="grid lg:grid-cols-3 lg:grid-flow-col gap-10">
                {partners.map(partner => {
                    return (
                        <div 
                            key={partner.id} 
                            className="flex flex-col justify-center items-center"
                        >
                            <div className="box-border border-2 border-neutral-200 rounded-xl shadow-md overflow-hidden">
                                <img 
                                    src={partner.partnerAva.url}
                                    alt={partner.partnerName}
                                    className="w-40 h-40"
                                    title={partner.partnerName}
                                />
                            </div>
                            <p className="text-xl mt-1 font-bold text-center">{partner.partnerName}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Partners;