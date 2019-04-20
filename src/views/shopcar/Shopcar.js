import React, { Component } from "react";
import { Header} from "./styleComponent";
import GoToIN from '../../components/shopcarInCountry';
import GoToOut from '../../components/shopcarOutCountry'
import {HashRouter as Router,Switch,Route,NavLink,Redirect} from "react-router-dom";

import {connect} from 'react-redux';
import {mapStateToProps,mapDispatchToProps} from '@mapProps/shopcar'

 class Shopcar extends Component {
  constructor(props) {
    super(props);
    
}
  render() {
    return (
        <>
            <Router>
              <Switch>
                <Redirect from="/shopcar" to="/shopcar/goToIn" exact/>
                <Route path="/shopcar/goToIn"  component={GoToIN}></Route>
                <Route path="/shopcar/goToOut" component={GoToOut}></Route>
              </Switch>
            </Router>
            <Header>
              <span className="left" onClick={this.goBack.bind(this)}><img src={require('@img/shopcarback.svg')} /></span>
              <NavLink to="/shopcar/goToIn"  activeStyle={{'color': '#FC3B72','borderBottom': '2px solid #FC3B72','width':'.9rem','height':'.38rem'}} ><p>国内购<span>(3)</span></p></NavLink>
              <NavLink to="/shopcar/goToOut" activeStyle={{'color': '#FC3B72','borderBottom': '2px solid #FC3B72','width':'.9rem','height':'.38rem' }} ><p>海淘<span>(3)</span></p></NavLink>
        
            </Header>
          
        </>
        
    );
  }

  goBack(){
    this.props.history.push("/home");
    this.props.history.go(0);
  }

  componentDidMount(){
    this.props.in_cartdatas();
    this.props.out_cartdatas();
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Shopcar)