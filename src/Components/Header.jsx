// // import React, { useRef, useState } from 'react';
// // // Import Swiper React components
// // import { Swiper, SwiperSlide } from 'swiper/react';

// // // Import Swiper styles
// // import 'swiper/css';
// // import 'swiper/css/pagination';
// // import 'swiper/css/navigation';

// // import './Header.css';

// // import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// // export default function Header() {
// //   return (
// //     <section className='main-slider'>
// //       <Swiper
// //         spaceBetween={0}
// //         centeredSlides={true}
// //         loop={true}
// //         autoplay={{
// //           delay: 2500,
// //           disableOnInteraction: false,
// //         }}
// //         pagination={{
// //           clickable: true,
// //         }}
// //         navigation={true}
// //         modules={[Autoplay, Pagination, Navigation]}
// //         className="mySwiper"
// //       >
// //         <SwiperSlide>
// //         </SwiperSlide>

// //         <SwiperSlide>
// //         </SwiperSlide>

// //         <SwiperSlide>
// //         </SwiperSlide>

// //         <SwiperSlide>
// //         </SwiperSlide>

// //       </Swiper>
// //     </section>
// //   );
// // }
// import React, { useEffect, useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import './Header.css';

// // import required modules
// import { EffectFade, Navigation, Pagination } from 'swiper/modules';
// import { useSpring , animated, useTransition} from '@react-spring/web';

// // const slides = [
// //   'photo-1544511916-0148ccdeb877',
// //   'photo-1544572571-ab94fd872ce4',
// //   'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG',
// //   'photo-1540206395-68808572332f',
// // ]

// const slides = [
//   '/assets/slide1.jpg',
//   '/assets/slide2.jpg',
//   '/assets/slide3.jpg',
//   '/assets/slide4.jpg'
// ]
// export default function Header() {
//   const [flip , setFlip] = useState(false)
//   // const props = useSpring({
//   //   to:{opacity: 1},
//   //   from:{opacity: 0},
//   //   reset:true,
//   //   // reverse:flip,
//   //   delay:500,
//   //   onRest: () => setFlip(!flip)
//   // })
  

//   // const handlePrev = () => {
//   //   if(currentIndex == 0){
//   //     setCurrentIndex(3)
//   //   }else{
//   //     setCurrentIndex(prev => prev - 1)
//   //   }
//   // }
//   // const handleNext = () => {
//   //   if(currentIndex == 3){
//   //     setCurrentIndex(0)
//   //   }else{
//   //     setCurrentIndex(prev => prev + 1)
//   //   }
//   // }

//   const [index, setIndex] = useState(0);

//   const transitions = useTransition(index, {
//     key: index,
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 }, // باعث میشه تصویر قبلی به‌جای حذف شدن فقط محو بشه
//     config: { duration: 1000 },
//     exitBeforeEnter: false, // باعث میشه هر دو تصویر همزمان روی هم باشن
//   });

//   const handleNext = () => {
//     setIndex((prev) => (prev + 1) % slides.length);
//   };

//   const handlePrev = () => {
//     setIndex((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <section className="main-slider">
//       {transitions((style, i) => (
//         <animated.div
//           key={i}
//           className="bg"
//           style={{
//             position: "absolute", // تصاویر روی هم قرار بگیرند
//             width: "100%",
//             height: "100%",
//             ...style,
//             backgroundImage: `url(${slides[i]})`,
//           }}
//         />
//       ))}
//       <i onClick={handlePrev} className="bi bi-chevron-compact-left prev"></i>
//       <i onClick={handleNext} className="bi bi-chevron-compact-right next"></i>
//     </section>
//   );
// }
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Header.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <section className='main-slider'>
<Swiper
  spaceBetween={30}
  effect={'fade'}
  speed={1500}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  loop={true}
  navigation={true}
  pagination={{
    clickable: true,
  }}
  modules={[EffectFade, Navigation, Pagination, Autoplay]}
  className="main-slider mySwiper"
>
  <SwiperSlide>
    <div className="slide-bg" style={{ backgroundImage: `url(/assets/slide1.jpg)` }}></div>
    <div className='slider-content'>
      <p className="iText">History of art department</p>
      <h2>DISCOVER BEAUTY</h2>
      <button type="button" className='btn'>view more</button>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="slide-bg" style={{ backgroundImage: `url(/assets/slide2.jpg)` }}></div>
    <div className='slider-content'>
      <p className="iText">History of art department</p>
      <h2>HORTENSE FIQUET</h2>
      <button type="button" className='btn'>view more</button>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="slide-bg" style={{ backgroundImage: `url(/assets/slide3.jpg)` }}></div>
    <div className='slider-content'>
      <p className="iText">History of art department</p>
      <h2>NEW EXHIBITION</h2>
      <button type="button" className='btn'>view more</button>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="slide-bg" style={{ backgroundImage: `url(/assets/slide4.jpg)` }}></div>
    <div className='slider-content'>
      <p className="iText">History of art department</p>
      <h2>MODERN CLASSICS</h2>
      <button type="button" className='btn'>view more</button>
    </div>
  </SwiperSlide>
</Swiper>

    </section>
  );
}