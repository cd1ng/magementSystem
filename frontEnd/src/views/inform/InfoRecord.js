import { Space, Table } from 'antd';
import React from 'react';
const columns = [
  {
    title: '通知标题',
    dataIndex: 'informationTitle',
    key: 'informationTitle',
    render: (text) => <b>{text}</b>,
  },
  {
    title: '发起人',
    dataIndex: 'organizer',
    key: 'organizer',
  },
  {
    title: '通知主题',
    dataIndex: 'informationBody',
    key: 'informationBody',
  },
  {
    title: '起始时间',
    dataIndex: 'beginTime',
    key: 'beginTime',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <span>修改通知</span>
      </Space>
    ),
  },
];

const data = [
  {
    key:'1',
    informationTitle: '1XAXSXASXSXAS',
    organizer: 'JXSAXSAXSAXAXA',
    informationBody:'项目评审',
    beginTime:'2020/11/12',
  },
  {
    key:'2',
    informationTitle: '1XAXSXASXSXAS',
    organizer: 'JXSAXSAXSAXAXA',
    informationBody:'项目评审',
    beginTime:'2020/11/12',
  },
  {
    key:'3',
    informationTitle: '1XAXSXASXSXAS',
    organizer: 'JXSAXSAXSAXAXA',
    informationBody:'项目评审',
    beginTime:'2020/11/12',
  },
  {
    key:'4',
    informationTitle: '1XAXSXASXSXAS',
    organizer: 'JXSAXSAXSAXAXA',
    informationBody:'项目评审',
    beginTime:'2020/11/12',
  },
  {
    key:'5',
    informationTitle: '1XAXSXASXSXAS',
    organizer: 'JXSAXSAXSAXAXA',
    informationBody:'项目评审',
    beginTime:'2020/11/12',
  },
];

const InfoRecord = () => <Table columns={columns} dataSource={data} />;

export default InfoRecord;