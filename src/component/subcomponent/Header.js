import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
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
       float:"right",
       margin:"18px 60px 0px 0px"
       
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
   
        

    }

    return (
        <div style={style.newsHeader}>
        <span style={style.header}>  News Time  </span>
      {   !true   && <div className="AuthHandler"  style={{display:"inline-block",color:"white",position:"absolute",right:"170px",marginTop:"23px",fontSize:"19px",fontWeight:"bold"}}>
         <span style={{display:"inline-block",marginRight:"30px"}}> Sign Up  </span>
         <span> Log In </span>
        </div> }
        { true &&  <FontAwesomeIcon icon={faUserTie}  style={style.icon}/> }
        </div>
    )
}

export default Header
