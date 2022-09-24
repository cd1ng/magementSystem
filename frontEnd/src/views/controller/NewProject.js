
import { Button, DatePicker, Form, Input } from 'antd';
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

const { RangePicker } = DatePicker;

const NewProject= () => {
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
      
      <Form.Item label="项目名称" name="projectName">
        <Input />
      </Form.Item>
      
      <Form.Item label="客户" name="customer">
        <Input />
      </Form.Item>

      <Form.Item label="时间" name="projectTime">
        <RangePicker />
      </Form.Item>
      
      <Form.Item label="项目介绍" name="projectIntro">
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default NewProject