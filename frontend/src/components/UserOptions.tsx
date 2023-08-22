import React from 'react'
import classes from './UserOptions.module.css'
import UserContext from './UserContext'
import {useContext} from 'react'

export default function () {
  const userData = useContext(UserContext)
  const isLoggedIn = !!userData?.username
  const username = isLoggedIn ? userData.username : "Guest" 
  const isSignOut = isLoggedIn ? "Sign out" : "Sign in"

  return (
    <div className={classes.container} >
      <button className={classes.btn} >{username}</button>
      {isLoggedIn && <button className={classes.btn}>Edit Profile</button>}
      <button className={classes.btn}>{isSignOut}</button>
    </div>
  )
}
