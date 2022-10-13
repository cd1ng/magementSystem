import React, { memo } from 'react'
import {Drawer,Form,Select,Input,Switch,Button} from 'antd'

const {Option} = Select

const handleChange = (value) => {
 console.log(`selected ${value}`);
};

export const SidebarChangeUser = memo((props) => {
  const {user, setUser} = props
  const closeUser = () => setUser(false)
  const onFinish = (values) => {
    console.log('Success:', values)
    setUser(false)
  };
  return (
  <Drawer title="用户信息" placement="right" onClose={closeUser} open={user}>
    <Form onFinish={onFinish}>
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
      <Form.Item>
        <Button type='primary' htmlType="submit">提交</Button>
        <Button htmlType="reset">取消</Button>
      </Form.Item>
    </Form>
  </Drawer>
  )
})

