import React, { Component } from 'react';
import './Nav.less';

class Nav extends Component {
  render() {
    return (
      <div className='container'>
        <nav className='blackNav'>
          <div className='navContainer'>
            <a id='logo' href='/'>
              <img src='https://s3.amazonaws.com/verisart.assets/svg/verisart-wordmark-white-tm.svg' alt='logo' width='205' />
            </a>
            <ul className='navList'>
              <li className='btn-news'><a href='/news'>NEWS</a></li>
              <li className='btn-partners'><a href='/partners'>PARTNERS</a></li>
              <li className='btn-join'><a href='/join'>JOIN</a></li>
              <li className='btn-login'><a href='/login'>lOGIN</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;