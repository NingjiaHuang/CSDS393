import React, {Fragment, useState} from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"

// components
import BreederDashboard from "./components/dashboard_breeder"
import BreederLogin from "./components/login_breeder"
import BreederRegister from "./components/register_breeder"
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  };

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
