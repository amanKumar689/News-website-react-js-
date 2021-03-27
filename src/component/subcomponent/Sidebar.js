import React from 'react'
import '../../Style/sidebar.css'
import { useParams ,useHistory } from "react-router-dom"
const Sidebar = (props) => {
    const history =useHistory();
    const params = useParams()


    const RouteHandler =(e)=>{

        props.CategoryHandler(e)
 history.push(`/`)

    }

    return (

        <div className="sidebar">
       
        <ul> 
        <li id="home" className="selected"  onClick={ !params.id ? props.CategoryHandler: (e)=>{ RouteHandler(e) } }> Home </li> 
        <li id="sports" onClick={ !params.id ? props.CategoryHandler: (e)=>{ RouteHandler(e) } }> Sports </li> 
        <li id="entertainment"  onClick={ !params.id ? props.CategoryHandler: (e)=>{ RouteHandler(e) } }> Entertainment </li> 
        <li id="science"  onClick={ !params.id ? props.CategoryHandler: (e)=>{ RouteHandler(e) } }> Education </li> 
        <li id="business" onClick={ !params.id ? props.CategoryHandler: (e)=>{ RouteHandler(e) } }> business </li> 
        </ul>
            
        </div>
    )
}

export default Sidebar
