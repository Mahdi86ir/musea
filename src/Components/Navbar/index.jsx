import React, { useState } from 'react'
import style from './style.module.css'

export default function Navbar() {
  const [isMenuOpen , setIsMenuOpen] = useState(false)

  return (
    <nav className={style.navbar}>
      <div className={style.content_container}>
        <div className={style.intro}>
            <div>
              👋
            </div>
            سلام همایون توسلی زاده هستم
        </div>
        <ul className={style.nav_li}>
            <li>صفحه اصلی</li>
            <li>نمونه کارها</li>
            <li>تماس با ما</li>
            <li>درباره ما</li>
        </ul>
        <button type="button" className={style.btn}>
            شماره تماس 
        </button>
        <div className={style.res_nav}>
          <i className='bx bx-menu' onClick={() => setIsMenuOpen(true)}></i>
        </div>
          <div className={` ${!isMenuOpen ? style.close_menu : style.menu}`}>
              <div className={style.close}>
                <i className='bx bx-x' onClick={() => setIsMenuOpen(false)}></i>
              </div>
              <ul className={style.menu_li}>
                <li>صفحه اصلی</li>
                <li>نمونه کارها</li>
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
  )
}
