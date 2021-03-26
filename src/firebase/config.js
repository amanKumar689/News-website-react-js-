import firebase from 'firebase'
// import Auth from 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyBf6Z1R_M_QZGqF7JGX5DLDOZrqJCKDgxA",
    authDomain: "authentication-a8d00.firebaseapp.com",
    projectId: "authentication-a8d00",
    storageBucket: "authentication-a8d00.appspot.com",
    messagingSenderId: "595505289575",
    appId: "1:595505289575:web:38b9a49a89416a1404b7c2"
  };
  // Initialize Firebase  
  firebase.initializeApp(firebaseConfig);
  const Auth = firebase.auth();
  const Googleprovider = new firebase.auth.GoogleAuthProvider()

  function LoginHandler(){

Auth.signInWithPopup(Googleprovider)
.then(result=>{ console.log(result); window.location.href ='/' })
.catch(err=>{console.log("ERROR:",err);}) 
}

function emailAndPassword_SIGN_UP(email,password){

  Auth.createUserWithEmailAndPassword(email,password).then(result=>{ console.log(result);  }).catch(error=>{console.log(error);})

}
function emailAndPassword_LOG_IN(email,password){

  Auth.signInWithEmailAndPassword(email,password).then(result=>{ console.log(result);  }).catch(error=>{console.log(error);})

}

const  IsAuthentication=  () =>
{

  return new Promise((resolve,reject)=>
    {

         
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
     
  resolve(user)
  console.log("user is present");
  
} else {
  
  console.log("user is not present");
 reject(user)
  }
} );
     
    })
  }
  export { Auth , Googleprovider , LoginHandler , emailAndPassword_LOG_IN , emailAndPassword_SIGN_UP , IsAuthentication} 