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

function Routes() {

  const dispatch = useDispatch();
  
  // use selector acessa os dados da loja;

  const user = useSelector(userSelector);
  console.log(user, 'aqui')
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

    return (
    <>
    <Router>
      {!user ? (<LoginScreen />) : (
      <Switch>
      <Route exact path="/">
      <Home />
      </Route> 
      <Route  exact path="/signup">
      <h1>REGISTER</h1>
      </Route> 
         
         
      </Switch> )}
     
      



 
  
    </Router>
    </>
    )
}

export default Routes
