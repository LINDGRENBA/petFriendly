import React from 'react';
import firebase from 'firebase/app';

function Signin() {

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("Successfully signed up!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
      console.log("Successfully signed in!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
      <h3>Register</h3>
      <form onSubmit={doSignUp}>
        <label>Email (this will be your username)</label>
        <input
          type="text"
          name="email"
          placeholder="Email"/>
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"/>
          <button type="submit">Sign up</button>
      </form>

      <h3>Sign In</h3>
      <form onSubmit={doSignIn}>
        <label>Email</label>
        <input
          type="text"
          name="signInEmail"
          placeholder="Email"/>
        <label>Password</label>
        <input
          type="password"
          name="signInPassword"
          placeholder="Password"/>
          <button type="submit">Sign up</button>
      </form>

      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign out</button>
    </React.Fragment>
  );
}

export default Signin;