import React, { useState, useEffect } from 'react';
import styles from './Loginform.module.css';
import Forgotpassword from '../Forgotpassword/Forgotpassword';
const Loginform = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formVaildDate, checkVaildDate] = useState(false);
  const [showModal,setShowModal] =useState(false);
  useEffect(() => {
    if (email.includes('@') && password.length > 6) {
      checkVaildDate(true)

    } 
    else  {
      checkVaildDate(false)

    }
  }, [email, password]);
  const fetchUsername = (event) => {
    setEmail(event.target.value);
    
  }
  const fetchPassword = (event) => {
    setPassword(event.target.value);
  }
  const onSubmittedLoginHandler = (event) => {
    event.preventDefault();
    
    const loginData =
    {
      userName: email,
      pass: password
    }
    props.onSaveDataLoginHandler(loginData);
    setEmail('');
    setPassword('');
  }
  const showModalHandler=()=>
  {
    setShowModal(true);
  }
  const modalClose=()=>{
    setShowModal(false);
  }

  return (
    <form className={styles.fromLignment} onSubmit={onSubmittedLoginHandler}>
      <div >
        <label for="staticEmail" className={styles.label}>userName</label>
        <div >
          <input type="text" className={styles.input} id="staticEmail"
            onChange={fetchUsername} value={email}></input>

        </div>
      </div>
      <br></br>
      <div>
        <label for="inputPassword" className={styles.label} >Password</label>
        <div >
          <input type="password" className={styles.input} id="inputPassword" value={password} onChange={fetchPassword}></input>
        </div>
      </div>
      {/* <div className={styles['eye-margin']}>
        <button className={styles['eye-button']}><i class="fa fa-eye" aria-hidden="true"></i></button>
      </div> */}
      { formVaildDate ? <div className={styles.buttons}>
      { formVaildDate === true && 
        <button type="submit"><b>Login</b></button>
      }
  
      </div> :  <div className={styles.disabled}>
      { formVaildDate === false && 
        <button disabled={true}><b>Login</b></button>
      }
      </div>
      }
      
      <div className="forgot">
        <p>Forgot your password? <button  onClick={showModalHandler}>Reset Password</button></p>
      </div>
      {showModal===true &&<Forgotpassword show={showModal} setModaltoFalse={modalClose}></Forgotpassword>}
    </form>)

}
export default Loginform;