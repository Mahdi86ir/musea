// import React, { useEffect, useState } from 'react'
// import style from './style.module.css'

// export default function Honors() {
//   const imgs = [
//     "/assets/images/1f.png",
//     "/assets/images/2f.png",
//     "/assets/images/3f.png",
//     "/assets/images/4f.png",
//     "/assets/images/1.png",
//     "/assets/images/2.png",
//     "/assets/images/3.png",
//     "/assets/images/4.png",
//     "/assets/images/5.png",
//     "/assets/images/6.png",
//     "/assets/images/7.png",
//     "/assets/images/8.png",
//   ]

//   const [src, setSrc] = useState(imgs[0])
//   const [fade, setFade] = useState(true)

//   useEffect(() => {
//     let indx = 0
//     const interval = setInterval(() => {
//       setFade(false) // شروع فید اوت
//       setTimeout(() => {
//         indx = (indx + 1) % imgs.length
//         setSrc(imgs[indx])
//         setFade(true) // فید این دوباره
//       }, 300) // زمان محو قبل از تغییر عکس
//     }, 2700)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className={style.honors_container}>
//       <div className={style.slider_auto}>
//         <img src={src} alt="" className={fade ? style.fade_in : style.fade_out} />
//       </div>
//     </section>
//   )
// }
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';

export default function Honors() {
  return (
    <section className='honors_container'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        // navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        //         autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        modules={[EffectFade ,]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/assets/images/9.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/8.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/7.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/6.png" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
