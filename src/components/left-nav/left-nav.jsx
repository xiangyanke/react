import React, {Component} from 'react'
import {Menu ,Icon} from 'antd'
import './left-nav.less'
import MenuList from '../../config/menuConfig.js'

const Item = Menu.Item
const SubMenu =Menu.SubMenu

export default class LeftNav extends Component {
  getNodes = ()=>{
    return MenuList.map(item=>{
      if(!item.children){
        return  (
          <Item key={item.key}>
            <Icon type={item.icon} />
            <span>{item.title}</span>
          </Item>
        )
      }else {
        return (
          <SubMenu key={item.key } title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
            {
              item.children.map(citem=>{
                return (
                  <Item key={citem.key}>
                    <Icon type={citem.icon} />
                    <span>{citem.title}</span>
                  </Item>
                )
              })
            }
          </SubMenu>
        )
      }

    })
}
  render() {
    return (
        <div className='left-nav'>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
          >
            {
              this.getNodes()
            }


          </Menu>
        </div>
    )
  }
}