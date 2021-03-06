import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './pages/Login'
import Feed from './pages/Feed'
import Header from './components/Header';
import Footer from './components/Footer';
import CreatePostForm from './pages/CreatePostForm';
import {Switch, Route} from 'react-router-dom'
import EditPostForm from './pages/EditPostForm';

export default function App() {
  const {isAuthenticated, user} = useAuth0();

  return(
    <div className="App">
      <Header/>
      {isAuthenticated 
      ? 
      (
      <Switch>
        <Route exact path = "/">
           <Feed userEmail = {user.email}/>
        </Route>

        <Route exact path = "/createPost">
          <CreatePostForm userEmail = {user.email}/>
        </Route>

        <Route path = '/editPost/:id' component = {({match}) => (
          <EditPostForm match = {match}/>
        )}
        >
        </Route>
      </Switch>
      )
      : <Login/>
      }
    <Footer/>
  </div>
  )
}

