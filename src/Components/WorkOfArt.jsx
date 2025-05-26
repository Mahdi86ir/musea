import React from 'react'
import './WorkOfArt.css'

export default function WorkOfArt() {
  return (
    <section className='workOfArt'>
      <div className='content-contianer-WOA'>
        <div className='content-WOA'>
            <span>
                <p className='iText'>The Museum archive</p>
                <p className='title'>WORK OF ART</p>
            </span>
            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incididunt ut labore et dolore</p>
            <p className='p2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do se eiusmod temps incididunt ut labore et sa dolore si magna aliqua. Ut enim ad minim veniam, inant quis nostrud e exercitation ullamco laboris nisi ut sen aliquip ex ea commodo insa consequat duis aute</p>
            <button type="button" className='btn2'>view more</button>
        </div>
      </div>
      <div className='bgImg-container'>
      </div>
    </section>
  )
}
