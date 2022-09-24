import { Space, Table } from 'antd';
import React from 'react';
const columns = [
  {
    title: '项目编号',
    dataIndex: 'projectID',
    key: 'projectID',
    render: (text) => <b>{text}</b>,
  },
  {
    title: '项目名',
    dataIndex: 'projectName',
    key: 'projectName',
    render: (text) => <b>{text}</b>,
  },
  {
    title: '项目负责人',
    dataIndex: 'projectManager',
    key: 'projectManager',
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
        <span>项目变更</span>
        <span>提交资料</span>
      </Space>
    ),
  },
];

const data = [
  {
    key:'1',
    projectID: '1XAXSXASXSXAS',
    projectName: 'JXSAXSAXSAXAXA',
    projectManager:'you',
    customer: 'HW',
    projectStatus:'项目评审',
    beginTime:'2020/11/12',
    endTime:'2022/11/16',
  },
  {
    key: '2',
    projectID: 'Smkfmk1e12123S',
    projectName: 'xsaamCMKACAXA',
    projectManager:'you',
    customer: 'HW',
    projectStatus:'评审阶段',
    beginTime:'2021/11/12',
    endTime:'2022/5/4',
  },
  {
    key: '3',
    projectID: 'XSAAXAASL',
    projectName: 'XSALXXSAXASXSAX',
    projectManager:'you',
    customer: 'HJ',
    projectStatus:'生产阶段',
    beginTime:'2022/3/4',
    endTime:'2022/8/18',
  },
    {
    key: '4',
    projectID: 'CDS1XAXSXASXSXAS',
    projectName: 'SAXSAAXSAXSAXAXA',
    projectManager:'me',
    customer: 'XJ',
    projectStatus:'生产阶段',
    beginTime:'2020/11/12',
    endTime:'2022/11/16',
  },
  {
    key: '5',
    projectID: 'PPAS132CCDSCZ',
    projectName: 'MSKMXKA13213',
    projectManager:'me',
    customer: 'HJ',
    projectStatus:'项目逾期',
    beginTime:'2019/08/19',
    endTime:'2021/02/38',
  },
];

const Information = () => <Table columns={columns} dataSource={data} />;

export default Information;