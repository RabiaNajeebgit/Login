import React, { useState,createContext, } from 'react';
import Loginform from './Loginform';
import yapLogo from'../../assets/logo.png';
 import classes from './Login.module.css';
 import Cards from '../../UI/card/Cards';
//  import Snackbar from '@mui/material/Snackbar';
 import Home from '../Home/Home';
 const userLoginData=
 [
    {
     userName: 'Rabia@najeeb.com',
      pass: 'rabbit123'
    }
 ]
 const loginUserIdentifier= createContext();

const Login=()=>{
    const [IsLoggedIn,setLoggedIn]=useState(false);
    const onsaveDataLogin=(logindata)=>
 {
    if(logindata.userName===userLoginData[0].userName && logindata.pass===userLoginData[0].pass)
    {
         setLoggedIn(true);
    }
    else
    {
         setLoggedIn(false);
    
    }
    
 } 
    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
    return ( 
    <> 
    { IsLoggedIn=== false ? <> <Cards>
        <img src={yapLogo} alt='Yap logo' className={classes['logo-image']}></img>
        <p className={classes.paragrah}><h2>Admin portal</h2></p> 
        <Loginform onSaveDataLoginHandler={onsaveDataLogin}></Loginform>
       </Cards> <div className={classes.marginleft}>
      <p>Current date : {date}</p>
      </div> </>: 
      <loginUserIdentifier.Provider value={IsLoggedIn}>
         <Home></Home>
      </loginUserIdentifier.Provider>
    }
      </>
)
}
export default Login;
export{loginUserIdentifier};