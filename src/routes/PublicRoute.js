import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../features/selectors/index';

function PublicRoute({ component: Component, ...rest }) {
  const user = useSelector(userSelector);
  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          !user ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: '/home', state: { from: props.location } }}
            />
          )
        }
      />
    </>
  );
}

export default PublicRoute;
