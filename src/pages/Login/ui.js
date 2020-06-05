import firebase from '../../config/firebaseConfig';
import * as firebaseui from 'firebaseui'
let uiConfig = {
  callbacks: {
    signInSuccess: function (currentUser, credential, redirectUrl) {
      // console.log('currentUser', currentUser);
      // console.log('credential', credential);
      // console.log('redirectUrl', redirectUrl);      
      return true;
    },
    uiShown: function () {
      document.getElementById('loader').style.display = 'none';
    }
  },
  signInFlow: 'popup',
  signInSuccessUrl: '/dashboard',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      recaptchaParameters: {
        type: 'image',
        size: 'invisible',
        badge: 'bottomleft'
      },
      defaultCountry: 'BO',
    }
  ],
};

export const startUi = (elementId) => {
  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start(elementId, uiConfig)
}