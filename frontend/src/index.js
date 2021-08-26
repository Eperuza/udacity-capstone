import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from "@auth0/auth0-react"
import {BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Auth0Provider
    domain = "dev-1zi1u3q1.us.auth0.com"
    clientId = "hDln45x6pETyxhUvXTJxXOrz0U6cGZMb"
    redirectUri = {window.location.origin}
  >
    <Router>
      <App /> 
    </Router>
  </Auth0Provider> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
