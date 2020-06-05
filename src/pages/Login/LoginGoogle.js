import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { firestoreConnect } from 'react-redux-firebase';


class LoginGoogle extends Component {

  constructor(props) {
    super(props);
  }

  login = () => {
    
    let provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup(provider).then(result => {
      console.log(result);
    })
  };

  render() {
    return (
      <div>
        <Button variant="contained" onClick={() => this.login()}>Iniciar Sesion </Button>
      </div>
    )
  }
}

export default firestoreConnect()(LoginGoogle);