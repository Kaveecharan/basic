import { useState, useEffect } from 'react'
import './topbar.css'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleMenuItemClick = (itemName, itemPosition) => {
    setActiveItem(itemName);
    window.scrollTo({
      top: itemPosition,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById('home');
      const about = document.getElementById('about');
      const services = document.getElementById('services');
      const ourWork = document.getElementById('ourwork');
      const contact = document.getElementById('contact');

      if (window.scrollY < 600) {
        setActiveItem('home');
      } else if (window.scrollY >= 600 && window.scrollY < 1450) {
        setActiveItem('about');
      } else if (window.scrollY >= 1450 && window.scrollY < 2350) {
        setActiveItem('services');
      } else if (window.scrollY >= 2350 && window.scrollY < 3500) {
        setActiveItem('ourwork');
      } else {
        setActiveItem('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className="navbar">
      <div className="container">
        <div className="topbar-logo">
          <h1>Kodeum</h1>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon style={{color: '#14F0FF',  width: '35px', height: '35px'}}/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul className='topbar-menu'>
          <li
            className={activeItem === 'home' ? 'activeMenu' : ''}
            onClick={() => {
              handleMenuItemClick('home', 0);
            }}
          >
            Home
          </li>
          <li
            className={activeItem === 'about' ? 'activeMenu' : ''}
            onClick={() => {
              handleMenuItemClick('about', 600);
            }}
          >
            About Us
          </li>
          <li
            className={activeItem === 'services' ? 'activeMenu' : ''}
            onClick={() => {
              handleMenuItemClick('services', 1450);
            }}
          >
            Services
          </li>
          <li
            className={activeItem === 'ourwork' ? 'activeMenu' : ''}
            onClick={() => {
              handleMenuItemClick('ourwork', 2350);
            }}
          >
            Our Works
          </li>
          <li
            className={activeItem === 'contact' ? 'activeMenu' : ''}
            onClick={() => {
              handleMenuItemClick('contact', 3500);
            }}
          >
            Contact Us
          </li>
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar