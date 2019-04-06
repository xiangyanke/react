import React, {Component} from 'react'
import { Form,Input,Button,Icon } from 'antd'
import PropTypes from 'prop-types'


 class LoginForm extends Component {

  static propTypes = {
    login:PropTypes.func.isRequired
  }

   submitForm = (event)=>{
     event.preventDefault();
     const {form} = this.props
     form.validateFields((err,values)=>{
         if(!err){ const value = this.props.form.getFieldsValue()
           this.props.login(value)

           // console.log(value)

         }else{
           //问题
         }
     })


   }
   validatorData=(rule,value,callback)=>{
      value = value.trim()
     if(value==='') {
       callback('必须输入密码')
     } else if(value.length<4 || value.length>8){
        callback('密码必须长度大于4小于8')
      }else{
       callback()
     }
   }



  render() {
     const {getFieldDecorator} = this.props.form
    return (
      <Form className='login-form' onSubmit={this.submitForm}>
        <Form.Item>
          {getFieldDecorator('username',
            {initialValue :'admin'},
            {rules: [{required:true ,message:'必须输入用户名' },
            {min:4, message:'用户名长度不能小于4'}]
            }

          )
          (<Input type='text' prefix={<Icon type="user" />} placeholder='用户名'/>)}

        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password',
            { initialValue:'admin',
              rules:[{validator:this.validatorData} ]
            }

          )(<Input type='password' prefix={<Icon type="lock"/>} placeholder='密码' />)}

        </Form.Item>
        <Form.Item>
          <Button type='primary' className='login-form-button' htmlType='submit' >登录</Button></Form.Item>


      </Form>
    )
  }
}
const WarpLoginForm  =  Form.create()(LoginForm)
export default WarpLoginForm