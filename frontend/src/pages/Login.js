import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

export default function Login() {
  const {loggedIn, setLoggedIn} = useContext(LoginContext)
  return (
    <div>
      <p>Login Component</p>
      <button onClick = {() => setLoggedIn(true)}>Click</button>
    </div>
  )
}
