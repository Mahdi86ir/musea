import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <section className={style.footer_container}>
      <div className={style.content_socials}>
        <h3>شبکه های اجتماعی ما</h3>
        <div>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-whatsapp'></i>
            </a>
            <a href="https://www.instagram.com/mojasame.saz.z?" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-instagram'></i>
            </a>
            <a href="tel:+989058022738">
                <i className='bx bxs-phone'></i>
            </a>
        </div>
      </div>
      <div className={style.content_pages}>
        <ul>
            <Link to='/'><li>صفحه اصلی</li></Link>
            <Link to='/portfolio'><li>نمونه کارها</li></Link>
                   <Link to={'/contact'}><li>تماس با ما</li></Link>
        </ul>
      </div>
      <div className={style.content_name}>
        <p>
            همایون توسلی زاده
        </p>
      </div>
    </section>
  )
}
