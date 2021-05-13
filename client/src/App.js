import React, {Fragment, useState, useEffect} from 'react';
import './App.css';
import {toast} from "react-toastify"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
// components
import BreederDashboard from "./components/dashboard_breeder"
import BreederLogin from "./components/login_breeder"
import BreederRegister from "./components/register_breeder"
import ParentDashboard from "./components/dashboard_parent"
import ParentLogin from "./components/login_parent"
import ParentRegister from "./components/register_parent"
import AdminDashboard from "./components/dashboard_admin"
import AdminLogin from "./components/login_admin"
import ManageCats from "./components/ManageCats"

toast.configure();

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  };

  async function isAuth() {
    try{
      const response = await fetch("http://localhost:4020/auth/is-verify", {
        method: "GET",
        headers: {token : localStorage.token}
      });
      const parseRes = await response.json()
      parseRes === true ? setIsAuthenticated(true): setIsAuthenticated(false)
    }catch(err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth()
  }); 

  return(
      <Fragment>
        <Router>
          <div className="container">
            <Navbar></Navbar>
            <Switch>
              <Route 
              exact 
              path="/login/breeder" 
              render={props => 
                !isAuthenticated ? (
                  <BreederLogin {...props} setAuth={setAuth}/>
                ) : (
                  <Redirect to="/breeder_dashboard"/>
                  )
                }
              />
              <Route 
                exact 
                path="/register/breeder" 
                render={props => 
                  !isAuthenticated ? (
                    <BreederRegister {...props} setAuth={setAuth}/>
                  ) : ( 
                    <Redirect to="/login/breeder"/>
                  )
                }
              />
              <Route
                  exact 
                  path="/breeder_dashboard" 
                  render={props => 
                  isAuthenticated ? (
                    <BreederDashboard {...props} setAuth={setAuth}/> 
                  ) : ( 
                    <Redirect to="/login/breeder" />
                  )
                }
              />
              <Route exact path="/login/parent" render={props => !isAuthenticated ? <ParentLogin {...props} setAuth={setAuth}/> : <Redirect to="/parent_dashboard"/>}/>
              <Route exact path="/register/parent" render={props => !isAuthenticated ? <ParentRegister {...props} setAuth={setAuth}/> : <Redirect to="/login/parent"/>}/>
              <Route exact path="/parent_dashboard" render={props => isAuthenticated ? <ParentDashboard {...props} setAuth={setAuth}/>: <Redirect to="/login/parent"/>}/>
              <Route exact path="/login/admin" render={props => !isAuthenticated ? <AdminLogin {...props} setAuth={setAuth}/> : <Redirect to="/admin_dashboard"/>}/>
              <Route exact path="/admin_dashboard" render={props => isAuthenticated ? <AdminDashboard {...props} setAuth={setAuth}/>: <Redirect to="/login/admin"/>}/>
              <Route exact path="/manage_cat" render={props => isAuthenticated ? <ManageCats {...props} setAuth={setAuth}/>: <Redirect to="/login/breeder"/>}/>
            </Switch>
          </div>

          <div>

          </div>
        </Router>
      </Fragment>
  );
}

export default App;
