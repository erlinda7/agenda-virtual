import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import App from './App';
import firebase from './config/firebaseConfig';
import store from './config/createReduxStore';
import 'bootstrap/dist/css/bootstrap.css';
import { createFirestoreInstance } from 'redux-firestore';


const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  //preserveOnDelete: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>

  </Provider>,
  document.getElementById('root')
);

