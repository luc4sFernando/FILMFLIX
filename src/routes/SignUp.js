
import React from 'react'
import { Redirect, Route } from 'react-router'
import { useSelector } from 'react-redux'
import { emailSelector } from '../features/selectors'

function RouteRegister({ component: Component, ...rest }) {
    const user = useSelector(emailSelector);
    console.log(user)
    return (
        <Route {...rest} render={props => (
            user ? <Component {...props} /> : <Redirect to={{pathname: '/', state: {from: props.location}}}/>
        )}/>
    )
}

export default RouteRegister;
