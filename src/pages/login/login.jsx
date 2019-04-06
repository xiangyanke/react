import React, {Component} from 'react'
import './login.less'
import logo from './images/logo.png'
import LoginForm from './login-form'
import {reqLogin} from '../../api/'
import storageUntil from '../../until/storageUntils'
import memoryUntil from '../../until/memoryUntil'
import {Redirect} from 'react-router-dom'



export default class Login extends Component {
  state ={
    //显示登录失败的提示文本
      errorMsg:''

  }
  login = async({username,password})=>{

    const result = await reqLogin(username,password)
console.log(result)
    if(result.status===0){
      const user = result.data
      //跳转后台管理
      this.props.history.replace('/admin')
      storageUntil.saveUser(user)
      memoryUntil.user= user
    }else {
     this.setState({
        errorMsg:result.msg

      })

    }

  }


  render() {
    if(memoryUntil.user && memoryUntil.user._id){
      return <Redirect to='/admin'/>
    }
   const errorMsg = this.state.errorMsg
    return (
        <div className='login'>
          <div className='login-header'>
            <img src={logo} alt='管理系统'/>
            React项目，后台管理
          </div>
          <div className='login-content'>
            <div className='login-box'>
              <div className='error-msg-wrap '>
                <div className={errorMsg ? 'show' : ''}>{errorMsg}</div>
              </div>
              <div className='title'>用户登录</div>
              <LoginForm login={this.login}/>



            </div>
          </div>
        </div>
    )
  }
}