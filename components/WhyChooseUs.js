import Image from 'next/image';
import RippleButton from "../components/RippleButton";
import mascot from '../public/mascotpj.png';
import {useRef} from 'react';
import useIntersection from '../hooks/useIntersection';

const WhyChooseUs = () => {
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

    const ref = useRef();
    const inViewport = useIntersection(ref, '50px');

    return (
        <section 
          ref={ref} 
          style={{height: '60vh'}} 
          className={`${inViewport ? 'animate__fadeInBottomLeft' : ''} 
          w-full flex justify-center items-center my-40 md:my-20 box-border`}
        >
          <div className="w-full md:w-3/4 h-full min-h-max mx-auto grid lg:grid-cols-3 lg:grid-flow-col md:gap-4 box-border">
            <div className="flex justify-center items-center col-span-1">
              <Image src={mascot} alt="landing" title="landing" width={400} height={500}/>
            </div>
            <div className="w-full flex flex-col justify-center md:col-span-2">
              <h2 className="font-bold text-4xl md:text-6xl mb-4">
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
              <div className="flex flex-col md:flex-row justify-center items-center mt-4">
                <RippleButton type="bordered" link="news">Hóng tin mới</RippleButton>
                <RippleButton link="preorder">Xem sản phẩm</RippleButton>
              </div>
            </div>
          </div>
        </section>
    )
}

export default WhyChooseUs