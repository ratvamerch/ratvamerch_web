import React from 'react'
import CountdownTimer from './CountdownTimer';
import RippleButton from "../components/RippleButton";

const PreOrder = () => {
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    return (
        <section className="w-full lg:w-1/2 mx-auto mt-20">
            <h1 className="text-bold text-center">THỜI GIAN MỞ PRE-ORDRER CÒN</h1>
            <CountdownTimer targetDate={dateTimeAfterThreeDays} />
            <p className="text-neutral-500 px-10">
                Rất Vã Merch chúng mình mở đợt pre-order standee private pictures của họa sĩ Ahren. Đặt ngay bạn ơi!
            </p>
            <div className="flex justify-center items-center mt-6">
                <RippleButton type="bordered" link="news">Hóng lần sau</RippleButton>
                <RippleButton link="preorder">Đặt luôn</RippleButton>
            </div>
        </section>
    )
}

export default PreOrder;