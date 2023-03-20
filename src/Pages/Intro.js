import React from 'react'
import Topbar from '../Components/Topbar'
import video from '../Components/video.mp4'
import introImage from '../Components/introImage.webp'
import './intro.css'

const Intro = () => {
  return (
    <div className='intro'>
        <div className='video-container'>
            <video autoPlay loop muted>
                <source src={video} type="video/mp4" width='100vw'/>
            </video>
            <div className="content">
                <Topbar/>
            </div>
            <div className='inter-content'>
              <div className='intro-left'>
                <p>-IT SOLUTIONS-</p>
                <h2>Providing The Best</h2>
                <h2>Services & IT</h2>
                <h2 className='color-h2'>Solutions</h2>
                <button>Contact Us</button>
              </div>
              <div className='intro-right'>
                <img className='intro-image' src={introImage}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Intro