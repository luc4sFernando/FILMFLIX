import React, {useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
  
  } from "react-router-dom";
  
  import {useDispatch, useSelector} from 'react-redux'

  import {login, logout} from '../features/counter/stockSlice'
  
  import { userSelector } from '../features/selectors';

  import Home from '../pages/Home'
  import LoginScreen from '../pages/login';

  import {auth} from '../services/firebase'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import {Loggin} from '../components/sign'
import Signup from '../pages/signup';
import RouteRegister from './SignUp';
import Intro from '../pages/signupIntro';
import PlanForm from '../pages/planform';

function Routes() {

  const dispatch = useDispatch();
  

  const user = useSelector(userSelector);

 
    useEffect(() => {
      // adciona um ouvinte para o estado da autenticação, demostrando o usuário que foi autenticado.
      const unsubscribe = auth.onAuthStateChanged((userAuth) => {
        if(userAuth) {
          dispatch(
            login({
          uid: userAuth.uid,
          email: userAuth.email,
          plans: null}))
        }
        else{
          dispatch(logout());
        }
      })
      return unsubscribe;
    }, [dispatch]);
    console.log(user)

    return (
    <>
    <Router>
      
      <Switch>

      <PublicRoute exact path="/" component={LoginScreen} />
   
      <PublicRoute  path="/signin" component={Loggin}/>
    
      <PrivateRoute path='/home' component={Home}/>
      
      <RouteRegister exact path="/signup" component={Signup}/>
      <RouteRegister path="/signup/intro" component={Intro}/>
      <RouteRegister path="/signup/planform" component={PlanForm}/>
     
     
     
     
         
         
      </Switch> 
     
      



 
  
    </Router>
    </>
    )
}

export default Routes
