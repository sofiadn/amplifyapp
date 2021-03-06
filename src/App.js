import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}
// This component will scaffold out an entire user authentication flow allowing users to sign up, sign in, 
//reset their password, and confirm sign in for multifactor authentication (MFA).
// We've also used the AmplifySignOut component which will render a Sign Out button.
export default withAuthenticator(App);