import React, { Component } from 'react';
import './Interface.less';

class Interface extends Component {
  render() {
    return (
      <div className='Image'>
        <div className='header'>
          <div className='header-icon'></div>
          <div className='header-cert'>Certificate</div>
          <div className='header-blockchain'>
          The certificate, provenance data and related cryptographic functions herein are timestamped by the Bitcoin blockchain at 
          00000000000000000022ff211f1bbf05331b79363550aa94cd286c8a1e0136f3</div>
          <div className='time'>August 14th 2018 12:51:22 UTC CONFIRMED</div>
        </div>
        <div className='container-1'>
          <div className='box-1'>
          </div>
          <div className='box-2'>
          </div>
        </div>
        <div className='box-bottom'>
        <p>Detailed provenance for this artwork is currently locked.</p>
        </div>
      </div>
    );
  }
}

export default Interface;
