import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
  <header>
    <div className='container'>
      <div className='nav'>
        <div className='nav-items'>
          <h1 className='nav-title'>Can I Wear a Hoodie Today?</h1>
          <a href='https://github.com/shaerins' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faCode} /></a>
        </div>
      </div >
    </div>
  </header>
);

export default Header;
