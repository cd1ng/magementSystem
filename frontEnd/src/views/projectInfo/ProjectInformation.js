import React,{useState} from 'react'
import {withRouter} from 'react-router-dom'
import {Row,Col,Anchor,Affix,PageHeader,BackTop,Form ,message, Upload,Timeline,Button} from 'antd'
import { UpCircleTwoTone ,UploadOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux'

//上传文件----------------
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },

  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
//------------------


const { Link } = Anchor;
// const onChange = (link) => {
//   console.log('Anchor:OnChange', link);
// };

function ProjectInformation(props) {
  const [container, setContainer] = useState(null)
  const currentUser = useSelector(state => state.UserReducer.userName)
  const code = props.location.pathname.slice(25)
  return (
    <div className="scrollable-container" ref={setContainer} style={{height:"100%",overflowY:"auto"}}>     
      <Affix target={() => container} style={{ position: 'absolute', top: 80, right: 30}}>
        <Anchor>
          <Link href="#baseInfo" title="基本信息" />
          <Link href="#person" title="人员安排" />
          <Link href="#process" title="项目进度" />
          <Link href="#fileUpload" title="文件上传" />
        </Anchor>
      </Affix>

      {/* TODO 问题刷新后Dom获取不到 */}
      {/* <BackTop target={() => container}>
        <UpCircleTwoTone style={{ fontSize: '36px'}}/>
      </BackTop> */}


      <PageHeader title="项目信息" style={{marginLeft:"20px"}}/> 
      
      <p id="baseInfo" style={{marginLeft:"45px",fontSize:"16px",fontWeight:"bold"}}>基本信息</p>
      <Row>
        <Col span={20} offset={1} style={{backgroundColor:"#fff",padding:"20px"}}>
          <Form>
            <Form.Item label="申请人">
              {currentUser}
            </Form.Item>
            <Form.Item label="项目编码">
              {code}
            </Form.Item>
            <Form.Item label="客户名称">
              HW
            </Form.Item>
            <Form.Item label="项目时间">
              2020/05/24-2021/10/09
            </Form.Item>
          </Form>
        </Col>
      </Row>
      
      <p id="person" style={{marginLeft:"45px",fontSize:"16px",fontWeight:"bold",marginTop:"20px"}}>人员安排</p>
      <p style={{marginLeft:"45px",fontSize:"12px"}}>设置项目的参与人员和关注</p>
      <Row>
        <Col span={20} offset={1} style={{backgroundColor:"#fff",padding:"20px"}}>
          <div style={{height:"300px"}}>
          </div>
        </Col>
      </Row>

      <p id="process" style={{marginLeft:"45px",fontSize:"16px",fontWeight:"bold",marginTop:"20px"}}>项目进度</p>
      <p style={{marginLeft:"45px",fontSize:"12px"}}>以图表的形式体现项目进度</p>
      <Row>
        <Col span={20} offset={1} style={{backgroundColor:"#fff",padding:"20px"}}>
          <div style={{height:"300px"}}>
          </div>
        </Col>
      </Row>

      <p id="fileUpload" style={{marginLeft:"45px",fontSize:"16px",fontWeight:"bold",marginTop:"20px"}}>文件上传</p>
      <p style={{marginLeft:"45px",fontSize:"12px"}}>以时间轴的显示文件更新</p>
      <Row style={{marginBottom:"40px"}}>
        <Col span={20} offset={1} style={{backgroundColor:"#fff",padding:"40px",display:"flex",justifyContent:"space-between"}}>
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
          <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
          </Timeline>
        </Col>
      </Row>
    </div>
  )
}
export default withRouter(ProjectInformation)