import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay, Keyboard} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
  return (
    <Swiper
        style={{height: "40vh"}}
        className="w-4/5 md:w-2/3 lg:w-1/2 text-center border-2 rounded-lg border-neutral-200 my-10"
        modules={[Navigation, Pagination, Autoplay, Keyboard]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        keyboard={{
            enabled: true,
        }}
    >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  )
}

export default Carousel;