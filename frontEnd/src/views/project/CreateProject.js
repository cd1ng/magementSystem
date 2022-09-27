import React,{useState} from 'react';
import { Button, Col, DatePicker, Form, Input,Row,Steps,Empty,Modal} from 'antd';

const layout = {
  labelCol: {span: 6},
  wrapperCol: {span: 14},
};

const steps = [
  { title: '项目信息'},
  { title: '参与人员'},
  { title: '信息核对'},
];

const { RangePicker } = DatePicker
const { Step } = Steps

const CreateProject= () => {
  const [current, setCurrent] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const next = () => setCurrent(current + 1)
  const prev = () => setCurrent(current - 1)
  const onFinish = (values) => console.log(values)
  const showModal = () => setIsModalOpen(true)
  const handleOk = () => setIsModalOpen(false)
  const handleCancel = () => setIsModalOpen(false)

  return (
    <div>
      <Row style={{marginTop:"40px"}} >
        <Col span={22} offset={1} style={{backgroundColor:"#fff",padding:"20px 40px"}}>
          <b style={{fontSize:"20px"}}>新建项目步骤栏</b>
          <Steps current={current} style={{marginTop:"10px"}}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </Col>
      </Row>

      <Row style={{marginTop:"20px",marginBottom:"20px",}} >
        <Col span={22} offset={1} style={{backgroundColor:"#fff",padding:"40px"}}>
          {current === 0 && (
            <Form {...layout} onFinish={onFinish} >
              <Form.Item label="项目编号" name="projectId">
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
            </Form>
          )}

          {current === 1 && (
            <Form {...layout} onFinish={onFinish} >
              <Form.Item label="发起人"name="support">
                <Input />
              </Form.Item>
              
              <Form.Item label="负责人" name="customer">
                <Input />
              </Form.Item>

              <Form.Item label="参与者" name="projectIntro">
                <Input />
              </Form.Item>
              
              <Form.Item label="添加关注" name="projectIntro">
                <Input />
              </Form.Item>
            </Form>
          )}
          {current === 2 && (
            
            <div style={{border:"1px dashed rgb(0, 158, 255)",marginBottom:"20px"}}>
              <Empty />
            </div>
          )}
          <div style={{marginRight:"150px"}}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()} style={{float:"right"}}>
                下一步
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={showModal} style={{float:"right"}}>
                提交项目
              </Button>
            )}
            {current > 0 && (
              <Button style={{margin: '0 8px',float:"right"}} onClick={() => prev()} >
                上一步
              </Button>
            )}
          </div>
        </Col>
      </Row>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} cancelText={"取消"} okText={"提交"}>
        <p>XXX,请确认该项目信息！</p>
      </Modal>
    </div>
  );
};

export default CreateProject