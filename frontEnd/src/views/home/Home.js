import React from 'react'
import {Calendar,Card,Col,Row,Divider,Empty} from 'antd'
import { FolderOutlined,ReadOutlined,CarryOutOutlined,AlertOutlined,FormatPainterOutlined,FundProjectionScreenOutlined} from '@ant-design/icons';
import ToDoList from '../../components/todoList/ToDoList';
import styles from "./Home.module.css"

export default function Home() {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
    <div className={styles["site-card-wrapper"]}>
      <Row style={{marginTop:"40px"}}>      
        {/* 当前项目 */}
        <Col span={22} offset={1}>
          <Card title="项目详情" bordered={false}>
            <div className={styles["workspace-project"]}>
              <div className={"workspace-project-item"}>
                <p className={"item-name"}><FolderOutlined style={{ color: '#08c' }}/>项目总数</p>
                <p className={styles["item-number"]}>57</p>  
              </div>            
              <Divider type="vertical" />
              <div>
                <p className={"item-name"}><ReadOutlined style={{ color: '#2fc' }}/>评审阶段</p>
                <p className={styles["item-number"]}>3</p>  
              </div>  
              <div>
                <p className={"item-name"}><FormatPainterOutlined />调试阶段</p>
                <p className={styles["item-number"]}>8</p>  
              </div>
              <div>
                <p className={"item-name"} ><FundProjectionScreenOutlined />验证阶段</p>
                <p className={styles["item-number"]}>8</p>  
              </div>
              <div>
                <p className={"item-name"} ><CarryOutOutlined />项目已验收</p>
                <p className={styles["item-number"]}>8</p>  
              </div>
              <div>
                <p className={"item-name"}><AlertOutlined style={{ color: 'red' }}/>延期项目</p>
                <p className={styles["item-number"]} style={{color:"red"}}>8</p>  
              </div>
            </div>
          </Card>
        </Col>
        {/* 项目进展 */}
        <Col span={22} offset={1} style={{marginTop:"20px"}}>
          <Card title="项目进展" bordered={false}>
            <Empty />
          </Card>
        </Col>
      </Row>

      {/* 部门详情 */}
      <Row style={{marginTop:"20px"}}>
        <Col span={22} offset={1}>
          <Card title="部门详情" bordered={false}>
            <Empty />
          </Card>
        </Col>
      </Row>

      {/* 待办事项和日历 */}
      <Row style={{marginTop:"20px"}}>
        <Col span={12} offset={1}>
          <Card title="待办事项" bordered={false}>
            <ToDoList />
            {/* <Button type="primary" onClick={openNotification}>
              通知信息
            </Button> */}
          </Card>
        </Col>
        <Col span={9} offset={1}>
          <Card title="日历" bordered={false}>
              <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </Card>
        </Col>
      </Row>
    </div>
  )
}
