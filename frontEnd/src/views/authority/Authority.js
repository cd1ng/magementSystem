import React from 'react';
import { Table,Divider, Tag,Switch,Row,Col} from 'antd';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const columns = [
  {
    title: '人员职位',
    dataIndex: 'jobType',
    key: 'jobType',
  },
  {
    title: '权限等级',
    dataIndex: 'powerClass',
    key: 'powerClass',
  },
  // '项目全体人员,项目负责人,项目参与者,项目关注人员
  {
    title: '权限修改',
    key: 'action',
    render: (_, record) => (
      <Switch defaultChecked onChange={onChange} />
    ),
  },
];

const data = [
  {
    key:'0',
    jobType:'超级管理员',
    powerClass:(
      <>
        <Tag>全部权限</Tag>
      </>
    )
  },
  {
    key:'1',
    jobType:'经理',
    powerClass:(
      <>
        <Tag>全部权限</Tag>
      </>
    )
  },
  {
    key:'2',
    jobType:'主管',
    powerClass:(
      <>
        <Tag>查看所有项目权限</Tag>
      </>
    )
  },
  {
    key:'3',
    jobType:'工程师',
    powerClass:(
      <>
        <Tag>查看自己负责的项目</Tag>
      </>
    )
  },
  {
    key:'4',
    jobType:'技术员',
    powerClass:(
      <>
        <Tag>查看调试相关的内容</Tag>
      </>
    )
  },
];

const Authority = () => {
  return(
    <Row style={{marginTop:"40px"}} >
      <Col span={22} offset={1} style={{backgroundColor:"#fff",padding:"20px 40px"}}>
      <Divider orientation="left">消息设置</Divider>
      <Table columns={columns} dataSource={data} pagination={false}/>
      </Col>
    </Row>

  )
}
export default Authority;