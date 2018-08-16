import React, { Component } from 'react';
import './Interface.less';

class Interface extends Component {
  render() {
    return (
      <div className='maincontainer'>
        <div className='image'></div>
        <div className='header'>
          <div className='header-icon'></div>
          <div className='header-cert'>Certificate</div>
          <div className='header-blockchain'>
            The certificate, provenance data and related cryptographic
            functions herein are timestamped by the Bitcoin blockchain at
          00000000000000000022ff211f1bbf05331b79363550aa94cd286c8a1e0136f3</div>
          <div className='time'>August 14th 2018 12:51:22 UTC <span>confirmed</span></div>
        </div>
        <div className='container-1'>
          <div className='box-1'>
          </div>
          <div className='box-2'>
            <div className='container-box'>
              <div className='key'>
                <li>Title</li>
              </div>
              <div className='value'>
                <li>NIGHTFALL</li>
              </div>
            </div>
            <div className='container-box'>
              <div className='key'>
                <li>Production Date</li>
              </div>
              <div className='value'>
                <li>2011</li>
              </div>
            </div>
            <div className='container-box'>
              <div className='key'>
                <li>Edition</li>
              </div>
              <div className='value'>
                <li>2</li>
              </div>
            </div>
            <div className='container-box'>
              <div className='key'>
                <li>Volume</li>
              </div>
              <div className='value'>
                <li>5</li>
              </div>
            </div>
            <div className='container-box'>
              <div className='key'>
                <li>Medium</li>
              </div>
              <div className='value'>
                <li>ARCHIVAL PIGMENT PRINT IN ARTIST'S FRAME</li>
              </div>
            </div>
            <div className='container-box'>
              <div className='key'>
                <li>Dimensions (H x W)</li>
              </div>
              <div className='value'>
                <li>40 X 50 INCHES</li>
              </div>
            </div>
            <div className='container-box'>
              <div className='key'>
                <li>Current Owner Key</li>
              </div>
              <div className='value'>
                <li>00000000000000000000000000000000000000000000000</li>
              </div>
            </div>
            <div className='container-box'>
              <div className='key'>
                <li>URL</li>
              </div>
              <div className='value'>
                <li>https://www.verisart.com/works/000000000000000000000</li>
              </div>
            </div>
            <div className='container-box'>
              <div className='key'>
                <li>Blockchain Address</li>
              </div>
              <div className='value'>
                <li>0000000000011122222cccrwecdjafo45342vdsvece7889876543</li>
              </div>
            </div>
            <p className='verified'>Verified by Verisart</p>
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
