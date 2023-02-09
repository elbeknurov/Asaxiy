import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./slider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const Slider = () => {
  return (
    <div className="container swipper__wrapper">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://assets.asaxiy.uz/uploads/banner/desktop/63ce8fea4ac7e.jpg.webp"
            alt="logo"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://assets.asaxiy.uz/uploads/banner/desktop/63cadd0139b21.jpeg.webp"
            alt="logo"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://assets.asaxiy.uz/uploads/banner/desktop/63c92af069d36.jpg.webp"
            alt="logo"
          />
        </SwiperSlide>
      </Swiper>
      <div className="right">
        <img
          className="right__img"
          src="https://assets.asaxiy.uz/uploads/toptoday/mobile/63e3e2c6a48d5.jpeg"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Slider;
