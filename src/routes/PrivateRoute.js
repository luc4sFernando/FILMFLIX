import React from 'react'
import { Route, Redirect } from "react-router-dom";
import {useSelector} from 'react-redux'
import {userSelector} from '../features/selectors/index'

function PrivateRoute({path, component: Component, ...rest}) {
    
    const user = useSelector(userSelector) ;
    console.log(user, 'este')
    return (
<Route {...rest} render={props => (
    user ? <Component {...props} /> : <Redirect to={{pathname: '/signin', state: {from: props.location}}}/>
)}/>


    )
}

export default PrivateRoute
