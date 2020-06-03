import firebase from '../../config/firebaseConfig';
import * as firebaseui from 'firebaseui'
let uiConfig = {
    callbacks: {
        signInSuccess: function (currentUser, credential, redirectUrl) {
            console.log(currentUser, credential, redirectUrl);
            // Do something.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            //document.getElementById('loader').style.display = 'none';
        }
    },
    // Query parameter name for mode.
    //signInSuccessUrl: '/',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.

        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        {
            provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            // Invisible reCAPTCHA with image challenge and bottom left badge.
            recaptchaParameters: {
                type: 'image',
                size: 'invisible',
                badge: 'bottomleft'
            }
        }


    ],
};

// export let ui = new firebaseui.auth.AuthUI(firebase.auth());
// // The start method will wait until the DOM is loaded.
// ui.start('#firebaseui-auth-container', uiConfig);

export const startUi = (elementId) => {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start(elementId, uiConfig)
}