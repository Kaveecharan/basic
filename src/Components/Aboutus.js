import React from 'react'
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SecurityIcon from '@mui/icons-material/Security'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import aboutImage from './aboutImage.png'
import './aboutus.css'

const Aboutus = () => {
  return (
    <div className='about-us'>
        <div className='about-us-header'>
            <h1>About Us</h1>
            <img className='about-us-image' src={aboutImage}/>
        </div>
        <div className='about-us-section'>
            <div className='about-us-left'>
                <h1>We Empower Businesses with Modern Web Solutions</h1>
                <ul className='about-us-ul'>
                    <div className='about-us-li'>
                        <div className='about-list-header'>
                            <PhonelinkIcon style={{color: '#14F0FF',  width: '45px', height: '45px'}}/>
                            <p>Custom Website Development</p>
                        </div>
                        <p className='about-para'>Our software development company creates custom websites that cater to businesses looking to expand their online presence. We have expertise in the latest programming languages and frameworks, enabling us to create modern and scalable websites that deliver a competitive edge.</p>
                    </div>
                    <div className='about-us-li'>
                        <div className='about-list-header'>
                            <SupportAgentIcon style={{color: '#14F0FF',  width: '45px', height: '45px'}}/>
                            <p>24/7 Support</p>
                        </div>
                        <p className='about-para'>Our customer-centric approach places our clients' needs at the forefront of everything we do. We work closely with our clients to understand their business objectives, providing affordable pricing, 24/7 maintenance, and support, and high-quality, user-friendly websites that exceed their expectations.</p>
                    </div>
                    <div className='about-us-li'>
                        <div className='about-list-header'>
                            <SecurityIcon style={{color: '#14F0FF',  width: '45px', height: '45px'}}/>
                            <p>Latest Technology & Security</p>
                        </div>
                        <p className='about-para'>We stay up-to-date with the latest software development technologies and tools to ensure our clients' websites remain secure and functional. Our cutting-edge technology allows us to create websites that are both modern and scalable, providing our clients with a competitive edge in the online marketplace.</p>
                    </div>
                    <div className='about-us-li'>
                        <div className='about-list-header'>
                            <WorkspacePremiumIcon style={{color: '#14F0FF',  width: '45px', height: '45px'}}/>
                            <p>Trusted Website Development Partner</p>
                        </div>
                        <p className='about-para'>Our goal is to build long-term relationships with our clients, serving as a trusted partner they can rely on for all their website development needs. We believe in transparency, communication, and collaboration, working closely with our clients throughout the software development process to keep them informed and involved every step of the way.</p>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Aboutus