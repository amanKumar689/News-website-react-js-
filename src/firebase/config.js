import firebase from 'firebase'
  const Auth = firebase.auth();
  const Googleprovider = new firebase.auth.GoogleAuthProvider()

  function LoginHandler(){

Auth.signInWithPopup(Googleprovider)
.then(result=>{ window.location.href ='/' })
.catch(err=>{console.log("ERROR:",err);}) 
}

function emailAndPassword_SIGN_UP(email,password){


   return new Promise((resolve,reject)=>{

     
       Auth.createUserWithEmailAndPassword(email,password).then(result=>{ resolve(result);window.location.href ='/'  }).catch(error=>{console.log(error);reject(error)})
   })

}
function emailAndPassword_LOG_IN(email,password){

  return new Promise((resolve,reject)=>{


    Auth.signInWithEmailAndPassword(email,password).then(result=>{ resolve(result); window.location.href ='/' }).catch(error=>{console.log(error); reject(error)})

  })


}

const  IsAuthentication=  () =>
{

  return new Promise((resolve,reject)=>
    {

         
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
     
  resolve(user)
   
} else {
  
 reject(user)
  }
} );
     
    })
  }
  export { Auth , Googleprovider , LoginHandler , emailAndPassword_LOG_IN , emailAndPassword_SIGN_UP , IsAuthentication} 