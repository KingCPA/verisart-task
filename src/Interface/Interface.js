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
        <div className='one'>One</div>
        <div class="wrapper">
          <div class="box sidebar">Sidebar</div>
          <div class="box content">Content
    <br /> More content than we had before so this column is now quite tall.</div>
          <div class="box footer">Footer</div>
        </div>
      </div>
    );
  }
}

export default Interface;
