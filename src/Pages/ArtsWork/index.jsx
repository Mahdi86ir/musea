import React, { useState } from 'react'
import style from './style.module.css'
import Arts from '../../Components/Arts'
import { Link } from 'react-router'

export default function ArtsWork() {
    const [isMenuOpen , setIsMenuOpen] = useState(false)
    const [imgsContainer , setImgsContainer] = useState({
        container1:[
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
        ],
        container2:[
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
        ],
    })
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
                    <li>تماس با ما</li>
                    <li>درباره ما</li>
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
                        <li>تماس با ما</li>
                        <li>درباره ما</li>
                      </ul>
                      <div className={style.btn_container}>
                                        <button type="button" className={style.btn2}>
                          شماره تماس 
                      </button>
                      </div>
                  </div>
              </div>
            </nav>
                        <section className={style.other_works}>
      <div className={style.content_container}>
        <div>
          <h2>نمونه کارها</h2>
          <p>همایون توسلی زاده،هنرمند، مجسمه ساز و پیکرتراش ایرانی</p>
        </div>
        <Link to='/'>
          <button type="button" className={style.btn}>
            بازگشت به صفحه اصلی
          </button>
        </Link>
      </div>
    </section>
    <section className={style.container}>
           

        <Arts imgsContainer={imgsContainer.container1}/>
        <Arts imgsContainer={imgsContainer.container2}/>
    </section>
    </>
  )
}
