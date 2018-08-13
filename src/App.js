import React, { Component } from 'react';
import './App.less';
import Interface from './Interface/Interface';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Interface />
        <Footer />
        </div>
      

    );
  }
}

export default App;
