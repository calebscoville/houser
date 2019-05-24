import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard'
import Wizard from './Components/Wizard/Wizard'

export default (
    <Switch> 
        <Route component={Dashboard} path="/" />
        <Route component={Wizard} path="/wizard" />
      {/* <Route component={Home} exact path="/" />
      <Route component={About} path="/about" />
      <Route component={ClassList} path="/classlist/:class" />
      <Route component={Student} path="/student/:id" /> */}
    </Switch>
  );