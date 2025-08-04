import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router'

export default function Contact() {
    const [isMenuOpen , setIsMenuOpen] = useState(false)
    
  return (
    <section className={"contact_container"}>
      {/* <div className='container'>
        <h2>صفحات مجازی</h2>
        <div className='btns'>

        </div>
      </div> */}
       <nav className='navbar'>
              <div className='content_container'>
                <div className='intro'>
                    سلام همایون توسلی زاده هستم
                </div>
                <ul className='nav_li'>
            <Link to='/'><li>صفحه اصلی</li></Link>
            <Link to='/portfolio'><li>نمونه کارها</li></Link>
                   <Link to={'/contact'}><li>تماس با ما</li></Link>
                </ul>
                <div className='res_nav'>
                  <i className='bx bx-menu' onClick={() => setIsMenuOpen(true)}></i>
                </div>
                  <div className={` ${!isMenuOpen ? 'close_menu' : 'menu'}`}>
                      <div className='close'>
                        <i className='bx bx-x' onClick={() => setIsMenuOpen(false)}></i>
                      </div>
                      <ul className='menu_li'>
            <Link to='/'><li>صفحه اصلی</li></Link>
            <Link to='/portfolio'><li>نمونه کارها</li></Link>
                   <Link to={'/contact'}><li>تماس با ما</li></Link>
                      </ul>
                      <div className='btn_container'>
        <a href='tel:+989058022738' className='btn2'>
            شماره تماس 
        </a>
                      </div>
                  </div>
              </div>
            </nav>
<div className="parent">
        <div className="card">
            <div className="logo">
                <span className="circle circle1"></span>
                <span className="circle circle2"></span>
                <span className="circle circle3"></span>
                <span className="circle circle4"></span>
                <span className="circle circle5">
                    ارتباط با ما
                </span>

            </div>
            <div className="glass"></div>
            <div className="content">
                <span className="title">راه های ارتباطی با ما</span>
                <span className="text">در صورت در خواست سفارش و مشاوره با شماره درج شده تماس بگیرید.</span>
                <span className="text"><a href="tel:+989058022738">+989058022738</a></span>
            </div>
            <div className="bottom">
                
                <div className="social-buttons-container">
                    <button className="social-button .social-button1" onClick={() => window.open('https://www.instagram.com/mojasame.saz.z?', '_blank')}>
                        <i className='bx bxl-instagram-alt'></i>
                    </button>
                      <button className="social-button .social-button2" onClick={() => window.open('https://www.whatsapp.com', '_blank')}>
                        <i className='bx bxl-whatsapp'></i>
                      </button>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}
