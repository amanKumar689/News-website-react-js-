import React ,{useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import  Button from '@material-ui/core/Button'
import { FormLabel } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import GoogleIcon from '../../google-icon.svg'
import {LoginHandler , emailAndPassword_SIGN_UP } from '../../firebase/config'
import LoadingSvg  from '../../Loading.svg'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '80%',
    },
    
  },
 
   form:{
  
     border:"2px solid red",
     margin:"auto",
     marginTop:"80px",
     width:"500px",
     padding:"50px 40px 50px 40px",
     display:"flex",
     flexWrap:"wrap",
     flexDirection:"column",
     justifyContent:"space-evenly",
   alignContent:"center"
   } ,

   input:{
        marginBottom:"25px"
    },
     
    label:{
        fontSize:"30px !important"
    },
    alert:{
        width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },


    } 
   
}));


const Signup = () => {

  

    
    const classes = useStyles()
    const [open, setOpen] = React.useState(true);
    const [email,setEmail] =useState()
    const [password,setPassword] =useState()
    const [Confirmpassword,setconfirmPassword] =useState()
    const [MSG,setMessage] =useState('Welcome')
    const [Loading ,setLoading] = useState(false)

    
    useEffect(() => {
      setOpen(true)
     }, [MSG])
     
const SignUp = () =>{


  // setOpen(false)
  setLoading(true)
 
 
 if(password!=Confirmpassword)
 {

  setMessage('Password do not match')
  setOpen(true)
  setLoading(false)
 
 }
 else if(email!= null && password!=null && Confirmpassword!= null)
 {  
   
  emailAndPassword_SIGN_UP(email,password)
  .then( )
  .catch(err=>{setMessage(err.message);setLoading(false);setOpen(true)})  
  }
  else
  { 
   setMessage('Fill up details')
   setOpen(true)
   setLoading(false)
 }

}
     

    return (
        <div className="Signup">
          <form className={classes.root + ' ' + classes.form}    noValidate autoComplete="off">
          <FormLabel className={classes.label}> Sign up</FormLabel>
          <Collapse in={open}>
          <Alert onClose={() => { setOpen(false) }}>{MSG}</Alert>
           </Collapse>
      <TextField id="standard-basic" label="Email" className={classes.input} onChange={(e)=>{setEmail(e.target.value)}}/>
     <TextField id="outline-basic" label="Password" className={classes.input} onChange={(e)=>{setPassword(e.target.value)}}/>
  <TextField id="outlined-basic" label="confirm password" className={classes.input} onChange={(e)=>{setconfirmPassword(e.target.value)}}/><br/>   
  { !Loading ? <Button  color="primary" variant="contained" onClick={(e)=>{SignUp()}}> Sign Up</Button> 
  : <div style={{paddingLeft:"30%"}}>  <img src={LoadingSvg} alt="Loading.." srcset=""  style={{width:"80px"}} /> </div> } 
  <span>   New User  ? <Link to='/login' style={{flex:"1.1"}} >Log in</Link> </span> <br/>
  <div className="Googleprovider" style={{display:"flex",justifyContent:"space-evenly"}}> 
   <img src={GoogleIcon} alt="GoogleSignIn" width="40px" style={{cursor:"pointer"}} onClick={()=>{LoginHandler()}}/>
  </div>
   </form>

        </div>
    )
}

export default Signup
