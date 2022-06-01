import Head from "next/head";
import {getFeatures} from "../components/Features";
import Features from '../components/Features';
import {getPartners} from "../components/Partners";
import Partners from '../components/Partners';
import {getDeliverySteps} from "../components/DeliverySteps";
import DeliverySteps from '../components/DeliverySteps';
import PreOrder from '../components/PreOrder';
import Carousel from '../components/Carousel';
import FeedbackForm from "../components/FeedbackForm";
import Heroes from "../components/Heroes";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home({features, partners, deliverySteps}) {
  return (
      <>
        <Head>
          <title>Rất Vã Merch</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Heroes />
        <Partners partners = {partners} />
        <Carousel />
        <PreOrder />
        <DeliverySteps deliverySteps= {deliverySteps} />
        <Features features = {features} />
        <WhyChooseUs />
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