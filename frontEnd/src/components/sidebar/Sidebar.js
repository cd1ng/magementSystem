import React from 'react'
import {Layout,Menu} from 'antd'
import {withRouter} from 'react-router-dom'
import { BarChartOutlined, MessageOutlined, FormOutlined,UserOutlined,CreditCardOutlined,
  InfoOutlined,UnorderedListOutlined,SettingOutlined } from '@ant-design/icons';
import styles from "./Sidebar.module.css"
const {Sider} = Layout

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
      />
    </Sider>
  )
}

export default withRouter(Sidebar)