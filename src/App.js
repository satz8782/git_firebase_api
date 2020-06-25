import React, {useState} from 'react';
import './App.css';
import { UserContext } from './Context/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import firebase from 'firebase/app'
import 'firebase/auth'

import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import PageNotFound from './Pages/PageNotFound'

import Footer from './Layout/Footer'
import Header from './Layout/Header'

import firebaseConfig from './Config/FirebaseConfig'
firebase.initializeApp(firebaseConfig)


const App = () => {

  const [user, setUser] = useState(null)

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user,setUser}}>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signin" component={Signin}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="*" component={PageNotFound}/>
        </Switch>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
