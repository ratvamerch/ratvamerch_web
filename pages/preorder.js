import React from 'react'
import Head from "next/head";
import Carousel from "../components/Carousel";
import OrderForm from '../components/OrderForm';

const Preorder = () => {
    return (
        <>
            <Head>
                <title>Rất Vã Preorder</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <section id="preOrder">
                <h2 className="font-bold text-cyan-500 text-2xl text-center mt-20">ĐỂ LẠI LỜI NHẮN VỚI CHÚNG MÌNH</h2>
                <p className="text-neutral-500 pr-6 w-3/5 mx-auto mb-10 text-lg"> Rất Vã Merch chúng mình mở đợt pre-order standiee private pictures của họa sĩ ahren. Để lại thông tin chúng mình sẽ liên lạc để xác nhận đơn hàng 
    hoặc bạn có thể đặt hàng qua fanpage & hotline của chúng mình</p>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-bold text-center">THỜI GIAN MỞ PRE-ORDRER CÒN</h1>
                    <div className="flex justify-center items-center mb-4">
                        <span className="text-4xl font-bold text-cyan-500">12 days</span>
                        <span className="text-4xl font-bold">10:20:02</span>
                    </div>
                </div>
                <Carousel />
                <OrderForm />
            </section>
        </>
    )
}

export default Preorder;