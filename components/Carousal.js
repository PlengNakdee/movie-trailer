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


export default function Carousal({poster1, poster2, poster3, poster4, poster5, poster6}) {
  return (
    <>
    <Swiper slidesPerView={3} spaceBetween={12} centeredSlides={false} navigation={true}  className="" style={{ '--swiper-navigation-color': 'white' }}>
  <SwiperSlide><a><img className="rounded-md" src={poster1}></img></a></SwiperSlide>
  <SwiperSlide><img className="rounded-md" src={poster2}></img></SwiperSlide>
  <SwiperSlide><img className="rounded-md" src={poster3}></img></SwiperSlide>
  <SwiperSlide><img className="rounded-md" src={poster4}></img></SwiperSlide>
  <SwiperSlide><img className="rounded-md" src={poster5}></img></SwiperSlide>
  <SwiperSlide><img className="rounded-md" src={poster6}></img></SwiperSlide>
  </Swiper>
    </>
  )
}