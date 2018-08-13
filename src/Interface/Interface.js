import React, { Component } from 'react';
import './Interface.less';
import Nav from '../Nav/Nav';

const Image = require('../Mountains.jpg');
const divStyle = {
  width: '100%',
  height: '1000px',
  backgroundImage: `url(${Image})`,
  backgroundSize: 'cover',
};

class Interface extends Component {
  render() {
    return (
      <div className='Image' style={divStyle}>
        <Nav />
        <div className='header'></div>
        <div className='container-1'>
          <div className='box-1'>
            <h3>Box One</h3>
          </div>
          <div className='box-2'>
            <h3>Box Two</h3>
          </div>
        </div>

      </div>
    );
  }
}

export default Interface;
