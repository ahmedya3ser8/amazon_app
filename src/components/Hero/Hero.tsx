import { Swiper,SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css/bundle';

function Hero() {
  return (
    <div className='hero'>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img src={'/images/slider/slider-01.jpg'} alt='find gift for dad image' className='w-full h-[370px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'/images/slider/slider-02.jpg'} alt='ship products over world image' className='w-full h-[370px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'/images/slider/slider-03.jpg'} alt='beauty products image' className='w-full h-[370px]' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero;