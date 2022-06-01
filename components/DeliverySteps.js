import {request, gql} from 'graphql-request';
import {useRef} from 'react';
import useIntersection from '../hooks/useIntersection';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getDeliverySteps = async () => {
    const query = gql`
        {
            deliverySteps {
                id
                orderNo
                title
                describe
            }
        }
    `;

    const result = await request(graphqlAPI, query);

    return result.deliverySteps;
};

const DeliverySteps = ({deliverySteps}) => {
  const ref = useRef();
  const inViewport = useIntersection(ref, '50px');

  return (
    <section ref={ref} className={`${inViewport ? 'animate__fadeInUp' : ''} w-full flex flex-col justify-center items-center my-20`} >
      <h2 className="font-bold text-4xl text-cyan-500 text-center mb-10">QUÁ TRÌNH MUA HÀNG</h2>
      <div className="md:ml-0 w-screen px-10 md:px-2">
        <div className="w-screen md:grid grid-cols-4 md:grid-col-1 border-l-2 md:border-l-0 md:border-t-2 border-cyan-500">
          {deliverySteps.map(deliveryStep => {
            return (
              <div key={deliveryStep.id} className="flex flex-col mb-8 md:mb-0">
                <div className="relative flex items-center px-3">
                  <span className="absolute top-0 md:left-1/2 border-2 border-cyan-500 text-center align-middle px-2 rounded-full backdrop-blur-2xl -translate-x-6 md:-translate-y-4">{deliveryStep.orderNo}</span>
                  <h3 className="font-bold text-xl w-full text-left ml-6 mt-1 md:text-center">{deliveryStep.title}</h3>
                </div>
                <p className="text-neutral-500 pl-10 pr-16">{deliveryStep.describe}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default DeliverySteps;