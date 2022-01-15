import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { useDispatch} from 'react-redux';

import { login, logout } from '../features/counter/stockSlice';



import Home from '../pages/Home';
import LoginScreen from '../pages/Login';

import { auth } from '../services/firebase';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { Loggin } from '../components/sign';
import Signup from '../pages/signup';

import Intro from '../pages/signupIntro';
import PlanForm from '../pages/Plans';
import ProfileManager from '../pages/Profiles';
import SplashAnimation from '../components/splash';
import PlayAnimation from '../components/trailer';
import RouteRegister from './SignUp';

function Routes() {
 
  const dispatch = useDispatch();

  useEffect(() => {
    // adciona um ouvinte para o estado da autenticação, demostrando o usuário que foi autenticado.
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
            plans: null,
          })
        );
      } else {
        dispatch(logout());
        console.log(userAuth);
        localStorage.clear();
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <>
      <Router>
        <Switch>
          <PublicRoute exact path='/' component={LoginScreen} />
          <PrivateRoute path='/intro' component={SplashAnimation} />
          <PrivateRoute path='/play' component={PlayAnimation} />
          <PublicRoute  path='/signin' component={Loggin} />

          <PrivateRoute path='/browse' component={Home} />

          <RouteRegister exact path='/signup' component={Signup} />
          <PublicRoute path='/signup/intro' component={Intro} />
          <RouteRegister path='/signup/planform' component={PlanForm} />

          <PrivateRoute path='/profiles/manager' component={ProfileManager} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
