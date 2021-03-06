import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './Common';
 
function AdminRoute({component:Component,...rest}) {
    return (
        <div>
        <Route
        {...rest}
        render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
      />  
        </div>
    )
}

export default AdminRoute
