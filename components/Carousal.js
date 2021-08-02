import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


export default function Carousal() {
  return (
    <>
    <Swiper slidesPerView={4} spaceBetween={10} centeredSlides={false} navigation={true}  className="" style={{ '--swiper-navigation-color': 'white' }}>
  <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
    </>
  )
}