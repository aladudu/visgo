import React, { Component } from 'react';
import TabBarCom from "./common/tabBar"
import {
  Home,
  Classify,
  Shopcar,
  Mine,
  Indent
} from "@views";
import {HashRouter as Router,Switch,Route,Redirect} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect from="/" to="/home" exact/>
          <Route path="/home" component={Home}/>
          <Route path="/Classify" component={Classify}/>
          <Route path="/Shopcar" component={Shopcar}/>
          <Route path="/Indent" component={Indent}/>
          <Route path="/mine" component={Mine}/>
        </Switch>
       <TabBarCom/>
      </Router>
    );
  }
}

export default App;
