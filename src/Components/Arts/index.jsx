import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import Art from '../Art'
export default function Arts({ imgsContainer }) {
  const [clicked , setClicked] = useState(false)
  const [clickedImg , setClickedImg] = useState("")
  const showImage = (src) => {
    setClickedImg(src)
  }

  const closeImg = () => {
    setClicked(false)
    setClickedImg("")
  }

  useEffect(() => {
    if(clickedImg){
      setClicked(true)
    }
  },[clickedImg])
  return (
    <section className={style.arts_container}>
        <div className={style.content}>
          {
            imgsContainer.map(item => <Art clickFunc={showImage} key={item} imgSrc={item} />)
          }
        </div>
        {
          clicked && 
          <div className={style.image_panel}>
            <div>
              <button type="button" onClick={closeImg}>
                <i className='bx bx-x'></i>
              </button>
            </div>
            <img src={clickedImg} alt="" />
          </div>
        }
    </section>
  )
}
