import React,{useEffect, useRef,useState} from 'react';
import { Table,Row,Col,Button,Select,DatePicker } from 'antd';
import { useHistory } from 'react-router-dom';
const { RangePicker } = DatePicker;
const { Option } = Select;

const ProjectList = () => {
    const history = useHistory()
    const inputRef = useRef()
    const [project,setProject] = useState([])
    const handleSearch = ()=>console.log(inputRef.current.value)
    useEffect(()=>{
      fetch("http://localhost:8000/project/allProjects")
      .then(res=>res.json())
      .then(res=>setProject(res.result))
    },[])
    const columns = [
    {
      title: '项目编号',
      dataIndex: 'projectID',
      key: 'projectID',
      render: (text) => <a onClick={(e)=>history.push('/project/list/'+e.target.innerHTML)}>{text}</a>,
    },
    {
      title: '项目名',
      dataIndex: 'projectName',
      key: 'projectName',
      render: (text) => <b>{text}</b>,
    },
    {
      title: '客户',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: '起始时间',
      dataIndex: 'beginTime',
      key: 'beginTime',
    },
    {
      title: '项目交期',
      key: 'endTime',
      dataIndex: 'endTime',
    },
    {
      title: '项目状态',
      key: 'projectStatus',
      dataIndex: 'projectStatus',
    },
    ];
    let data = []
    project.map((item)=>data.push({
      'key':item.id,
      'projectID': item.projectID,
      'projectName':item.projectName,
      'customer': item.customer,
      'projectStatus':item.projectStatus,
      'beginTime':item.beginTime,
      'endTime':item.endTime
    }))
  return(
    <div style={{height:"100%",overflowY:"auto"}}>
    <Row style={{marginTop:"40px"}} >
        <Col span={22} offset={1} style={{backgroundColor:"#fff",padding:"20px 40px"}}>
          <span>搜索条件</span>
          <input type="text" ref={inputRef} className="historyInput"/>
          <Button type="primary" onClick={()=>handleSearch()}>搜索</Button>
        </Col>
        <Col span={22} offset={1} style={{backgroundColor:"#fff",padding:"20px 40px"}}>
          <span>客户选择</span>
          <Select
            defaultValue="lucy"
            style={{width: 120,}}
            allowClear
          >
            <Option value="HW">Lucy</Option>
            <Option value="HJ">Jack</Option>
            <Option value="XX">Lucy</Option>
          </Select>
        </Col>
        <Col span={22} offset={1} style={{backgroundColor:"#fff",padding:"20px 40px"}}>
          <span>日期选择</span>
          <RangePicker />
        </Col>
      </Row>
    <Row style={{marginTop:"20px"}} >
      <Col span={22} offset={1} style={{backgroundColor:"#fff",padding:"20px 40px"}}>
        <Table columns={columns} dataSource={data} /> 
      </Col>
    </Row>
    </div>
  )
}

export default ProjectList;