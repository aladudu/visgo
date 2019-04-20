import React, { Component } from 'react'
<<<<<<< HEAD
import LoginWrap from '@common/loginWrap/loginWrap'
import {GoodsList,Container} from './styleComponents'
import {connect} from 'react-redux';
import immutable from 'immutable';
import {mapStateToProps,mapDispatchToProps} from '@mapProps/shopcar'
import PayBar from '@components/payBar'
import BScroll from 'better-scroll';
 class ShopcarInCountry extends Component {
  render() {
       
    let Cartdata = this.props.getOutdatas.getIn(['getOutdatas']);  
    return (
      <>
          
            <LoginWrap> </LoginWrap>
            <Container ref={outShop=>this.outShop = outShop}>
              <GoodsList>
                <ul>
                    {
                      Cartdata.map((item,index)=>(
                        <li key={index}>
                            <div className="goodLeft">
                              <img src={item.pic_url}/>
                            </div>
                            <div className="goodRight">
                                <p>
                                  <span>{item.item_name}</span>
                                  <span>×</span>
                                </p>
                                <p>
                                  <span>{item.spec.color}{item.spec.degree}</span>
                                  <span><img className='more' src={require('@img/more.svg')} /></span>
                                </p>
                                <p>
                                  <span>￥{item.unitprice}{item.settletype}</span>
                                  <span>
                                    <i>-</i>
                                    <i>{item.buycount}</i>
                                    <i>+</i>
                                  </span>
                                </p>
                            </div>
                        </li>
                      ))
                    } 
                </ul>
            </GoodsList>
        </Container>
        <PayBar/>
      
      </>
    )
  }


  componentDidMount(){
    this.scroll = new BScroll(this.outShop,{
      scrollY:true,
      tap:true,
      click:true
    })
  }
 
}

export default connect(mapStateToProps,mapDispatchToProps)(ShopcarInCountry)


=======

export default class ShopcarOutCountry extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
>>>>>>> 93ce43e452cf4401a6ba158d6c257b38a47ee2d3
