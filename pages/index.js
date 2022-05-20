import Head from "next/head";
import Image from 'next/image';
import landingPic from '../public/landingPic.png';
import {getFeatures} from "../components/Features";
import Features from '../components/Features';
import {getPartners} from "../components/Partners";
import Partners from '../components/Partners';
import {getDeliverySteps} from "../components/DeliverySteps";
import DeliverySteps from '../components/DeliverySteps';
import PreOrder from '../components/PreOrder';
import Carousel from '../components/Carousel';
import RippleButton from "../components/RippleButton";
import FeedbackForm from "../components/FeedbackForm";

export default function Home({features, partners, deliverySteps}) {
  const Reasons = [
    {
      id: 1,
      describe: "Khách hàng có thể customize sản phẩm của mình theo sở thích"
    },
    {
      id: 2,
      describe: "Bạn đưa ra ý tưởng chúng mình sẽ biến thành sản phẩm"
    },
    {
      id: 3,
      describe: "Dịch vụ chăm sóc khách hàng uy tín"
    },
  ];

  return (
      <>
        <Head>
          <title>Rất Vã Merch</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {/* Welcome */}
        <section style={{height: '80vh'}} className="flex justify-center items-center my-8 box-border">
          <div className="w-3/4 h-full min-h-max mx-auto grid lg:grid-cols-3 lg:grid-flow-col gap-5 px-6 box-border">
            <div className="flex justify-center items-center col-span-1">
              <Image src={landingPic} alt="landing" title="landing" width={500} height={500}/>
            </div>
            <div className="flex flex-col justify-center col-span-2">
              <h1 className="font-bold text-6xl">
                CHÚNG MÌNH CÓ <br/>
                <span className="text-cyan-500 ml-2">STANDEE</span>
              </h1>
              <p className="text-neutral-500 pr-6">Customize nhân vật yêu thích của bạn với rất vã merch. Chúng mình có đa dạng các loại sản phẩm độc đáo, chất lượng, hợp tác cùng những họa sĩ hàng đầu </p>
              <div className="flex justify-center items-center mt-4">
                <RippleButton type="bordered" link="news">Hóng tin mới</RippleButton>
                <RippleButton link="preorder">Xem sản phẩm</RippleButton>
              </div>
            </div>
          </div>
        </section>

        <Partners partners = {partners} />
        <Carousel />
        <PreOrder />
        <DeliverySteps deliverySteps= {deliverySteps} />
        <Features features = {features} />
        
        {/*Why choosing us*/}
        <section style={{height: '60vh'}} className="flex justify-center items-center my-8 box-border">
          <div className="w-3/4 h-full min-h-max mx-auto grid lg:grid-cols-3 lg:grid-flow-col gap-5 px-6 box-border">
            <div className="flex flex-col justify-center col-span-2">
              <h2 className="font-bold text-6xl mb-4">
                TẠI SAO CHỌN <br/>
                <span className="text-cyan-500 ml-2">RẤT VÃ MERCH</span>
              </h2>
              {Reasons.map(reason => {
                return (
                  <div key={reason.id} className="flex justify-start items-center">
                    <span className="iconify" data-icon="akar-icons:check"></span>
                    <p className="text-neutral-500 ml-2">{reason.describe}</p>
                  </div>
                )
              })}
              <div className="flex justify-center items-center mt-4">
                <RippleButton type="bordered" link="news">Hóng tin mới</RippleButton>
                <RippleButton link="preorder">Xem sản phẩm</RippleButton>
              </div>
            </div>
            <div className="flex justify-center items-center col-span-1">
              <Image src={landingPic} alt="landing" title="landing" width={500} height={500}/>
            </div>
          </div>
        </section>
        <FeedbackForm />
      </>
      
  )
}

export async function getStaticProps() {
  const features = (await getFeatures()) || [];
  const partners = (await getPartners()) || [];
  const deliverySteps = (await getDeliverySteps()) || [];

  return {
    props: {
      features: features,
      partners: partners,
      deliverySteps: deliverySteps,
    }
  };
}