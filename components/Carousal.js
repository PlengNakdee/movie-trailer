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


export default function Carousal({poster1, poster2, poster3, poster4, poster5, poster6, url1, url2, url3, url4, url5, url6}) {
  return (
    <>
    <Swiper slidesPerView={4} spaceBetween={0} centeredSlides={false} navigation={true}  className="" style={{ '--swiper-navigation-color': 'white' }}>
  <SwiperSlide><a href={url1}><img className="rounded-md max-w-3/4" src={poster1} alt="movie poster"></img></a></SwiperSlide>
  <SwiperSlide><a href={url2}><img className="rounded-md max-w-3/4" src={poster2} alt="movie poster"></img></a></SwiperSlide>
  <SwiperSlide><a href={url3}><img className="rounded-md max-w-3/4" src={poster3} alt="movie poster"></img></a></SwiperSlide>
  <SwiperSlide><a href={url4}><img className="rounded-md max-w-3/4" src={poster4} alt="movie poster"></img></a></SwiperSlide>
  <SwiperSlide><a href={url5}><img className="rounded-md max-w-3/4" src={poster5} alt="movie poster"></img></a></SwiperSlide>
  <SwiperSlide><a href={url6}><img className="rounded-md max-w-3/4" src={poster6} alt="movie poster"></img></a></SwiperSlide>
  </Swiper>
    </>
  )
}