
import { Button, Form, Input } from 'antd';
import React from 'react';

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 10,
    offset:1,
  },
};


const NewInfo = () => {
  const onFinish = (values) => {
    console.log(values)
  };

  return (
    <Form {...layout} onFinish={onFinish} >

      <Form.Item
        label="项目编号"
        name="projectId"
      >
        <Input />
      </Form.Item>
      
      <Form.Item label="通知标题" name="InfoTitle">
        <Input />
      </Form.Item>
      
      <Form.Item label="通知信息" name="InfoText">
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default NewInfo;