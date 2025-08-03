import React, { useEffect, useState } from 'react'
import Art from '../Art'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectCoverflow, Pagination , Autoplay } from 'swiper/modules';
export default function Arts({ imgsContainer }) {
  const [clicked , setClicked] = useState(false)
  const [clickedImg , setClickedImg] = useState("")
  const showImage = (src) => {
    setClickedImg(src)
  }

  const closeImg = () => {
    setClicked(false)
    setClickedImg("")
  }

  useEffect(() => {
    if(clickedImg){
      setClicked(true)
    }
  },[clickedImg])

  
  return (
    <section className="arts_container">
           <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination , Autoplay]}
        className="mySwiper"
      >
        {
          imgsContainer.map(item => (
            <SwiperSlide key={item}>
              <img src={item} />
            </SwiperSlide>
          ))
        }
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
        {/* <div className={style.content}>
          {
            imgsContainer.map(item => <Art clickFunc={showImage} key={item} imgSrc={item} />)
          }
        </div>
        {
          clicked && 
          <div className={style.image_panel}>
            <div>
              <button type="button" onClick={closeImg}>
                <i className='bx bx-x'></i>
              </button>
            </div>
            <img src={clickedImg} alt="" />
          </div>
        } */}
    </section>
  )
}
