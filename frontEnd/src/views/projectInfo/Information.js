import React,{useState,useRef,useEffect} from 'react';
import { Space, Table,Row,Col,Modal,Timeline,Button,Select,DatePicker } from 'antd';
import { useHistory } from 'react-router-dom';
import styles from "./Information.module.css"
const { RangePicker } = DatePicker;
const { Option } = Select;
const data = [
  {
    key:'1',
    projectID: '1XAXSXASXSXAS',
    projectName: 'JXSAXSAXSAXAXA',
    customer: 'HW',
    projectStatus:'项目评审',
    beginTime:'2020/11/12',
    endTime:'2022/11/16',
  },
  {
    key: '2',
    projectID: 'Smkfmk1e12123S',
    projectName: 'xsaamCMKACAXA',
    customer: 'HW',
    projectStatus:'评审阶段',
    beginTime:'2021/11/12',
    endTime:'2022/5/4',
  },
  {
    key: '3',
    projectID: 'XSAAXAASL',
    projectName: 'XSALXXSAXASXSAX',
    customer: 'HJ',
    projectStatus:'生产阶段',
    beginTime:'2022/3/4',
    endTime:'2022/8/18',
  },
    {
    key: '4',
    projectID: 'CDS1XAXSXASXSXAS',
    projectName: 'SAXSAAXSAXSAXAXA',
    customer: 'XJ',
    projectStatus:'生产阶段',
    beginTime:'2020/11/12',
    endTime:'2022/11/16',
  },
  {
    key: '5',
    projectID: 'PPAS132CCDSCZ',
    projectName: 'MSKMXKA13213',
    customer: 'HJ',
    projectStatus:'项目逾期',
    beginTime:'2019/08/19',
    endTime:'2021/02/38',
  },
];

const Information = () => {
  const history = useHistory()

  const [isTextOpen, setIsTextOpen] = useState(false)
  const showTextModal = () => setIsTextOpen(true)
  const handleTextOk = () => setIsTextOpen(false)
  const handleTextCancel = () => setIsTextOpen(false)
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
    inputRef.current.value = ''
  }, [])

  const handleSearch = ()=>console.log(inputRef.current.value)
  
  const columns = [
  {
    title: '项目编号',
    dataIndex: 'projectID',
    key: 'projectID',
    render: (text) => <a onClick={(e)=>history.push('/projectInfo/information/'+e.target.innerHTML)}>{text}</a>,
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
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>项目变更</a>
        <a onClick={showTextModal}>提交资料</a>
      </Space>
    ),
  },
];
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

      <Modal title="提交资料" open={isTextOpen} onOk={handleTextOk} onCancel={handleTextCancel} 
        width={1100} footer={null} bodyStyle={{display:"flex",padding:0}}
        wrapClassName={styles.modalType}
      >
        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
        </Timeline>
      </Modal>
    </div>
  )
}
export default Information;