import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Shop.css'

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function Shop() {
  return (
    <section className='shop-section'>
        <div className='shop-title'>
            <p className="iText">Our products</p>
            <p className="tText">MUSEUM SHOP</p>
            <p className='normalText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
            <p className="normalText">incididunt labore et dolore magna aliqua</p>
        </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination , Navigation]}
        className="shopSwiper"
      >
        <SwiperSlide>
            <div className='shop-item'>
                <img className='pr-img' src="/assets/shopimg1600x600.jpg" alt="" />
                <p className='pr-title'>ART</p>
                <div className='starts'></div>
                <p className='pr-price'>1$</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='shop-item'>
                <img className='pr-img' src="/assets/shopimg1600x600.jpg" alt="" />
                <p className='pr-title'>ART</p>
                <div className='starts'></div>
                <p className='pr-price'>1$</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='shop-item'>
                <img className='pr-img' src="/assets/shopimg1600x600.jpg" alt="" />
                <p className='pr-title'>ART</p>
                <div className='starts'></div>
                <p className='pr-price'>1$</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='shop-item'>
                <img className='pr-img' src="/assets/shopimg1600x600.jpg" alt="" />
                <p className='pr-title'>ART</p>
                <div className='starts'></div>
                <p className='pr-price'>1$</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='shop-item'>
                <img className='pr-img' src="/assets/shopimg1600x600.jpg" alt="" />
                <p className='pr-title'>ART</p>
                <div className='starts'></div>
                <p className='pr-price'>1$</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}