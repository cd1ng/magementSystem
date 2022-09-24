import React from 'react'
import {Layout,Badge,Dropdown,Avatar,Menu,Tabs, Button,List} from "antd"
import { useHistory } from 'react-router-dom';
import { UserOutlined,BellOutlined,QuestionCircleOutlined,PieChartTwoTone} from '@ant-design/icons';
import "./component.css"

const {Header} = Layout

export default function HeaderComponent() {

  const history = useHistory()
  const onClick = ({ key }) => {
    history.push(key)
  };
  const listData = [
  {
    CodeNumber:'1',
    title: '项目指派',
    description:['HHHHSXAXA','HJ','2022/08/12']
  },
  {
    CodeNumber:'0',
    title: '项目延期',
    description:['HHHHSXAXA','HJ','2022/08/12']
  },
  {
    CodeNumber:'2',
    title:'项目评审',
    description:['HHHHSXAXA','HJ','2022/08/12']
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
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<span>{item.title}</span>}
            description={
              <div style={{height:"80px",display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                <p>项目编号：{item.description[0]}</p>
                <p>客户：{item.description[1]}</p>
                <p>开始时间：{item.description[2]}</p>
              </div>
            }
          />
        </List.Item>
      )
    }
  />) },
    { label: '待办', key: 'item-2', children: 'xasasdasdasdasdasdASADASFASCAgsg' },
  ];

  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: '个人中心',
          key: '/home',
        },
        {
          label: '个人设置',
          key: '/',
        },
        {
          label: '退出',
          key: '/info',
        },
      ]}
    />
  );
  const infoMenu=(
    <>
      <Tabs items={infoItems}  centered size={'large'} 
        style={{width:"300px",backgroundColor:"white",boxShadow:"1px 1px 20px #aaa",borderRadius:"2px",wordWrap:"break-word"}}
        tabBarStyle={{letterSpacing:"4px"}}
        />
      <Button style={{width:"50%"}}>清除消息</Button>
      <Button style={{width:"50%"}}>查看更多</Button>
    </>
  );

  return (
    <Header className="header">
      <div className='logo'>
        <PieChartTwoTone style={{fontSize:"30px"}}/>
        <span style={{fontSize:"20px"}}>项目管理系统</span>
      </div>
      <div className='tool'>
        <QuestionCircleOutlined style={{fontSize:"20px",marginRight:"20px"}}/>
        <Dropdown overlay={menu}>
          <div style={{float:"right",width:"100px",cursor:"pointer",textAlign:"center"}}>
            <Avatar size={24} icon={<UserOutlined />} />
            <span style={{marginLeft:"10px"}}>User</span>
          </div>
        </Dropdown>
        <Dropdown overlay={infoMenu} placement="bottomRight">
          <div style={{float:"right",width:"60px",cursor:"pointer",textAlign:"center"}}>
            <Badge count={6} overflowCount={10} size="small">
              <BellOutlined  style={{color:"white",fontSize:"20px"}}/>
            </Badge>
          </div>
        </Dropdown>
      </div>
    </Header>
  )
}