import React from 'react'
import style from './style.module.css'

export default function Honors() {
  return (
    <section className={style.honors_container}>
      <div className={style.honors}>
        <div className={style.green_line}></div>
        <div className={style.content_container}>
            <div className={style.contact_me}>
                <p>
                    راه های ارتباطی با ما
                </p>
                <div>
                                  <button type="button" className={`${style.btn} ${style.sm}`}>
                    واتساپ
                </button>
                <button type="button" className={`${style.btn} ${style.md}`}>
                    اینستاگرام
                </button>
                <button type="button" className={`${style.btn} ${style.lg}`}>
                    تماس مستقیم
                </button>
                </div>
            </div>
            <div className={style.honors_content}>
                <div className={style.line}>

                </div>
                <p className={style.title_h}> 
                    افتخارات
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, minus!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, minus!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, minus!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, minus!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, minus!</p>
            </div>
            <img className={style.personal_img} src="/assets/images/Artist.png" alt="" />
        </div>
      </div>
    </section>
  )
}
