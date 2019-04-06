//用于发送ajax请求的函数模块
//封装axios  函数返回值为promise对象

import axios from 'axios'

import {message} from 'antd'
 export default function ajax(url,data={},type='GET')  {
  return new Promise((resolve,reject)=>{
  let promise;
  if(type==='GET'){
    promise= axios.get(url,{
      params:data
    })
  }else{
    promise =  axios.post(url,data)
  }
  promise.then((response)=>{
    resolve(response.data)
  }).catch((error)=>{
message.error('请求异常：'+ error.message)
  })
})


 }
