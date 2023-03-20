import React, { useEffect, useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import emailjs from 'emailjs-com';
import './contactus.css';

const Contactus = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [invalidInputs, setInvalidInputs] = useState(true)


  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields');
      return;
    }

    if (message.length > 500) {
      alert('Message should be less than 500 characters');
      return;
    }

    const templateParams = {
      from_name: email,
      from_email: email,
      to_email: 'kaveecharan26@gmail.com',
      message: message,
    };

    emailjs.send("service_z815tdp","template_xp4lgk9", templateParams, 'fHmzN6s5fMxlwwkdS')
      .then((result) => {
        alert('Your message has been sent successfully');
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        alert('There was an error sending your message. Please try again later');
      });
  };

  useEffect(()=>{
    if (name === '' || email === '' || message === '') {
        setInvalidInputs(true);
      }
      else{setInvalidInputs(false)}
  }, [email, name, message])

  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <div className='contact-section'>
        <form className='contact-form' onSubmit={handleSubmit}>
          <p>Fill in and send the form below with regard to your inquiries.</p>
          <input maxLength={25} type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
          <input type='email' placeholder='Email Id' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <textarea placeholder='Message' maxLength='300' value={message} onChange={(e) => setMessage(e.target.value)} required />
          <button disabled={invalidInputs} type='submit'>Send</button>
        </form>
        <div className='contact-details'>
          <p>14, St Peter Street, Jaffna, Sri Lanka</p>
          <p>+94752705115</p>
          <p>info@kodeum.com</p>
          <div className='contact-sm'>
            <LinkedInIcon style={{ color: '#14F0FF', width: '35px', height: '35px', marginRight: '20px', cursor: 'pointer' }} />
            <TwitterIcon style={{ color: '#14F0FF', width: '35px', height: '35px', marginRight: '20px', cursor: 'pointer' }} />
            <LanguageIcon style={{ color: '#14F0FF', width: '35px', height: '35px', marginRight: '20px', cursor: 'pointer' }} onClick={()=>window.scrollTo({top: 0, behavior: "smooth"})} />
          </div>
        </div>
      </div>
      <p className='contactus-cc'>© Copyright 2023 Kodeum. All Rights Reserved.
      </p>
    </div>
  )
}

export default Contactus