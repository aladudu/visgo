import React, { Component } from 'react'
import {PayStyle} from './styledComponents'
export default class PayBar extends Component {
  render() {
    return (
      <PayStyle>
        <div className='pay-top'>
          <img src= {require('@img/delete.svg')}/>
          <span className='delShopcar'>清空购物车</span>
        </div>
        <div className='pay-bottom'>
          确认订单
          <span className='money'>￥633</span>
        </div>
      </PayStyle>
    )
  }
}
