import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Login from './pages/Login/Login';
import Home from './containers/Home';
import VirtualAgenda from './pages/Dashboard/VirtualAgenda';
import Contact from './pages/Dashboard/Contacts/Contact';

class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          {
            this.props.auth.isEmpty
              ?
              <Switch>
                <Route exact path="/" render={props => <Home {...props} />} />
                <Route exact path="/login" render={props => <Login {...props} />} />
              </Switch>
              :
              <Switch>
                <Route exact path="/dashboard" render={props => <VirtualAgenda {...props} />} />

                <Route path="/contacts/:id" render={props => <Contact {...props} />} />
              </Switch>
          }
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
