import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router'

export default function OtherWorks() {
  return (
    <section className={style.other_works}>
      <div className={style.content_container}>
        <div>
          <h2>نمونه کارها</h2>
          <p>همایون توسلی زاده،هنرمند، مجسمه ساز و پیکرتراش ایرانی</p>
        </div>
        <Link to='/portfolio'>
          <button type="button" className={style.btn}>
            مشاهده بیشتر
          </button>
        </Link>
      </div>
    </section>
  )
}
