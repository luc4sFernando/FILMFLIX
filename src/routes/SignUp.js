import React from 'react';
import { Route } from 'react-router';

function RouteRegister({ component: Component, ...rest }) {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

export default RouteRegister;
