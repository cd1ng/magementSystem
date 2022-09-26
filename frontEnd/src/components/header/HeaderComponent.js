import React,{useState} from 'react'
import {Layout,Badge,Dropdown,Avatar,Menu,Tabs, Button,List,Modal, Input, message, Empty} from "antd"
import { useHistory } from 'react-router-dom';
import { UserOutlined,BellOutlined,QuestionCircleOutlined,PieChartTwoTone,InfoCircleOutlined,AlertOutlined} from '@ant-design/icons';
import { useSelector } from 'react-redux'

import styles from "./Header.module.css"
const {Header} = Layout

export default function HeaderComponent() {
  
  const history = useHistory()

  // 获取下拉菜单状态
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => setIsModalOpen(true)

  const currentUser = useSelector(state => state.UserReducer.userName)
  const currentToken = useSelector(state => state.UserReducer.token)

  const handleOk = () => {
    setIsModalOpen(false)
    message.success("谢谢您的反馈！")
  };

  const handleCancel = () => setIsModalOpen(false)
  const handleToInformation = ()=>history.push("/inform/infoRecord")
  const handleToHome = ()=>history.push("/home")
  const onClick = ({ key }) => history.push(key)
  const listData = [
    {
      CodeNumber:'1',
      title: '项目指派',
      from:'系统消息',
      description:'XMIASI'
    },
    {
      CodeNumber:'1',
      title:'项目评审',
      from:'系统消息',
      description:'XXXMASM'
    },
    {
      CodeNumber:'0',
      title:'项目延期',
      description:'XXXMASM'
    },
  ];
  const infoItems = [
    { label: '通知', key: 'item-1', children: (
    <List
      size="small"
      itemLayout="horizontal"
      dataSource={listData}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={item.CodeNumber==='0'?<InfoCircleOutlined style={{fontSize:"32px",color:"blue"}}/>:<AlertOutlined style={{fontSize:"32px",color:"red"}}/>}
            title={<span>{item.title}</span>}
            description={<p>{item.description}</p>}
          />
        </List.Item>
      )
    }
  />) },
    { label: '待办', key: 'item-2', children:<Empty/> },
  ];

  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: '我的工作台',
          key: '/home',
        },
        {
          label: '页面设置',
          key: '/',
        },
        {
          label: '退出',
          key: '/login',
        },
      ]}
    />
  );
  const infoMenu=(
    <>
      <Tabs items={infoItems}  centered size={'large'} 
        className={styles["notificationHub"]}
        tabBarStyle={{letterSpacing:"4px"}}
        />
      <Button style={{width:"50%"}} onClick={handleToInformation}>清除消息</Button>
      <Button style={{width:"50%"}} onClick={handleToHome}>查看更多</Button>
    </>
  );

  return (
    <Header className={styles["header"]}>
      <div className={styles["logo"]}>
        <PieChartTwoTone />
        <span>项目管理系统</span>
      </div>
      <div className='tool'>
        <QuestionCircleOutlined style={{fontSize:"20px",marginRight:"20px"}} onClick={showModal}/>
        <Dropdown overlay={menu}>
          <div style={{float:"right",width:"100px",cursor:"pointer",textAlign:"center",marginRight:"20px"}}>
            <Avatar size={24} icon={<UserOutlined />} />
            <span style={{marginLeft:"10px"}}>{currentUser}</span>
          </div>
        </Dropdown>
        <Dropdown overlay={infoMenu} placement="bottomRight">
          <div style={{float:"right",width:"60px",cursor:"pointer",textAlign:"center"}}>
            <Badge count={listData.length} overflowCount={10} size="small">
              <BellOutlined  style={{color:"white",fontSize:"20px"}}/>
            </Badge>
          </div>
        </Dropdown>
      </div>
      <Modal title="反馈" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText={"提交"} cancelText={"取消"}>
        <Input.TextArea placeholder='欢迎提供反馈！'/>
      </Modal>
    </Header>
  )
}
