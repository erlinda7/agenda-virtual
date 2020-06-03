import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { firestoreConnect } from 'react-redux-firebase';
import { startUi} from './ui';

class LoginPhone extends Component {

    constructor(props) {
        super(props);
    }

    login = () => {
        const { firebase } = this.props;
        // let applicationVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        //     size: 'invisible',
        // });

        // let provider = new firebase.auth.PhoneAuthProvider();
        // provider.verifyPhoneNumber('+59176457459', applicationVerifier)
        //     .then(function (verificationId) {
        //         var verificationCode = window.prompt('Please enter the verification ' +
        //             'code that was sent to your mobile device.');
        //         return firebase.auth.PhoneAuthProvider.credential(verificationId,
        //             verificationCode);
        //     })
        //     .then(function (phoneCredential) {
        //         return firebase.auth().signInWithCredential(phoneCredential);
        //     });
        startUi('#firebaseui');

    };

    render() {
        return (
            <div >
                <div id="recaptcha-container"></div>

                <Button variant="contained" onClick={() => this.login()}>Iniciar Sesion con numero de telefono </Button>
                <div id='firebaseui'>

                </div>
            </div>
        )
    }
}

export default firestoreConnect()(LoginPhone);