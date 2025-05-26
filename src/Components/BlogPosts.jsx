import React from 'react'
import './BlogPosts.css'

export default function BlogPosts() {
  return (
    <section className='blogPost-section'>
      <div className='allPost-contianer'>
        <div className='post-header'>
            <p className='iText'>Museum news</p>
            <p className='tText'>LATEST BLOG POSTS</p>
        </div>
        <div className='post-container'>
            <div className='post'>
                <div className='img-container'>
                    <img src="/assets/item4.jpg" alt="" />
                </div>
                <div className='post-content'>
                    <div className='post-title'>
                        <p className="iText">September 15, 2019</p>
                        <p className="tText">NOVEMBER IN THE MUSEUM</p>
                    </div>
                    <p className='normalText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam qui</p>
                    <p className='moreBtn'>Read More</p>
                </div>
            </div>
            <div className='post'>
                <div className='img-container'>
                    <img src="/assets/item5.jpg" alt="" />
                </div>
                <div className='post-content'>
                    <div className='post-title'>
                        <p className="iText">September 15, 2019</p>
                        <p className="tText">NOVEMBER IN THE MUSEUM</p>
                    </div>
                    <p className='normalText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam qui</p>
                    <p className='moreBtn'>Read More</p>
                </div>
            </div>
            <div className='post'>
                <div className='img-container'>
                    <img src="/assets/item6.jpg" alt="" />
                </div>
                <div className='post-content'>
                    <div className='post-title'>
                        <p className="iText">September 15, 2019</p>
                        <p className="tText">NOVEMBER IN THE MUSEUM</p>
                    </div>
                    <p className='normalText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam qui</p>
                    <p className='moreBtn'>Read More</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
