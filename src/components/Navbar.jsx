import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            JULESTONE
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
              onClick={closeMobileMenu}
              href = "https://www.facebook.com/stone.chris2"
              rel="noreferrer"
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              aria-label='Instagram'
              onClick={closeMobileMenu}
              href = "https://www.instagram.com/setinstone06"
              target="_blank"
              rel="noreferrer"
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              aria-label='Youtube'
              onClick={closeMobileMenu}
              href="https://www.youtube.com/watch?v=AnnOzKM_M2g"
              target="_blank"
              rel="noreferrer"
            >
              <i class='fab fa-youtube' />
            </a>
          </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;