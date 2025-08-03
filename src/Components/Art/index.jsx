import React from 'react'
import style from './style.module.css'

export default function Art({imgSrc , clickFunc}) {
  return (
    <div className={style.art_container} onClick={() => clickFunc(imgSrc)}>
      <img src={imgSrc} alt="" />
    </div>
  )
}
