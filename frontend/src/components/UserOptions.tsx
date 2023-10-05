import React from 'react'
import classes from './UserOptions.module.css'
import { useNavigate } from 'react-router-dom'

export default function () {
  const isLoggedIn = !!localStorage.getItem('username')
  const username = isLoggedIn ? localStorage.getItem('username') : "Guest" 
  const isSignOut = isLoggedIn ? "Sign out" : "Sign in"
  const navigate = useNavigate()

  const signHandler = () => {
    if (isLoggedIn) {
      localStorage.setItem('username', '');
      localStorage.setItem('userId', '');
      navigate("/")
    }
    else
      navigate("/login")
  }

  const showUserHandler = () => {
    if (isLoggedIn)
      navigate("users/" + username);
  }

  return (
    <div className={classes.container} >
      <button onClick={showUserHandler} className={classes.btn} >{username}</button>
      {isLoggedIn && <button className={classes.btn}>Edit Profile</button>}
      <button onClick={signHandler} className={classes.btn}>{isSignOut}</button>
    </div>
  )
}
