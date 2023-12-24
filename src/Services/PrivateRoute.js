import React from 'react'
import Auth from "../Services/Auth";
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, pageLoader: pageLoader, ...rest }) => {

  // Add your own authentication on the below line.
  const isLoggedIn = Auth.isLoggedIn()
  return (
    <Route
      {...rest}
      render={props =>
        
        isLoggedIn ? (
          <Component {...props} pageLoader={pageLoader} />
        ) : (
          <Redirect to={{ pathname: '/admin/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute
