import React, { Component } from 'react';
import './Login.less';



class Login extends Component {
  render() {
    return (
      <div className='login-container'>
      <div className='login-box'>
      <form className='form'>
      <h3>LOG IN</h3>
        <label>Email address</label>
        <input type='email' name='username'/>
        <label>Password</label>
        <input type='password' name='userpassword'/>
        <button>LOGIN</button>
        <p className='forgot'>Forgot Password</p>
      </form>
      </div>
      </div>
    );
  }
}

export default Login;
