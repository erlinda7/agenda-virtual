import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class Login extends Component {

  constructor(props) {

  }
  login = () => {

  };

  render() {
    return (
      <div>
        <Button variant="contained" onClick={this.login}></Button>
      </div>
    )
  }
}

export default Login;