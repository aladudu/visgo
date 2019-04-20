import React, { Component } from 'react';
import {
  Home,
  Classify,
  Shopcar,
  Mine,
  Indent
} from "@views";
import {HashRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import TabBarCom from './common/tabBar' 
class App extends Component {
  
  render() {
   
    return (
      <Router>
        <Switch>
          <Redirect from="/" to="/home" exact/>
          <Route path="/home"  component={Home}/>
          <Route path="/classify" component={Classify}/>
          <Route path="/shopcar"  component={Shopcar}/>
          <Route path="/indent" component={Indent}/>
          <Route path="/mine" component={Mine}/>
          
        </Switch>
        <TabBarCom/>
      </Router>
    );
  }
}

export default App;
