import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCloudSun } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
  <header>
    <div className='nav'>
      <div className='nav-items'>
        <h1 className='nav-title'><FontAwesomeIcon className='nav-title_icon' icon={faCloudSun} />Can I Wear a Hoodie Today?</h1>
        <a href='https://github.com/shaerins' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faCode} /></a>
      </div>
    </div>
  </header>
);

export default Header;
