import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <section className='contactUs-section'>
      <div className="form-contianer">
        <div className='content-sub'>
            <p className="iText">Get in touch</p>
            <p className='tText'>CONTACT</p>
            <p className='normalText'>673 12 Constitution Lane Massillion, 05765 New York</p>
            <p className='normalText'>781-562-9355, 781-727-6090</p>
            <p className='normalText'>musea@qodeinteractive.com</p>
        </div>
        <div className='form'>
            <textarea className='inp'placeholder='Message'></textarea>
            <div>
              <input type="text"  className='inp' placeholder='Name' />
              <input type="email" className='inp' placeholder='E-mail'/>
            </div>
            <button className='btn2'>Subscribe</button>
        </div>
      </div>
    </section>
  )
}
