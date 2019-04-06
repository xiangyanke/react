/*
* This page is the entry of this project
* */

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import {Redirect}  from 'react-router-dom'



import storageUntil from './until/storageUntils'
import memoryUntil from './until/memoryUntil'
const user = storageUntil.getUser()
console.log(user)
if(user._id){  //前面肯定登录过t

  memoryUntil.user = user   //加载到内纯中

}


ReactDOM.render(<App/>,
   
  document.getElementById('root')
)