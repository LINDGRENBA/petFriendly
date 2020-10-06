import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
// import reducer from './reducers/trip-list-reducer';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'; //similar to Provider
import {createFirestoreInstance} from 'redux-firestore';
import firebase from './firebase';

const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  config: {
    userProfile: "users" //states that any data on users will be stored in a collection called users
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}

store.subscribe(() => 
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}> 
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
