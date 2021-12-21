
import React from 'react'
import { useSelector } from 'react-redux';
import { Route } from 'react-router'
import { Redirect } from 'react-router-dom';
import { userSelector } from '../features/selectors';

function RouteRegister({ component: Component, ...rest }) {
  const user = useSelector(userSelector);

    return (
      <Route
      {...rest}
      render={(props) =>
        !user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/intro', state: { from: props.location } }}
          />
        )
      }
    />
       
    )
}

export default RouteRegister;