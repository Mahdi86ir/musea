import React from 'react'
import './Subscribe.css'

export default function Subscribe() {
  return (
    <section className='sub-section'>
      <div className="form-contianer">
        <div className='content-sub'>
            <p className="iText">Museum news</p>
            <p className='tText'>MUSEUM NEWS</p>
            <p className='normalText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incididunt uter</p>
            <p className='normalText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do se eius temps incididunt ut labore et sa dolore si magna aliqua. Ut enim ad minim veniam, inant quis</p>
        </div>
        <div className='form'>
            <input type="text"  className='inp' placeholder='Name' />
            <input type="email" className='inp' placeholder='E-mail'/>
            <button className='btn2'>Subscribe</button>
        </div>
      </div>
    </section>
  )
}
