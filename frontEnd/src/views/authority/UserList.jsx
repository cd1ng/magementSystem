import React, { memo,useState} from 'react'
import { Table,Row,Col, Button, Switch,Space,Drawer,Tree, Input, Form, Select, Popover } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

const {Option} = Select
const data = [
  {
    key:1,
    userName: 'cding',
    jobTitle:'超级管理员',
  },
  {
    key:2,
    userName: 'xxxxx',
    jobTitle:'经理',
  },
  {
    key:3,
    userName: 'xYY',
    jobTitle:'经理',
  }
];


const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          {
            title: '0-0-0-0',
            key: '0-0-0-0',
          },
          {
            title: '0-0-0-1',
            key: '0-0-0-1',
          },
          {
            title: '0-0-0-2',
            key: '0-0-0-2',
          },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          {
            title: '0-0-1-0',
            key: '0-0-1-0',
          },
          {
            title: '0-0-1-1',
            key: '0-0-1-1',
          },
          {
            title: '0-0-1-2',
            key: '0-0-1-2',
          },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      {
        title: '0-1-0-0',
        key: '0-1-0-0',
      },
      {
        title: '0-1-0-1',
        key: '0-1-0-1',
      },
      {
        title: '0-1-0-2',
        key: '0-1-0-2',
      },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];

const UserList = memo(() => {
  // 侧边栏树形
  const [authority, setAuthority] = useState(false)
  const [expandedKeys, setExpandedKeys] = useState(['0-0-0', '0-0-1'])
  const [checkedKeys, setCheckedKeys] = useState(['0-0-0'])
  const [selectedKeys, setSelectedKeys] = useState([])
  const [autoExpandParent, setAutoExpandParent] = useState(true)
  const showAuthority = () => {
    setAuthority(true);
  };
  const closeAuthority = () => {
    setAuthority(false);
  };
  
  const onExpand = (expandedKeysValue) => {
    console.log('onExpand', expandedKeysValue)
    setExpandedKeys(expandedKeysValue)
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue) => {
    console.log('onCheck', checkedKeysValue)
    setCheckedKeys(checkedKeysValue)
  };

  const onSelect = (selectedKeysValue, info) => {
    console.log('onSelect', info)
    setSelectedKeys(selectedKeysValue)
  };


  // 侧边栏修改用户信息
  const [user, setUser] = useState(false)
  const showUser = () => {
    setUser(true);
  };
  const closeUser = () => {
    setUser(false);
  };
  const onFinish = (values) => {
    console.log('Success:', values);
    setUser(false);
  };

  // 小窗口删除
  const [deleteUser, setDeleteUser] = useState(false);
  const userHide = () => {
    setDeleteUser(false)
  };
  const userShow = () => {
    setDeleteUser(true)
  };

  const handleOpenChange = (newOpen) => {
    setDeleteUser(newOpen);
  };

  // 侧边栏新增用户信息
  const [addUser, setAddUser] = useState(false)
  const showAddUser = () => {
    setAddUser(true);
  };
  const closeAddUser = () => {
    setAddUser(false);
  };
  const addUserFinish = (values) => {
    console.log('Success:', values);
    setAddUser(false);
  };

  const columns = [
    {
      title: '用户名称',
      dataIndex: 'userName',
      key: 'userName',
      render: (text) => <b>{text}</b>,
    },
    {
      title: '用户职位',
      dataIndex: 'jobTitle',
      key: 'jobTitle',
    },
    {
      title: '状态',
      dataIndex: 'userStatus',
      key: 'userStatus',
      render:()=><Switch />
    },
    {
      title: '操作',
      dataIndex: 'userOperation',
      key: 'userOperation',
      render:()=>{
        return(
          <Space size="middle" style={{display:"flex",width:"200px",justifyContent:"space-around"}}>
            <a onClick={showAuthority}>配置权限</a>
            <a onClick={showUser}>修改</a>
          <Popover
            content={
              <div>
                <p><QuestionCircleOutlined style={{color:"orange",fontSize:"14px",marginRight:"4px"}}/>是否要删除该用户？</p>
                <Space style={{marginLeft:"40px"}}>
                  <Button type='primary' onClick={userHide}>否</Button>
                  <Button type="primary" danger={userHide}>是</Button>
                </Space>
              </div>}
            trigger="click"
            >
              <a onClick={userShow}>删除</a>
          </Popover>
          </Space>)
      }
    },
  ];
  return(
    <div style={{height:"100%",overflowY:"auto"}}>
      <Row style={{marginTop:"40px",marginLeft:"40px"}}>
        <Col span={22} style={{backgroundColor:"#fff",paddingLeft:"20px"}}>
          <Button type='primary' style={{marginTop:"10px",marginBottom:"10px"}} onClick={showAddUser}>新增用户</Button>
        </Col>
        <Col span={22} style={{backgroundColor:"#fff",paddingLeft:"20px"}}>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Col>
      </Row>
      <Drawer title="权限配置" placement="right" onClose={closeAuthority} open={authority}>
        <Tree
          checkable
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          onCheck={onCheck}
          checkedKeys={checkedKeys}
          onSelect={onSelect}
          selectedKeys={selectedKeys}
          treeData={treeData}
        />
      </Drawer>
      <Drawer title="用户信息" placement="right" onClose={closeUser} open={user}>
        <Form onFinish={onFinish}>
          <Form.Item label="用户名称" name="userName">
            <Input />
          </Form.Item>
          <Form.Item label="用户职称" name="jobTitle">
            <Input />
          </Form.Item>
          <Form.Item label="状态" name="userStatus">
            <Switch />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType="submit">提交</Button>
            <Button htmlType="reset">取消</Button>
          </Form.Item>
        </Form>
      </Drawer>
      <Drawer title="新增用户" placement="right" onClose={closeAddUser} open={addUser}>
        <Form onFinish={addUserFinish}>
          <Form.Item label="用户编号" name="jobName">
            <Input />
          </Form.Item>
          <Form.Item label="用户名称" name="userName">
            <Input />
          </Form.Item>
          <Form.Item label="用户职称" name="jobTitle">
            <Input />
          </Form.Item>
          <Form.Item label="状态" name="userStatus">
            <Switch />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType="submit">提交</Button>
            <Button htmlType="reset">取消</Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  )
})
export default UserList