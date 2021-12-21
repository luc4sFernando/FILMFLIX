
import React from 'react'
import { Redirect, Route } from 'react-router'
import { useSelector } from 'react-redux'
import { emailSelector } from '../features/selectors'
import { getAuth } from "firebase/auth";

function RouteRegister({ component: Component, ...rest }) {

    return (
        <Route
        {...rest}
        render={(props) =>
         
            <Component {...props} />
         
        }
      />
         
      )
}

export default RouteRegister;
