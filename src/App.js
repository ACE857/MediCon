import React from 'react';
import Home from './components/Home/home';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

import AdminLayout from "./layouts/Admin";

import AboutUs from './components/AboutUs/about-us';

function App() {
  return (

    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      <header className="App-header">
        <Router> 
              
              <Switch>
              <Route exact path="/about-project" component={AboutUs} />
              <Route exact path="/" component={Home} />
              <Route path="/admin" render={props => <AdminLayout {...props} />} />
              <Redirect from="/" to="/admin/dashboard" />
              </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
