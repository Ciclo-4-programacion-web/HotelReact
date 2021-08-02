import { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import jwt_decode from "jwt-decode";
import setAuthToken from "utils/setAuthToken";
import { setCurrentUser, logoutUser } from "actions/authActions";
import { Provider } from "react-redux";
import store from "store";

import './App.css';

import PrivateRoute from "components/private_route/PrivateRoute";
import UserProfile from "components/profile/UserProfile";
import Home from 'pages/public/Home';
import FooterComponent from 'components/FooterComponent';
import NotFound from 'components/layout/404';
import RoomReview from 'components/room/RoomReview';
import Login from 'pages/auth/Login';
import NavBar from 'components/layout/NavBar';
import Register from 'pages/auth/Register';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
          <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path='/habitacion/:id' component={RoomReview} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/profile" component={UserProfile} />
              <Route component={NotFound} />
            </Switch>
            <FooterComponent />
          </div>
        </Router>
      </Provider>
    )
  }
  ;
}

export default App;
