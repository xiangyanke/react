import React, {Component} from 'react'
import memoryUntil from '../../until/memoryUntil'
import {Redirect} from 'react-router-dom'
import LeftNav from "../../components/left-nav/left-nav";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {Row,Col} from 'antd'
import './admin.less'




export default class Admin extends Component {
  render() {
    //如果没有登录，自动跳转登录页面
if(!(memoryUntil.user || memoryUntil.user._id)){
  return <Redirect to='/login'/>
}

    return (
      <Row className='container'>
        <Col span={4}>
          <LeftNav/>
        </Col>
        <Col span={20}className='main'>
          <Header/>
          <div className='content'>界面主体区域</div>
          <Footer/>
        </Col>
      </Row>
    )
  }
}