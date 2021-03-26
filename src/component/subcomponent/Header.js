import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import {IsAuthentication} from '../../firebase/config'
import {Link} from 'react-router-dom'
const Header = () => {

    const style ={
  
          header :{

             color:"white",
             textTransform:"capitalize",
             fontSize:"20px",
             paddingTop:"23px",
             letterSpacing:"2px",
             marginTop:"15px !important",
             display:"inline-block"
     
          },
       icon:{
       color:"white",
       fontSize:"40px",
       marginLeft:"40px"
       }
       ,
       newsHeader:{
        textAlign: "center",
        height: "80px",
        gridColumn: "1/6",
        gridRow: "1",
        backgroundColor: "#3d3d3d",
       position: "fixed",
       width: "100%",
       zIndex:"3"
       
       }     
           ,
           logoutHandler:{
              display:"flex",
               flexWrap:"wrap",
               alignItems:"flex-start",
               justifyContent:"flex-end",
               fontWeight:"bold",
               letterSpacing:"2px",
               position:"absolute",
               right:"50px",
               top:"20px",
             textAlign:"right",
             color:"white !important",
             textDecoration:"none",
             lineHeight:"2"
            }
            ,
            Link:{
               color:"white",textDecoration:"none"
            }
                
    }



    const [IsAuth,setAuth] = useState(null)

IsAuthentication().then(result=>{

     console.log("AUTHENTICATED SUCCeSSFUL",IsAuth);
     setAuth(true)
    }).catch(err=>{
        setAuth(false)
        console.log("unsuccess");
    })


    return (
       <>
        <div style={style.newsHeader}>
        <span style={style.header}>  News Time  </span>
     { IsAuth!=null &&  !IsAuth  && <div className="AuthHandler"  style={{display:"inline-block",color:"white",position:"absolute",right:"160px",marginTop:"23px",fontSize:"19px",fontWeight:"bold"}}>
         <span style={{display:"inline-block",marginRight:"30px"}}> <Link to='/signup' style={style.Link}>   Sign Up </Link> </span>
         <span><Link to='/login' style={style.Link}>  Log In </Link></span>
        </div> }
        { IsAuth && ( <div style={style.logoutHandler}><Link style={style.Link} to='/logout'> Sign out </Link>  <FontAwesomeIcon icon={faUserTie}  style={style.icon}/> </div>)}
        </div>
    </>)
}

export default Header
