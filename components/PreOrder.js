import React from 'react'
import CountdownTimer from './CountdownTimer';
import RippleButton from "../components/RippleButton";
import {useRef} from 'react';
import useIntersection from '../hooks/useIntersection';

const PreOrder = () => {
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    const ref = useRef();
    const inViewport = useIntersection(ref, '50px');

    return (
        <section ref={ref} className={`${inViewport ? 'animate__fadeInUp' : ''} w-full lg:w-1/2 mx-auto mt-20`}>
            <h2 className="font-bold text-4xl text-cyan-500 text-center mb-6">THỜI GIAN MỞ PRE-ORDRER CÒN</h2>
            <div className="border-2 border-cyan-500 px-2 py-6 rounded-xl">
                <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                <p className="text-neutral-500 px-2 md:px-10">Rất Vã Merch chúng mình mở đợt pre-order standiee private pictures của họa sĩ ahren. Để lại thông tin chúng mình sẽ liên lạc để xác nhận đơn hàng hoặc bạn có thể đặt hàng qua fanpage & hotline của chúng mình
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center mt-6">
                    <RippleButton type="bordered" link="news">Hóng lần sau</RippleButton>
                    <RippleButton link="preorder">Đặt luôn</RippleButton>
                </div>
            </div>
        </section>
    )
}

export default PreOrder;