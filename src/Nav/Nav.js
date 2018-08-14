import React, { Component } from 'react';
import './Nav.less';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
        <nav className='blackNav'>
          <div className='navContainer'>
            <a id='logo' href='/'>
              <img src='https://s3.amazonaws.com/verisart.assets/svg/verisart-wordmark-white-tm.svg' alt='logo' width='205' />
            </a>
            <ul className='navList'>
              <li className='btn-news'><a href='/news'>NEWS</a></li>
              <li className='btn-partners'><a href='/partners'>PARTNERS</a></li>
              <li className='btn-join'><a href='/join'>JOIN</a></li>
              <li className='btn-login'><Link to='/login'>LOGIN</Link></li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Nav;