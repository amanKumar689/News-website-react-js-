import { LocalDining } from '@material-ui/icons'
import React from 'react'
import {Redirect,Route} from 'react-router-dom'
import Login from '../MainComponent/Login'
const RouteWrapper = (props) => {
  let elem = null
  console.log(props.Auth);
    if( props.Auth!=null )
    {

      elem =!props.Auth ? <Route path={props.path} component={props.component}/> : <Redirect  to='/'/>
    }
    return elem
     

   

}

export default RouteWrapper
