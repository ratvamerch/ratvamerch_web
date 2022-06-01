import React from 'react'
import Head from "next/head";
import CountdownTimer from '../components/CountdownTimer';
import Carousel from "../components/Carousel";
import OrderForm from '../components/OrderForm';

const Preorder = () => {
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    return (
        <>
            <Head>
                <title>Rất Vã Preorder</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <section className="w-full" id="preOrder">
                <h2 className="font-bold text-cyan-500 text-4xl text-center mt-10">ĐỂ LẠI LỜI NHẮN VỚI CHÚNG MÌNH</h2>
                <p className="text-neutral-500 md:px-2 w-4/5 mx-auto mt-4 mb-10 text-lg"> Rất Vã Merch chúng mình mở đợt pre-order standiee private pictures của họa sĩ ahren. Để lại thông tin chúng mình sẽ liên lạc để xác nhận đơn hàng 
    hoặc bạn có thể đặt hàng qua fanpage & hotline của chúng mình</p>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-bold text-center">THỜI GIAN MỞ PRE-ORDRER CÒN</h2>
                    <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                </div>
                <Carousel />
                <OrderForm />
            </section>
        </>
    )
}

export default Preorder;