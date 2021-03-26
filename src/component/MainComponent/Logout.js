import React from 'react'
import {Auth} from '../../firebase/config'


const Logout = ()=>{
  Auth.signOut().then(() => {
    // Sign-out successful.
    console.log("sign out");
  }).catch((error) => {
    console.log("error",error);
    // An error happened.
  }) ;

   window.location.href ='/'

    return (<></>)
}

export default Logout
