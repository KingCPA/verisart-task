import React, { Component } from 'react';
import './Login.less';

class Login extends Component {
  // constructor() {
//   super();
//   this.state = {
//       TvShow: [],
//       requestFailed: false
//   }
// }

// componentDidMount() {
//   fetch('/rest/shows')
//       .then(response => {
//         if(!response.ok) {
//           throw Error('Cannot retreve data at this time')
//         }
            // return response
// } response.json())
//.then(shows => this.setState({ TvShow: shows }))
// // . () => {
//   this.setState({
//    requestFailed: true 
//   })
// }
// }
  render() {
    // let shows = this.state.TvShow
    // if (this.state.requestFailed) {
      //     return <div><Failed /></div>
      // }
    // if (!shows) {
    //     return <div><Loading /></div>
    // }
    return (
      <div className='login-container'>
        <div className='login-box'>
          <form className='form'>
            <h3>LOG IN</h3>
            <label>Email address</label>
            <input type='email' name='username' />
            <label>Password</label>
            <input type='password' name='userpassword' />
            <button>LOG IN</button>
            <p className='forgot'>Forgot Password</p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
