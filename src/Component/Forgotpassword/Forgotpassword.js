import { useState } from 'react';
import styles from './Forgotpassword.module.css';
const Forgotpassword=(props)=>
{
   
    const [closeModal,setCloseModal]=useState(false);
    const onCloseEvent=()=>
    {
        setCloseModal(true);
        props.setModaltoFalse(closeModal);
    }
    
    return(
    <>
    { props.show ===true  &&
        <div className={styles.modalWrapper}>
        <div className={styles.modal}>
            <button  className={styles.btnClose} onClick={onCloseEvent}>x</button>
            <h3>Feature is comming soon Stay tuned </h3>

        </div>
    </div>
    }
    </>)

}
export default Forgotpassword;