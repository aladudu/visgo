import React, { Component } from 'react'
import {LoginWraps} from './styleComponents'
export default class LoginWrap extends Component {
  render() {
    return (
      <LoginWraps>
         <p>登录后您的购物车在电脑和微信商城都会同步</p>
         <p className="login">登录</p>
      </LoginWraps>
    )
  }
}
