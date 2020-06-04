import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, IndexRoute } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import LoginGoogle from './pages/Login/LoginGoogle';
import LoginPhone from './pages/Login/LoginPhone';
import Login from './pages/Login/Login';
import Home from './containers/Home';
import VirtualAgenda from './pages/Dashboard/VirtualAgenda';
import Register from './pages/Register/Register';
import Contact from './pages/Dashboard/Contacts/Contact';

class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" render={props => <Login {...props} />} />

            <Route exact path="/dashboard" render={props => <VirtualAgenda {...props}  />} />

            <Route path="/contacts/:id" render={props => <Contact {...props} userId="t4Tjfc1jyio4RMxEAq5y"/>} />

            {/* <Route exact path="/contacts" render={props => <VirtualAgenda {...props}/>} /> */}
          </Switch>
        </BrowserRouter>
      </div >
    );
  }
}

function mapStateToProps(state) {
  return {
    firebase: state.firebase,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(App);
