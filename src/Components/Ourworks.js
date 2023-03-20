import React from 'react'
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SecurityIcon from '@mui/icons-material/Security'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import aboutImage from './aboutImage.png'
import './ourworks.css'
import HubIcon from '@mui/icons-material/Hub';

const Ourworks = () => {
  return (
    <div className='ourworks'>
        <div className='ourworks-header'>
                <h1>Our Works</h1>
                <p>Experience Our Track Record of Success: Exceptional Custom Websites Built for Forward-Thinking Businesses.</p>
        </div>
        <div className='ourworks-section'>
                <div className='image-row'>
                    <div className='image-box'><div className='image-text'>UI/UX Design for Retail Store</div></div>
                    <div className='image-box'><div className='image-text'>E-Commerce Website for Electronic Shop</div></div>
                    <div className='image-box'><div className='image-text'>Web Gaming App</div></div>
                    <div className='image-box'><div className='image-text'>CMS Site for Medical Clinic</div></div>
                </div>
        </div>
    </div>
  )
}

export default Ourworks