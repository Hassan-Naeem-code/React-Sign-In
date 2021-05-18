import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './components/navigation';
import Login from './container/login';
import Signup from './container/signup';
import UserAppointment from './container/userAppointment';
import Home from './container/home';
import SuperAdmin from './container/superAdmin';
import { fetchUserData } from './Store/action/auth';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      if (auth) {
        dispatch(fetchUserData(auth.uid));
      }
    })
  }, []);
  const getState = useSelector(({ authenticateUser }) => { return authenticateUser.authenticateUser });
  return (
    <Router>
      <div>
        {/* <Navigation /> */}
        <Switch>
          <Route path="/superAdmin" component={SuperAdmin}></Route>
          <Route path="/home" component={Home}>
          </Route>
          <Route path="/userAppointment" component={UserAppointment}>
          </Route>
          <Route path="/signup" component={Signup}>
            {/* <Signup /> */}
          </Route>
          <Route path="/" component={(getState) ? (Home) : (Login)}>
            {/* {
            getState.uid ? (<Home />) : (<Login />)
          } */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;