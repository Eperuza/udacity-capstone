import {useState} from 'react'
import Login from './pages/Login'
import { LoginContext } from './context/LoginContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="App">
      <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
        {!loggedIn
        ? <h1><Login/></h1>
        : <h1>display this if authenticated</h1>
        }
      </LoginContext.Provider>     
    </div>
  );
}

export default App;
