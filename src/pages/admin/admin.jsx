import React, {Component} from 'react'
import memoryUntil from '../../until/memoryUntil'
import {Redirect} from 'react-router-dom'



export default class Admin extends Component {
  render() {
    //如果没有登录，自动跳转登录页面
if(!(memoryUntil.user || memoryUntil.user._id)){
  return <Redirect to='/login'/>
}

    return (
        <div>
          admin
        </div>
    )
  }
}