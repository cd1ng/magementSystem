import React from 'react';
import { Table} from 'antd';


const data = [
  {
    key:'1',
    informationTitle: '1XAXSXASXSXAS',
    organizer: 'JXSAXSAXSAXAXA',
    informationBody:'项目评审',
    informationTime:'2020/11/12',
  },
  {
    key:'2',
    informationTitle: '1XAXSXASXSXAS',
    organizer: 'JXSAXSAXSAXAXA',
    informationBody:'项目评审',
    informationTime:'2020/11/12',
  },
  {
    key:'3',
    informationTitle: '1XAXSXASXSXAS',
    organizer: 'JXSAXSAXSAXAXA',
    informationBody:'项目评审',
    informationTime:'2020/11/12',
  },
  {
    key:'4',
    informationTitle: '1XAXSXASXSXAS',
    organizer: 'JXSAXSAXSAXAXA',
    informationBody:'项目评审',
    informationTime:'2020/11/12',
  },
  {
    key:'5',
    informationTitle: '1XAXSXASXSXAS',
    organizer: 'JXSAXSAXSAXAXA',
    informationBody:'项目评审',
    informationTime:'2020/11/12',
  },
];

const InfoRecord = () => {
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
      title: '通知类型',
      dataIndex: 'informationBody',
      key: 'informationBody',
    },
    {
      title: '通知时间',
      dataIndex: 'informationTime',
      key: 'informationTime',
    },
  ];
  return(
      <Table columns={columns} dataSource={data} />
  )
}
export default InfoRecord;