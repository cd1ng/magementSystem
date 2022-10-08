import React, { memo } from 'react'
import {Drawer,Form,Select,Input,Switch,Button,message} from 'antd'

const {Option} = Select
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const SidebarAddUser = memo((props) => {
  const {addUser, setAddUser} = props
  const closeAddUser = () => setAddUser(false)
  const addUserFinish = async(values) => {
    console.log(values)
    await fetch("http://localhost:8000/users/register", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(values)
    }).then(res => res.json())
    .then(res=>{
      if(res.code===0){
        message.info("添加用户成功")
      }else{
        message.error("添加用户失败")
      }
    }).then(setAddUser(false))
    // .then(window.location.reload())
  }

  return (
  <Drawer title="新增用户" placement="right" onClose={closeAddUser} open={addUser}>
    <Form onFinish={addUserFinish}>
      <Form.Item label="员工编号" name="jobNumber">
        <Input />
      </Form.Item>
      <Form.Item label="用户名称" name="userName">
        <Input />
      </Form.Item>
      <Form.Item label="用户职称" name="jobTitle">
        <Select style={{width: 120}} onChange={handleChange}>
          <Option value="admin">超级管理员</Option>
          <Option value="manger">经理</Option>
          <Option value="supervisor">主管</Option>
          <Option value="engineer">工程师</Option>
        </Select>
      </Form.Item>
      <Form.Item label="用户密码" name="password">
        <Input/>
      </Form.Item>
      <Form.Item label="状态" name="permission">
        <Switch defaultChecked="true"/>
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType="submit">提交</Button>
        <Button htmlType="reset">取消</Button>
      </Form.Item>
    </Form>
  </Drawer>
  )
})

export default SidebarAddUser