import React, { Component } from "react";
import { Header} from "./styleComponent";
import GoToIN from '../../components/shopcarInCountry';
import GoToOut from '../../components/shopcarOutCountry'
<<<<<<< HEAD
import {HashRouter as Router,Switch,Route,NavLink,Redirect} from "react-router-dom";

import {connect} from 'react-redux';
import {mapStateToProps,mapDispatchToProps} from '@mapProps/shopcar'

 class Shopcar extends Component {
=======
import {HashRouter as Router,Switch,Route,NavLink} from "react-router-dom";
export default class Shopcar extends Component {
>>>>>>> 93ce43e452cf4401a6ba158d6c257b38a47ee2d3
  constructor(props) {
    super(props);
    
}
  render() {
    return (
        <>
            <Router>
              <Switch>
<<<<<<< HEAD
                <Redirect from="/shopcar" to="/shopcar/goToIn" exact/>
                <Route path="/shopcar/goToIn"  component={GoToIN}></Route>
=======
                <Route path="/shopcar/goToIn"  component={GoToIN}> </Route>
>>>>>>> 93ce43e452cf4401a6ba158d6c257b38a47ee2d3
                <Route path="/shopcar/goToOut" component={GoToOut}></Route>
              </Switch>
            </Router>
            <Header>
<<<<<<< HEAD
              <span className="left" onClick={this.goBack.bind(this)}><img src={require('@img/shopcarback.svg')} /></span>
              <NavLink to="/shopcar/goToIn"  activeStyle={{'color': '#FC3B72','borderBottom': '2px solid #FC3B72','width':'.9rem','height':'.38rem'}} ><p>国内购<span>(3)</span></p></NavLink>
              <NavLink to="/shopcar/goToOut" activeStyle={{'color': '#FC3B72','borderBottom': '2px solid #FC3B72','width':'.9rem','height':'.38rem' }} ><p>海淘<span>(3)</span></p></NavLink>
        
=======
              <span className="left" onClick={this.goBack.bind(this)}>&lt;</span>
              <NavLink to="/shopcar/goToIn"  activeStyle={{'color': '#FC3B72','borderBottom': '2px solid #FC3B72','width':'.9rem','height':'.38rem'}} ><p>国内购</p></NavLink>
              <NavLink to="/shopcar/goToOut" activeStyle={{'color': '#FC3B72','borderBottom': '2px solid #FC3B72','width':'.9rem','height':'.38rem' }} ><p>海淘</p></NavLink>
 
>>>>>>> 93ce43e452cf4401a6ba158d6c257b38a47ee2d3
            </Header>
          
        </>
        
    );
  }

  goBack(){
    this.props.history.push("/home");
    this.props.history.go(0);
<<<<<<< HEAD
  }

  componentDidMount(){
    this.props.in_cartdatas();
    this.props.out_cartdatas();
=======
>>>>>>> 93ce43e452cf4401a6ba158d6c257b38a47ee2d3
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Shopcar)