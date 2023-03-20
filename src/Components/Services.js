import {useEffect, useState} from 'react'
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SecurityIcon from '@mui/icons-material/Security'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import serviceImage from './serviceImage.png'
import './services.css'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LanguageIcon from '@mui/icons-material/Language';
import StoreIcon from '@mui/icons-material/Store';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import InsightsIcon from '@mui/icons-material/Insights';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Services = () => {

    const [sliderIndex, setIndexSlider] = useState(1)
    const [services, setServices] = useState([
        {icon: <LanguageIcon style={{color: '#14F0FF',  width: '45px', height: '45px'}}/>,
         heading: 'Custom Website Development',
         para: 'Our software development company creates custom websites that cater to businesses looking to expand their online presence. We have expertise in the latest programming languages and frameworks, enabling us to create modern and scalable websites that deliver a competitive edge.'
        },
        {icon: <StoreIcon style={{color: '#14F0FF',  width: '45px', height: '45px'}}/>,
         heading: 'Digital Marketing',
         para: `Our customer-centric approach places our clients' needs at the forefront of everything we do. We work closely with our clients to understand their business objectives, providing affordable pricing, 24/7 maintenance, and support, and high-quality, user-friendly websites that exceed their expectations.`
        },
        {icon: <CloudQueueIcon style={{color: '#14F0FF',  width: '45px', height: '45px'}}/>,
         heading:  `SaaS Products`,
         para: `We stay up-to-date with the latest software development technologies and tools to ensure our clients' websites remain secure and functional. Our cutting-edge technology allows us to create websites that are both modern and scalable, providing our clients with a competitive edge in the online marketplace.`
        },
        {icon: <AppRegistrationIcon style={{color: '#14F0FF',  width: '45px', height: '45px'}}/>,
         heading:  `Apps Development`,
         para: `Our goal is to build long-term relationships with our clients, serving as a trusted partner they can rely on for all their website development needs. We believe in transparency, communication, and collaboration, working closely with our clients throughout the software development process to keep them informed and involved every step of the way.`
        },
        {icon: <LocalFireDepartmentIcon style={{color: '#14F0FF',  width: '45px', height: '45px'}}/>,
         heading:  `SEO Services`,
         para: `Our goal is to build long-term relationships with our clients, serving as a trusted partner they can rely on for all their website development needs. We believe in transparency, communication, and collaboration, working closely with our clients throughout the software development process to keep them informed and involved every step of the way.`
        },
        {icon: <InsightsIcon style={{color: '#14F0FF',  width: '45px', height: '45px'}}/>,
         heading:  `Data Analysis`,
         para: `Our goal is to build long-term relationships with our clients, serving as a trusted partner they can rely on for all their website development needs. We believe in transparency, communication, and collaboration, working closely with our clients throughout the software development process to keep them informed and involved every step of the way.`
        },

    ])

    const prevBtnHandler=()=>{
        { sliderIndex === 0 ? setIndexSlider(5) : setIndexSlider(sliderIndex-1) }
    }

    const nextBtnHandler=()=>{
        { sliderIndex === 5 ? setIndexSlider(0) : setIndexSlider(sliderIndex+1) }
    }

  return (
    <div className='services'>
        <div className='services-header'>
            <div className='services-header-left'>
                <h1>Our Services</h1>
                <p>Enhancing Your Business with Cutting-Edge Software Solutions: Explore Our Comprehensive Suite of Services.</p>
            </div>
            <img className='serviceImage' src={serviceImage}/>
        </div>
        <div className='services-section'>
            <div className='services-left'>
                    <div className='services-li-small'>
                        <div className='about-list-header'>
                            { sliderIndex < 1 ? services[5].icon : services[sliderIndex-1].icon }
                            <p>{ sliderIndex < 1 ? services[5].heading : services[sliderIndex-1].heading }</p>
                        </div>
                        <p className='about-para'>{ sliderIndex < 1 ? services[5].para : services[sliderIndex-1].para }</p>
                    </div>
                    <div className='services-li'>
                        <div className='about-list-header'>
                            {services[sliderIndex].icon}
                            <p>{services[sliderIndex].heading}</p>
                        </div>
                        <p className='about-para'>{services[sliderIndex].para}</p>
                    </div>
                    <div className='services-li-small'>
                        <div className='about-list-header'>
                        { sliderIndex > 4 ? services[0].icon : services[sliderIndex+1].icon }
                            <p> { sliderIndex > 4 ? services[0].heading : services[sliderIndex+1].heading }</p>
                        </div>
                        <p className='about-para'> { sliderIndex > 4 ? services[0].para : services[sliderIndex+1].para }</p>
                    </div>
            </div>
        </div>
        <div className='sliderBTN'>
                <button onClick={prevBtnHandler}><KeyboardArrowLeftIcon style={{color: '#14F0FF',  width: '50px', height: '50px'}}/></button>
                <button onClick={nextBtnHandler}><KeyboardArrowRightIcon style={{color: '#14F0FF',  width: '50px', height: '50px'}}/></button>
            </div>
    </div>
  )
}

export default Services