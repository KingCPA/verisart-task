import React, { Component } from 'react';
import './App.less';
import { Route, Switch, withRouter } from 'react-router-dom';
import Interface from './Interface/Interface';
import Login from './Login/Login';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';


class App extends Component {
  render() {
    return (

      <div className="App">
        <Nav />
        <Switch>
          <Route exact={true} path="/" component={Interface} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
