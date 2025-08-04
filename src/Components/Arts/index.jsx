import React, { useEffect, useRef, useState } from 'react'
import Art from '../Art'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import gsap from 'gsap';

import './style.css';

// import required modules
import { EffectCoverflow, Pagination , Autoplay } from 'swiper/modules';
export default function Arts({ imgsContainer }) {
  const [clicked , setClicked] = useState(false)
  const [clickedImg , setClickedImg] = useState("")
  const swiperRef = useRef(null)
  const panelRef = useRef(null);
const imgRef = useRef(null);
  const showImage = (src) => {
    setClickedImg(src)
  }

const closeImg = () => {
  // انیمیشن عکس: fade out و پایین رفتن
  gsap.to(imgRef.current, {
    opacity: 0,
    y: 50,
    duration: 0.4,
    ease: 'power2.in',
  });

  // انیمیشن پنل: اسلاید به پایین
  gsap.to(panelRef.current, {
    y: '100%',
    duration: 0.5,
    ease: 'power3.in',
    delay: 0.2,
    onComplete: () => {
      setClicked(false);
      setClickedImg("");
    },
  });
};

 useEffect(() => {
  if (clickedImg) {
    setClicked(true);
  }
}, [clickedImg]);

useEffect(() => {
  if (clicked) {
    gsap.fromTo(
      panelRef.current,
      { y: '100%' },
      { y: '0%', duration: 0.5, ease: 'power3.out' }
    );

    gsap.fromTo(
      imgRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power2.out' }
    );
  }
}, [clicked]);

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
  <div ref={panelRef} className='image_panel'>
    <div>
      <button type="button" onClick={closeImg}>
        <i className='bx bx-x'></i>
      </button>
    </div>
    <img ref={imgRef} src={clickedImg} alt="نمایش تصویر" />
  </div>
}
    </section>
  )
}
