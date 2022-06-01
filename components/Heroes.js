import Image from 'next/image';
import mascot from '../public/mascotpj.png';
import RippleButton from "./RippleButton";
import styles from '../styles/heroes.module.scss';
import React from 'react'

const Heroes = () => {
    const merchTypes = [
        {
            id: 1,
            content: 'standee'
        },
        {
            id: 2,
            content: 'keychain'
        },
        {
            id: 3,
            content: 'postcard'
        },
        {
            id: 4,
            content: 'merch'
        },
    ]
    return (
        <section 
            style={{height: '80vh'}} 
            className="w-full flex justify-center items-center mt-6 mb-10 box-border"
        >
          <div className="w-full md:w-3/4 h-full min-h-max mx-auto grid lg:grid-cols-3 lg:grid-flow-col md:gap-5 px-4 box-border">
            <div className="flex flex-col md:justify-center mt-40 md:mt-0 lg:col-span-2 z-10 backdrop-blur-sm">
                <div className="overflow-hidden flex justify-center items-center">
                    <div className="flex flex-col justify-center font-bold text-4xl md:text-6xl">
                        <h1 className="">CHÚNG MÌNH CÓ</h1>
                        <div className="overflow-hidden">
                            <ul className={`${styles.content_list} w-full list-none text-left uppercase text-cyan-500 h-12`}>
                                {merchTypes.map(merchType => {
                                    return (
                                        <li 
                                            key={merchType.id} 
                                            className={`${styles.content_list_items} m-0 text-cyan-500`}
                                        >
                                            {merchType.content}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="pr-4 text-lg mt-2">Customize nhân vật yêu thích của bạn với rất vã merch. Chúng mình có đa dạng các loại sản phẩm độc đáo, chất lượng, hợp tác cùng những họa sĩ hàng đầu </p>
                <div className="flex flex-col md:flex-row justify-center items-center mt-4">
                    <RippleButton type="bordered" link="news">Hóng tin mới</RippleButton>
                    <RippleButton link="preorder">Xem sản phẩm</RippleButton>
                </div>
            </div>
            <div className="flex justify-center items-center md:col-span-1 absolute md:static top-40">
              <Image src={mascot} alt="landing" title="landing" width={400} height={500}/>
            </div>
          </div>
        </section>
    )
}

export default Heroes