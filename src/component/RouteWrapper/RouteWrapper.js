import { LocalDining, PowerInputSharp } from '@material-ui/icons'
import React from 'react'
import {Redirect,Route} from 'react-router-dom'
import { useParams} from 'react-router-dom'
import ErrorPage from '../MainComponent/ErrorPage'

const RouteWrapper = (props) => {
  const {id} = useParams()
  console.log(id);
  let elem = null
    if( props.Auth!=null && (id=='login' || id=='signup') )
    {
        console.log("sdfsd");
    // First Time when render my app path '/login' not assign but some fract of time 
      elem =!props.Auth ? <Route path={props.path} component={props.component}/> : <Redirect  to='/'/>
    } 

    else if(id!=='login' && id!=='signup'){
       elem =<ErrorPage/>
    }
    return elem
     

   

}

export default RouteWrapper
