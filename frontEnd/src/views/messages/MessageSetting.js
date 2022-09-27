import React from 'react';
import { Table,Divider, Tag,Switch} from 'antd';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const columns = [
  {
    title: '通知类型',
    dataIndex: 'informationType',
    key: 'informationType',
  },
  {
    title: '触发条件',
    dataIndex: 'informationTime',
    key: 'informationTime',
  },
  { 
    title: '通知对象',
    dataIndex: 'informationPerson',
    key: 'informationPerson',
  },
  // '项目全体人员,项目负责人,项目参与者,项目关注人员
  {
    title: '通知开启',
    key: 'action',
    render: (_, record) => (
      <Switch defaultChecked onChange={onChange} />
    ),
  },
];

const data = [
  {
    key:'1',
    informationType:'项目指派',
    informationTime:(
      <>
        <Tag color="processing">阶段开始时进行通知</Tag>
      </>
    ),
    informationPerson:(
      <>
        <Tag>项目全体人员</Tag>
      </>
    )
  },
  {
    key:'2',
    informationType:'项目评审',
    informationTime:(
      <>
        <Tag color="processing">阶段开始时进行通知</Tag>
        <Tag color="warning">阶段到期时间之前3天</Tag>
      </>
    ),    
    informationPerson:(
      <>
        <Tag>项目全体人员</Tag>
      </>
    )
  },
  {
    key:'3',
    informationType:'项目调试',
    informationTime:(
      <>
        <Tag color="processing">阶段开始时进行通知</Tag>
        <Tag color="warning">阶段到期时间之前5天</Tag>
      </>
    ),
    informationPerson:<Tag>项目全体人员</Tag>
  },
  {
    key:'4',
    informationType:'项目验证',
    informationTime:(
      <>
        <Tag color="processing">阶段开始时进行通知</Tag>
        <Tag color="warning">阶段到期时间之前5天</Tag>
      </>
    ),
    informationPerson:<Tag>项目全体人员</Tag>
  },
  {
    key:'5',
    informationType:'项目延期',
    informationTime:(
    <>
      <Tag color="error">超出项目周期</Tag>
    </>),
    informationPerson:<Tag>项目全体人员</Tag>
  },
  {
    key:'6',
    informationType:'项目结束',
    informationTime:(
      <>
        <Tag color="success">项目发起人确认</Tag>
      </>
    ),
    informationPerson:<Tag>项目全体人员</Tag>
  },
  {
    key:'7',
    informationType:'项目暂停',
    informationTime:(
      <>
        <Tag color="processing">项目发起人确认</Tag>
      </>
    ),
    informationPerson:<Tag>项目全体人员</Tag>
  },
];

const MessageSetting = () => {
  return(
    <>
      <Divider orientation="left">消息设置</Divider>
      <Table columns={columns} dataSource={data} pagination={false}/>
    </>
  )
}
export default MessageSetting;