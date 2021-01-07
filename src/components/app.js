import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOldRepublic } from "@fortawesome/free-brands-svg-icons";
import Button from 'react-bootstrap/Button'
import { Col, Container, Row } from 'react-bootstrap';

import Navbar from './navbar'
import HomePage from './pages/home'
import About from './pages/about'
import Training from './pages/training'
import SignUp from './pages/signup'
import Login from './pages/login'
import TrialOne from './trials/trial-one';
import TrialTwo from './trials/trial-two';
import TrialThree from './trials/trial-three';
import TrialEditor from '../../src/components/trial-editor'

library.add(faOldRepublic);


export default class App extends Component {
  render() {
    return (
      <div>

          
        <Router>
          <div>
            <Navbar/>

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={About} />
              <Route path="/training" component={Training} />
              <Route path="/trial-one" component={TrialOne}/>
              <Route path="/trial-two" component={TrialTwo}/>
              <Route path="/trial-three" component={TrialThree}/>
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/trial-editor" component={TrialEditor}></Route>
            </Switch>
            

          </div>
        </Router>


      </div>
      
    );
  }
}
