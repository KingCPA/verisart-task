import React, { Component } from 'react';
import './Interface.less';

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
        <div className='header'>hello</div>
        <div className='container-1'>
          <div className='box-1'>
            <h3>Box One</h3>
          </div>
          <div className='box-2'>
            <p>ANTHONY LEPORE</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Interface;
