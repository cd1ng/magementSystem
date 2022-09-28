import React,{useEffect, useState} from 'react'
import {Layout,Menu} from 'antd'
import {withRouter} from 'react-router-dom'
import { BarChartOutlined, MessageOutlined, FormOutlined,UserOutlined,CreditCardOutlined,
  InfoOutlined,UnorderedListOutlined,SettingOutlined } from '@ant-design/icons';
import styles from "./Sidebar.module.css"
const {Sider} = Layout

const changeTo = {
  '/home':"工作台",
  '/project':"项目",
  '/authority':"权限管理",
  '/message':"消息中心"
}

const iconMap = {
  '/home':<UserOutlined />,
  '/project':<BarChartOutlined />,
  '/authority':<FormOutlined />,
  '/message':<MessageOutlined />
}

const item =[
  {
    key: '/home',
    icon: <UserOutlined />,
    label: '工作台',
  },
  {
    key: '/project',
    icon: <BarChartOutlined />,
    label: '项目',
    children: [
      { label: '新建项目', icon:<CreditCardOutlined />,key: '/project/create' },
      { label: '项目列表', icon:<InfoOutlined />,key: '/project/list' },
    ],
  },
  {
    key: '/authority',
    icon: <FormOutlined />,
    label: '权限管理',
  },
  {
    key: '/message',
    icon: <MessageOutlined />,
    label: '消息中心',
    children: [
      { label: '消息设置', icon:<SettingOutlined />,key: '/message/setting' },
      { label: '消息记录', icon:<UnorderedListOutlined />,key: '/message/list' },
    ],
  },
]

function Sidebar(props) {
  
  //初始化时获取sidebar
  const [sidebar,setSidebar] = useState([])
  useEffect(() => {
    fetch("http://localhost:8000/authority/findPath",{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({jobType:1})
    })
    .then(res=>res.json())
    .then(res=>setSidebar(res.result.res.path.split(',')))
    .catch(err=>{console.error(err)})
  }, [])

  const newItem = sidebar.map(item=>{
    return{
      "key":item,
      "icon":iconMap[item],
      "label": changeTo[item],
    }
  })
  const selectKeys = [props.location.pathname]
  const openKeys = ["/"+props.location.pathname.split("/")[1]]
  const handleRouter = (e)=>props.history.push(e.keyPath[0])
  return (
    <Sider className={styles["site-layout-background"]} >
      <Menu
        mode="inline"
        selectedKeys={selectKeys}
        defaultOpenKeys={openKeys}
        items={item}
        onClick={(e)=>handleRouter(e)}
      >
      </Menu>
    </Sider>
  )
}

export default withRouter(Sidebar)