import React ,{useState}from 'react'
import '../../Style/sidebar.css'
import { useParams ,useHistory } from "react-router-dom"
import cross from '../../cross.png'
import {IsAuthentication} from '../../firebase/config'
import {Link} from 'react-router-dom'
const style ={
  
   
      Link:{
         color:"black",textDecoration:"none"
      }
          
}

const Sidebar = (props) => {
    const history =useHistory();
    const params = useParams()


    const RouteHandler =(e)=>{

        props.CategoryHandler(e)
 history.push(`/`)

    }

    const [IsAuth,setAuth] = useState(null)

IsAuthentication().then(result=>{

     setAuth(true)
    }).catch(err=>{
        setAuth(false)
    })

    return (

        <div className="sidebar">
        <img src={cross} alt='cross' className="cross disappear" width="37px" /><br/><br/>
        <ul> 
        <li id="home" className="selected"  onClick={ !params.id ? props.CategoryHandler: (e)=>{ RouteHandler(e) } }> Home </li> 
        <li id="sports" onClick={ !params.id ? props.CategoryHandler: (e)=>{ RouteHandler(e) } }> Sports </li> 
        <li id="entertainment"  onClick={ !params.id ? props.CategoryHandler: (e)=>{ RouteHandler(e) } }> Entertainment </li> 
        <li id="science"  onClick={ !params.id ? props.CategoryHandler: (e)=>{ RouteHandler(e) } }> Education </li> 
        <li id="business" onClick={ !params.id ? props.CategoryHandler: (e)=>{ RouteHandler(e) } }> business </li> 
        <li> 
         
        { IsAuth!=null &&  !IsAuth  && <div className="AuthHandler sidebar_Auth" >
         <span style={{display:"inline-block",marginRight:"30px"}}> <Link to='/signup' style={style.Link}>   Sign Up </Link> </span><br/><br/><br/>
         <span><Link to='/login' style={style.Link}>  Log In </Link></span>
        </div> }

        </li>
        </ul>
            
        </div>
    )
}

export default Sidebar
