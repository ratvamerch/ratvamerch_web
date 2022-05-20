import React from 'react'
import RippleButton from "../components/RippleButton";

const PreOrder = () => {
    return (
        <section className="w-1/2 mx-auto my-10">
            <h1 className="text-bold text-center">THỜI GIAN MỞ PRE-ORDRER CÒN</h1>
            <div className="flex justify-center items-center mb-4">
                <span className="text-4xl font-bold text-cyan-500">12 days</span>
                <span className="text-4xl font-bold">10:20:02</span>
            </div>
            <p className="text-neutral-500 px-16">Rất Vã Merch chúng mình mở đợt pre-order standee private pictures của họa sĩ Ahren. Đặt ngay bạn ơi!</p>
            <div className="flex justify-center items-center my-4">
                <RippleButton type="bordered" link="news">Hóng lần sau</RippleButton>
                <RippleButton link="preorder">Đặt luôn</RippleButton>
            </div>
        </section>
    )
}

export default PreOrder;