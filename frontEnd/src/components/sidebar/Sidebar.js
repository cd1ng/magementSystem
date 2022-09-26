import React from 'react'
import {Layout,Menu} from 'antd'
import {withRouter} from 'react-router-dom'
import { BarChartOutlined, MessageOutlined, FormOutlined,UserOutlined,CreditCardOutlined,
  InfoOutlined,AuditOutlined,LineChartOutlined,UnorderedListOutlined,SettingOutlined } from '@ant-design/icons';
import styles from "./Sidebar.module.css"
const {Sider} = Layout

const item =[
  {
    key: '/home',
    icon: <UserOutlined />,
    label: '工作台',
  },
  {
    key: '/controller',
    icon: <FormOutlined />,
    label: '项目管理',
    children: [
      { label: '新建项目', icon:<CreditCardOutlined />,key: '/controller/newProject' },
      { label: '项目人员', icon:<AuditOutlined />,key: '/controller/authority' }
    ],
  },
  {
    key: '/projectInfo',
    icon: <BarChartOutlined />,
    label: '项目详情',
    children: [
      { label: '项目列表', icon:<InfoOutlined />,key: '/projectInfo/information' },
      { label: '项目进度', icon:<LineChartOutlined />,key: '/projectInfo/process' },
    ],
  },
  {
    key: '/inform',
    icon: <MessageOutlined />,
    label: '消息中心',
    children: [
      // { label: '新建通知', icon:<EditOutlined />,key: '/inform/newInfo' },
      { label: '消息设置', icon:<SettingOutlined />,key: '/inform/infoSetting' },
      { label: '消息记录', icon:<UnorderedListOutlined />,key: '/inform/infoRecord' },
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