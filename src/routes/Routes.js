import React, {useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
  import {useDispatch, useSelector} from 'react-redux'

  import {login, logout} from '../features/counter/stockSlice'
  
  import { userSelector } from '../features/selectors';

  import Home from '../pages/Home'
  import LoginScreen from '../pages/login';

  import {auth} from '../services/firebase'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute copy';
import {Loggin} from '../components/sign'
import Signup from '../pages/signup';

function Routes() {

  const dispatch = useDispatch();
  
  // use selector acessa os dados da loja;

  const user = useSelector(userSelector);
  console.log(user)
 
    useEffect(() => {
      // adciona um ouvinte para o estado da autenticação, demostrando o usuário que foi autenticado.
      const unsubscribe = auth.onAuthStateChanged((userAuth) => {
        if(userAuth) {
          dispatch(login({uid: userAuth.uid,
          email: userAuth.email}))
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
      <PublicRoute exact path="/">
      <LoginScreen /> 
      </PublicRoute> 
      <PublicRoute exact path="/signin">
      <Loggin />
      </PublicRoute> 
      <PrivateRoute path={'/home'} component={<Home/>}/>

      <PublicRoute  exact path="/signup">
      <Signup />
      </PublicRoute> 
         
         
      </Switch> 
     
      



 
  
    </Router>
    </>
    )
}

export default Routes
