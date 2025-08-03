import React from 'react'
import style from './style.module.css'

export default function Footer() {
  return (
    <section className={style.footer_container}>
      <div className={style.content_socials}>
        <h3>شبکه های اجتماعی ما</h3>
        <div>
            <i className='bx bxl-whatsapp'></i>
            <i className='bx bxl-instagram'></i>
            <i className='bx bxs-phone'></i>
        </div>
      </div>
      <div className={style.content_pages}>
        <ul>
            <li>صفحه اصلی</li>
            <li>درباره ما</li>
            <li>نمونه کار</li>
            <li>تماس با ما</li>
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
