import React, { useEffect, useState , useRef } from 'react'
import gsap from 'gsap';

import style from './style.module.css'
import Arts from '../../Components/Arts'
import { Link } from 'react-router'

export default function ArtsWork() {
  const panelRef = useRef(null);
const imgRef = useRef(null);

    const [isMenuOpen , setIsMenuOpen] = useState(false)
    const [imgsContainer , setImgsContainer] = useState([
          "/assets/images/1f.png",
          "/assets/images/2f.png",
          "/assets/images/3f.png",
          "/assets/images/4f.png",
          "/assets/images/1.png",
          "/assets/images/2.png",
          "/assets/images/3.png",
          "/assets/images/4.png",
          "/assets/images/5.png",
          "/assets/images/6.png",
          "/assets/images/7.png",
          "/assets/images/8.png",
          "/assets/images/9.png",
          "/assets/images/10.png",
          "/assets/images/11.png",
          "/assets/images/12.png",
          "/assets/images/13.png",
          "/assets/images/14.png",
          "/assets/images/15.png",
          "/assets/images/16.png",
          "/assets/images/17.png",
          "/assets/images/18.png",
          "/assets/images/19.png",
          "/assets/images/20.png",
          "/assets/images/21.png",
          "/assets/images/22.png",
          "/assets/images/23.png",
          "/assets/images/24.png",
          "/assets/images/25.png",
          "/assets/images/26.png",
          "/assets/images/27.png",
        ])
        const [clicked , setClicked] = useState(false)
        const [clickedImg , setClickedImg] = useState("")
      
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

  return (
    <>
     <nav className={style.navbar}>
              <div className={style.content_container}>
                <div className={style.intro}>
                    سلام همایون توسلی زاده هستم
                </div>
                <ul className={style.nav_li}>
            <Link to='/'><li>صفحه اصلی</li></Link>
            <Link to='/portfolio'><li>نمونه کارها</li></Link>
                   <Link to={'/contact'}><li>تماس با ما</li></Link>
                </ul>
                <div className={style.res_nav}>
                  <i className='bx bx-menu' onClick={() => setIsMenuOpen(true)}></i>
                </div>
                  <div className={` ${!isMenuOpen ? style.close_menu : style.menu}`}>
                      <div className={style.close}>
                        <i className='bx bx-x' onClick={() => setIsMenuOpen(false)}></i>
                      </div>
                      <ul className={style.menu_li}>
            <Link to='/'><li>صفحه اصلی</li></Link>
            <Link to='/portfolio'><li>نمونه کارها</li></Link>
                   <Link to={'/contact'}><li>تماس با ما</li></Link>
                      </ul>
                      <div className={style.btn_container}>
        <a href='tel:+989058022738' className={style.btn2}>
            شماره تماس 
        </a>
                      </div>
                  </div>
              </div>
            </nav>
                        <section className={style.other_works}>
      <div className={style.content_container}>
        <div>
          <h2>همایون توسلی زاده</h2>
          <p>هنرمند، مجسمه ساز و پیکرتراش ایرانی</p>
        </div>
        <Link to='/'>
          <button type="button" className={style.btn}>
            بازگشت به صفحه اصلی
          </button>
        </Link>
      </div>
    </section>
    <section className={style.container}>
      <h2>نمونه کارها</h2>
      <div className={style.images_container}>
      {
        imgsContainer.map((img, index) => (
          <div key={index} className={style.image_item} onClick={() => showImage(img)}>
            <img src={img} alt={`Artwork ${index + 1}`} />
          </div>
        ))
      }
      </div>
    </section>
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

    </>
  )
}
