import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import {IsAuthentication} from '../../firebase/config'
import {Link} from 'react-router-dom'
import '../../Style/header.css'
import menu from '../../menu1.svg'


const Check = () =>{
     

   if(window.innerWidth <=900)
   
   {
        if(document.getElementsByClassName('sidebar')[0]!=undefined)
        {
            document.getElementsByClassName('sidebar')[0].classList.add('disappear')
            document.getElementsByClassName('sidebar')[0].classList.remove('appear')
            document.getElementsByClassName('menu')[0].classList.add('appear')
            document.getElementsByClassName('menu')[0].classList.remove('disappear')
            document.getElementsByClassName('sidebar')[0].style.zIndex=999
           } 
   
   }
   
   else if(document.getElementsByClassName('menu')[0]!=undefined){
   
   document.getElementsByClassName('menu')[0].classList.remove('appear')
   document.getElementsByClassName('menu')[0].classList.add('disappear')
   document.getElementsByClassName('sidebar')[0].classList.add('appear')
   document.getElementsByClassName('sidebar')[0].classList.remove('disappear')
   }
   
   }

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
            Link:{
               color:"white",textDecoration:"none"
            }
                
    }



    const [IsAuth,setAuth] = useState(null)

IsAuthentication().then(result=>{

     setAuth(true)
    }).catch(err=>{
        setAuth(false)
    })

     useEffect(() => {
  
      Check();
              document.getElementsByClassName('menu')[0].addEventListener('click',()=>{
            document.getElementsByClassName('sidebar')[0].classList.toggle('disappear')
            document.getElementsByClassName('sidebar')[0].classList.toggle('appear')
                      
         },false)
         window.onresize =()=>{
            Check()
        }
        
     
     }, [])
   


    return (
       <>
        <div  className="newsHeader">
     <div className="menu" >   <img src={menu}  alt="menu"/></div> 
        <span >  News Time  </span>
     { IsAuth!=null &&  !IsAuth  && <div className="AuthHandler">
         <span style={{display:"inline-block",marginRight:"30px"}}> <Link to='/signup' style={style.Link}>   Sign Up </Link> </span>
         <span><Link to='/login' style={style.Link}>  Log In </Link></span>
        </div> }
        { IsAuth && ( <div className="logoutHandler"> <Link style={style.Link} to='/logout'> Sign out </Link>  <FontAwesomeIcon icon={faUserTie}  style={style.icon}/> </div>)}
        </div>
    </>)
}

export default Header
