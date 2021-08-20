import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './pages/Login'
import Profile from './pages/Profile';
import Feed from './pages/Feed'

export default function App() {
  const {isAuthenticated, user} = useAuth0();

  return(
    <div className="App">
      <h1>Udacity Header component will be here</h1>
    {isAuthenticated ? (
      <div>
        <Feed userEmail = {user.email}/>
      </div>
    )
    : <Login/>}
    <h4>Udacity Footer component will be here</h4>
  </div>
  )
}

