import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../styles/_body.scss";

const bannerData = [
  { title: "NaaM IT Care", image: "/banners/Untitled Project.jpg", alt: "NaaM IT Care Banner" },
  { title: "NaaM FM", image: "/banners/Designer.png", alt: "NaaM FM Banner" },
  { title: "NaaM Classified", image: "/banners/classified.png", alt: "NaaM Classified Banner" },
  { title: "NaaM Break Time", image: "/banners/breaktime.png", alt: "NaaM Break Time Banner" }
];

const Body = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(bannerData);
  }, []);

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
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <img src={banner.image} alt={banner.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Body;
