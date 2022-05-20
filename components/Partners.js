import {request, gql} from 'graphql-request';

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
    return (
        <section className="flex flex-col justify-center items-center my-10">
            <h2 className="font-bold text-2xl text-cyan-500 text-center mb-6">CÁC THÀNH VIÊN CỦA CHÚNG MÌNH</h2>
            <div className="grid lg:grid-cols-3 lg:grid-flow-col gap-10">
                {partners.map(partner => {
                    return (
                        <div key={partner.id} className="flex flex-col justify-center items-center">
                            <div className="box-border border-2">
                                <img 
                                    src={partner.partnerAva.url}
                                    alt={partner.partnerName}
                                    title={partner.partnerName}
                                />
                            </div>
                            <p className="font-bold text-center">{partner.partnerName}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Partners;