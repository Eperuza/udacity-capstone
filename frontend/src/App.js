import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './pages/Login'
import Feed from './pages/Feed'
import Header from './components/Header';
import Footer from './components/Footer';
import CreatePostForm from './pages/CreatePostForm';

export default function App() {
  const {isAuthenticated, user} = useAuth0();

  return(
    <div className="App">
      <Header/>
      {isAuthenticated 
      ? 
      (
        <Feed userEmail = {user.email}/>
        
        
      )
      : //<Login/>
      <CreatePostForm/>
      }
    <Footer/>
  </div>
  )
}

