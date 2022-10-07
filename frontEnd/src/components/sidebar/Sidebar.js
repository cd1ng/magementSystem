import React,{useEffect, useState} from 'react'
import {Layout,Menu} from 'antd'
import {withRouter} from 'react-router-dom'
import { BarChartOutlined, MessageOutlined, FormOutlined,UserOutlined,CreditCardOutlined,
  InfoOutlined,UnorderedListOutlined,SettingOutlined } from '@ant-design/icons';
import styles from "./Sidebar.module.css"
const {Sider} = Layout

const iconMap = {
  '/home':<UserOutlined />,
  '/project':<BarChartOutlined />,
  '/project/create':<CreditCardOutlined />,
  '/project/list':<InfoOutlined />,
  '/authority':<FormOutlined />,
  '/message':<MessageOutlined />,
  '/message/list':<SettingOutlined />,
  '/message/setting':<UnorderedListOutlined />
}

function Sidebar(props) {
  
  const [sidebar,setSidebar] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8000/router/findRoutes")
    .then(res=>res.json())
    .then(res=>setSidebar(getTrees(res.result)))
  },[])

  const selectKeys = [props.location.pathname]
  const openKeys = ["/"+props.location.pathname.split("/")[1]]
  const handleRouter = (e)=>props.history.push(e.keyPath[0])
  function getTrees(arr){
    let newArr = []
    arr.forEach(element => {
      if(element.grade===1&&element.pagePermission===1){
        newArr.push(changeStyle(element))
      }else{
        if(element.pagePermission===1){
        newArr.filter(item=>item.id === element.parentId)
        .map(obj=>{
          if(!obj.hasOwnProperty('children')){  
            obj.children = [changeStyle(element)]
          }else{
            obj.children.push(changeStyle(element))
          }
        })
      }
      }
    })
    return newArr
  }
  function changeStyle(obj){
    return{
      "id":obj.id,
      "key":obj.key,
      "icon":iconMap[obj.key],
      "label":obj.routerTitle
    }
  }
  return (
    <Sider className={styles["site-layout-background"]} >
      <Menu
        mode="inline"
        selectedKeys={selectKeys}
        defaultOpenKeys={openKeys}
        items={sidebar}
        onClick={(e)=>handleRouter(e)}
      >
      </Menu>
    </Sider>
  )
}

export default withRouter(Sidebar)