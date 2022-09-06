import React, { useState } from 'react';
import classes from './Navigation.module.css';
import Login from '../Login/Login';
const Navigation = (props) => {
 const[logOut,SetLoggedout]=useState(props.valuetoDirecttheNavigation);
  const onLogoutHandler=(event)=>
  {
    event.preventDefault();
    SetLoggedout(false);
  }
  return (
    <>
      { props.valuetoDirecttheNavigation ===true && logOut=== true?<>
        <h1>Welcome to YAP Admin System</h1>
      <nav className={classes.nav}>
      <ul>
          <li>
            <button  onClick={onLogoutHandler}>Logout</button>
          </li>
      </ul>
    </nav> 
      </> : <Login></Login>}
   
    </>
  );
};

export default Navigation;