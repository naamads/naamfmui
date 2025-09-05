import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./NaamFMSlider.scss";

// JSON data
import NaaMRjSlider from "/src/data/NaaMRjSlider.json";

const dancingIcons = ["🎤", "🎶", "🎵", "♬", "🎧"];

const NaamFMSlider = ({ scrollY }) => {
  const heroData = NaaMRjSlider;

  const letterVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="naam-fm-slider">
      {/* Animated Grid Background */}
      <div
        className="grid-bg"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />

      {/* Glowing Orbs */}
      <div className="orb orb-blue" />
      <div className="orb orb-purple" />

      <div className="slider-container">
        {/* Animated Title */}
        <motion.div
          className="slider-title"
          initial="hidden"
          animate="visible"
        >
          <h1>
            {heroData.title.main.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariant}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={letter === " " ? "space" : "naam"}
              >
                {letter}
              </motion.span>
            ))}
            <br />
            {heroData.title.sub.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariant}
                transition={{ delay: index * 0.1 + 1, duration: 0.5 }}
                className={letter === " " ? "space" : "fm"}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            {heroData.title.tagline}
          </motion.p>
        </motion.div>

        {/* Swiper Slider */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="slider-swiper"
        >
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
          >
            {heroData.frames.map((frame) => (
              <SwiperSlide key={frame.id} className="slide">
                <div className="card">
                  <img src={frame.image} alt={frame.title} />
                  <div className="card-content">
                    <h3>{frame.title}</h3>
                    <p>{frame.description}</p>
                    <div className="dancing-icons">
                      {dancingIcons.map((icon, idx) => (
                        <motion.span
                          key={idx}
                          animate={{ y: [0, -10, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            delay: idx * 0.2,
                          }}
                        >
                          {icon}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default NaamFMSlider;
