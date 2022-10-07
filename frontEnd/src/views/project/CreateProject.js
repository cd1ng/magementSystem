// import React,{useState} from 'react';
// import { Button, Col, DatePicker, Form, Input,Row,Steps,Empty,Modal,Select } from 'antd';

// const steps = [
//   { title: '项目信息'},
//   { title: '参与人员'},
//   { title: '信息核对'},
// ];
// const { Option } = Select;

// const { RangePicker } = DatePicker
// const { Step } = Steps

// const CreateProject= () => {
//   const [current, setCurrent] = useState(0)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const next = () => setCurrent(current + 1)
//   const prev = () => setCurrent(current - 1)
//   const onFinish = (values) => console.log(values)
//   const showModal = () => setIsModalOpen(true)
//   const handleOk = () => setIsModalOpen(false)
//   const handleCancel = () => setIsModalOpen(false)

//   const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };
//   const uploadForm = (values) => {
//     fetch("http://localhost:8000/project/create", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body:JSON.stringify(values)
//     }).then(response => response.json())
//   };
//   // 使用dataForm传递会存在风险
//   // const uploadForm =(values)=>{
//   //   const data = new FormData()
//   //   data.append('projectID','xas1asda')
//   //   data.append('projectName','xas1asda')
//   //   data.append('customer','xasas1da')
//   //   data.append('beginTime','2022-08-10 03:11:00')
//   //   data.append('endTime','2022-08-10 03:11:00')
//   //   data.append('projectStatus','项目开始')

//   //   console.log(values)
//   //   console.log(data)
//   //   fetch("http://localhost:8000/project/create",{
//   //   method: 'POST',
//   //   headers: {
//   //     // 'Content-Type': 'multipart/form-data',
//   //   },
//   //   body:data
//   //   }).then(res=>res.json())
//   //   .then(res=>console.log(res))
//   // }

//   return (
//     <div style={{height:"100%",overflow:"auto"}}>
//       <Row style={{marginTop:"40px"}} >
//         <Col span={22} offset={1} style={{backgroundColor:"#fff",padding:"20px 40px"}}>
//           <b style={{fontSize:"20px"}}>新建项目步骤栏</b>
//           <Steps current={current} style={{marginTop:"10px"}}>
//             {steps.map((item) => (
//               <Step key={item.title} title={item.title} />
//             ))}
//           </Steps>
//         </Col>
//       </Row>

//       <Row style={{marginTop:"20px",marginBottom:"20px",}} >
//         <Col span={22} offset={1} style={{backgroundColor:"#fff",padding:"40px"}}>
//           {current === 0 && (
//             <Form {...layout} onFinish={uploadForm} >
//               <Form.Item label="项目编号" name="projectID">
//                 <Input />
//               </Form.Item>
            
//               <Form.Item label="项目名称" name="projectName">
//                 <Input />
//               </Form.Item>
              
//               <Form.Item label="客户" name="customer">
//                 <Select>
//                   <Option value="HW">HW</Option>
//                   <Option value="HJ">HJ</Option>
//                   <Option value="XX">XS</Option>
//                 </Select>
//               </Form.Item>

//               <Form.Item label="开始时间" name="beginTime">
//                 {/* <RangePicker /> */}
//                 <Input />
//               </Form.Item>
              
//               <Form.Item label="结束时间" name="endTime">
//                 {/* <RangePicker /> */}
//                 <Input />
//               </Form.Item>
              
//               <Form.Item label="项目状态" name="projectStatus">
//                 <Select>
//                   <Option value="start1">项目评审</Option>
//                   <Option value="start2">项目复用</Option>
//                 </Select>
//               </Form.Item>

//               <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                   提交数据
//                 </Button>
//               </Form.Item>
//             </Form>
//           )}

//           {current === 1 && (
//             <Form {...layout} onFinish={onFinish} >
//               <Form.Item label="发起人"name="support">
//                 <Input />
//               </Form.Item>
              
//               <Form.Item label="负责人" name="customer">
//                 <Input />
//               </Form.Item>

//               <Form.Item label="参与者" name="projectIntro">
//                 <Input />
//               </Form.Item>
              
//               <Form.Item label="添加关注" name="projectIntro">
//                 <Input />
//               </Form.Item>
//             </Form>
//           )}

//           {current === 2 && (
//             <div style={{border:"1px dashed rgb(0, 158, 255)",marginBottom:"20px"}}>
//               <Empty />
//             </div>
//           )}

//           <div style={{marginRight:"150px"}}>
//             {current < steps.length - 1 && (
//               <Button type="primary" onClick={() => next()} style={{float:"right"}}>
//                 下一步
//               </Button>
//             )}
//             {current === steps.length - 1 && (
//               <Button type="primary" onClick={showModal} style={{float:"right"}}>
//                 提交项目
//               </Button>
//             )}
//             {current > 0 && (
//               <Button style={{margin: '0 8px',float:"right"}} onClick={() => prev()} >
//                 上一步
//               </Button>
//             )}
//           </div>
//         </Col>
//       </Row>
//       {/* 信息核对输入框 */}
//       <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} cancelText={"取消"} okText={"提交"}>
//         <p>XXX,请确认该项目信息！</p>
//       </Modal>
//     </div>
//   );
// };

// export default CreateProject


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