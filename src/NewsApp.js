import React ,{useState} from 'react'
import {BrowserRouter as Router , Link , Switch, Route,Redirect} from 'react-router-dom'
import Login from './component/MainComponent/Login'
import Logout from './component/MainComponent/Logout'
import Signup from './component/MainComponent/Signup'
import Dashboard from './component/MainComponent/Dashboard'
import {IsAuthentication} from './firebase/config'
import RouteWrapper from './component/RouteWrapper/RouteWrapper' 
const NewsApp = () => {
    const [IsAuth,setAuth] = useState(null)
    



IsAuthentication().then(result=>{

     setAuth(true)
    }).catch(err=>{
        setAuth(false)
    })
     
    
    return (
        <> 
         <Router>

 <Switch>
<Route path='/logout' component={Logout} />
<Route exact path='/'> 
 <Dashboard/>
</Route>

{/* //Wrapper for My Login , SignUp and Error */}

<Route path='/:id'>
<RouteWrapper  path='/login' Auth={IsAuth} component={Login}/> 
 <RouteWrapper path='/signup' Auth={IsAuth} component={Signup}/> 
</Route> 
 
 </Switch>

         </Router>

          
          </>
    )
}

export default NewsApp
