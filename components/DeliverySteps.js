import {request, gql} from 'graphql-request';

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
  return (
    <div id="deliverySteps">
      <h2 className="font-bold text-2xl text-cyan-500 text-center mb-8">QUÁ TRÌNH MUA HÀNG</h2>
      <div className="grid grid-cols-4 grid-flow-col px-6 border-t-2 border-cyan-500">
        {deliverySteps.map(deliveryStep => {
          return (
            <div key={deliveryStep.id} className="flex flex-col items-center -translate-y-4">
              <span className="border-2 border-cyan-500 text-center align-middle px-2 rounded-full backdrop-blur-md">{deliveryStep.orderNo}</span>
              <div className="flex flex-col justify-center items-center px-6">
                <h3 className="font-bold mt-1 mb-2 text-center">{deliveryStep.title}</h3>
                <p className="text-neutral-500">{deliveryStep.describe}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DeliverySteps;