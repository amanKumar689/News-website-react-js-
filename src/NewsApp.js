import React from 'react'
import {BrowserRouter as Router , Link , Switch, Route} from 'react-router-dom'
import Login from './component/MainComponent/Login'
import Logout from './component/MainComponent/Logout'
import Signup from './component/MainComponent/Signup'
import Dashboard from './component/MainComponent/Dashboard'
const NewsApp = () => {
    return (
        <> 
        
         <Router>

 <Switch>

<Route path='/login' component={Login} />
<Route path='/signup' component={Signup} />
<Route path='/logout' component={Logout} />
<Route path='/:id'> 
 <Dashboard/>
</Route>
<Route path='/'> 
 <Dashboard/>
</Route>
</Switch>

         </Router>

          
        </>
    )
}

export default NewsApp
