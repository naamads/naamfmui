import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/_body.scss';

// Import images properly when using React + Webpack / Vite
import img1 from '../../public/images1.jpg';
import img2 from '../../public/images2.jpg';
import img3 from '../../public/images3.jpg';

const Body = () => {
  return (
    <main className="body-content">
      <Swiper
        className="image-slider"
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
      >
        <SwiperSlide>
          <img src={img1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Body;
