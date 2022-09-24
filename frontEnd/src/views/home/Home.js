import React from 'react'
import {Calendar,Card,Col,Row,Button,notification, Space,Divider,Empty} from 'antd'
import { FolderOutlined,ReadOutlined,CarryOutOutlined,AlertOutlined,FormatPainterOutlined,FundProjectionScreenOutlined} from '@ant-design/icons';
import ToDoList from '../../components/ToDoList';
const openNotification = () => {
  const args = {
    message: '通知',
    description:"通知信息",
    duration: 0,
  };
  notification.open(args);
};
export default function Home() {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
      <div className="site-card-wrapper">
        <Row gutter={24} justify={'center'}>      
          <Space
            direction="vertical"
            size="middle"
            style={{display: 'flex'}}
          >
            {/* 当前项目 */}
            <Col span={24}>
              <div>项目详情</div>
              <div className={"workspace-project"}>
                <div className={"workspace-project-item"}>
                  <p className={"item-name"}><FolderOutlined style={{ color: '#08c' }}/>项目总数</p>
                  <p className={"item-number"}>57</p>  
                </div>            
                <Divider type="vertical" />
                <div className={"workspace-project-item"}>
                  <p className={"item-name"}><ReadOutlined style={{ color: '#2fc' }}/>评审阶段</p>
                  <p className={"item-number"}>3</p>  
                </div>  
                <div className={"workspace-project-item"}>
                  <p className={"item-name"}><FormatPainterOutlined />生产阶段</p>
                  <p className={"item-number"}>8</p>  
                </div>
                <div className={"workspace-project-item"}>
                  <p className={"item-name"} ><FundProjectionScreenOutlined />验证阶段</p>
                  <p className={"item-number"}>8</p>  
                </div>
                <div className={"workspace-project-item"}>
                  <p className={"item-name"} ><CarryOutOutlined />项目已验收</p>
                  <p className={"item-number"}>8</p>  
                </div>
                <div className={"workspace-project-item"}>
                  <p className={"item-name"}><AlertOutlined style={{ color: 'red' }}/>延期项目</p>
                  <p className={"item-number"} style={{color:"red"}}>8</p>  
                </div>
              </div>
            </Col>
            {/* 项目进展 */}
            <Col span={24}>
              <Card title="项目进展" bordered={false}>
                <Empty />
              </Card>
            </Col>
            {/* 部门详情 */}
            <Row gutter={24}>
              <Col span={24}>
                <Card title="部门详情" bordered={false}>
                  <Empty />
                </Card>
              </Col>
            </Row>
            {/* 待办事项和日历 */}
            <Row gutter={24}>
              <Col span={14}>
                <Card title="待办事项" bordered={false}>
                  <ToDoList />
                  <Button type="primary" onClick={openNotification}>
                    通知信息
                  </Button>
                </Card>
              </Col>

              <Col span={9}>
                <Card title="日历" bordered={false}>
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </Card>
              </Col>
            </Row>
          </Space>
        </Row>
      </div>
  )
}
