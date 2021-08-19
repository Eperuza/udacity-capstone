import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './pages/Login'
import Profile from './pages/Profile';

export default function App() {
  const {isAuthenticated} = useAuth0();

  return(
    isAuthenticated ? (
      <div>
        <Profile/>
      </div>
    )
    : <Login/>
  )
}

