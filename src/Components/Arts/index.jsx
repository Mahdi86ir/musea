import React, { useEffect, useRef, useState } from 'react'
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
  const swiperRef = useRef(null)

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
useEffect(() => {
  if (swiperRef.current) {
    if (clicked) {
      swiperRef.current.autoplay.stop()
    } else {
      swiperRef.current.autoplay.start()
    }
  }
}, [clicked])

  
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
  modules={[EffectCoverflow, Pagination, Autoplay]}
  className="mySwiper"
  onSwiper={(swiper) => (swiperRef.current = swiper)}
>

        {
          imgsContainer.map(item => (
            <SwiperSlide key={item} onClick={() => showImage(item)}>
              <img src={item} />
            </SwiperSlide>
          ))
        }
      </Swiper>
        {
          clicked && 
          <div className='image_panel'>
            <div>
              <button type="button" onClick={closeImg}>
                <i className='bx bx-x'></i>
              </button>
            </div>
            <img src={clickedImg} alt="" />
          </div>
        }
    </section>
  )
}
