import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { firestoreConnect } from 'react-redux-firebase';
import { startUi } from './ui';

class LoginPhone extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        startUi('#firebaseui');
    }
    login = () => {
        const { firebase } = this.props;
        startUi('#firebaseui');

    };

    render() {
        return (
            <div >
                <div id="recaptcha-container"></div>
                <h1>Iniciar Sesion</h1>
                <div id='firebaseui'></div>
            </div>
        )
    }
}

export default firestoreConnect()(LoginPhone);