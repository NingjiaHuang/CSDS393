import React, {Fragment, useState, useEffect} from 'react';
import './App.css';
import {toast} from "react-toastify"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"

// components
import BreederDashboard from "./components/dashboard_breeder"
import BreederLogin from "./components/login_breeder"
import BreederRegister from "./components/register_breeder"

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
            </Switch>
          </div>
        </Router>
      </Fragment>
  );
}

export default App;
