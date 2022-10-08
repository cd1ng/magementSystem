import React,{useState} from 'react'
import {withRouter} from 'react-router-dom'
import {Row,Col,PageHeader,Input,Form,Select,DatePicker } from 'antd'
import { useSelector } from 'react-redux'

const layout = {
  labelCol: {span: 6},
  wrapperCol: {span: 14},
}
const { Option } = Select
const { RangePicker } = DatePicker
const uploadForm = (values) => {
  fetch("http://localhost:8000/project/create", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(values)
  }).then(response => response.json())
}

function CreateProject(props) {
  const [container, setContainer] = useState(null)
  const currentUser = useSelector(state => state.UserReducer.userName)
  
  return (
    <div className="scrollable-container" ref={setContainer} style={{height:"100%",overflowY:"auto"}}>     
      <PageHeader title="项目信息" style={{marginLeft:"20px"}}/> 
      
      <p id="baseInfo" style={{marginLeft:"45px",fontSize:"16px",fontWeight:"bold"}}>基本信息</p>
      <Row>
        <Col span={20} offset={1} style={{backgroundColor:"#fff",padding:"20px"}}>
          <Form {...layout} onFinish={uploadForm} >
            <Form.Item label="申请人">
              {currentUser}
            </Form.Item>
            <Form.Item label="项目编码">
              <Input />
            </Form.Item>
            <Form.Item label="客户名称">
              <Select>
                <Option value="HW">HW</Option>
                <Option value="HJ">HJ</Option>
                <Option value="XX">XS</Option>
              </Select>
            </Form.Item>
            <Form.Item label="项目类型">
              <Select>
                <Option value="newProject">新开项目</Option>
                <Option value="oldProject">旧项目整改</Option>
                <Option value="copyProject">复制项目</Option>
              </Select>
            </Form.Item>
            <Form.Item label="项目周期">
              <Select>
                <Option value="45">45day</Option>
                <Option value="60">60day</Option>
                <Option value="90">90day</Option>
                <Option value="120">120day</Option>
              </Select>
            </Form.Item>
            <Form.Item label="项目时间">
              <RangePicker />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
export default withRouter(CreateProject)