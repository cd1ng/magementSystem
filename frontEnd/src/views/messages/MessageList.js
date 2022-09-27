import React from 'react';
import { Table} from 'antd';


const data = [
  {
    informationTitle: '1XAXSXASXSXAS',
    informationBody:'项目评审',
    informationTime:'2020/11/12',
  },
  {
    informationTitle: '1XAXSXASXSXAS',
    informationBody:'项目评审',
    informationTime:'2020/11/12',
  },
  {
    informationTitle: '1XAXSXASXSXAS',
    informationBody:'项目评审',
    informationTime:'2020/11/12',
  },
  {
    informationTitle: '1XAXSXASXSXAS',
    informationBody:'项目评审',
    informationTime:'2020/11/12',
  },
  {
    informationTitle: '1XAXSXASXSXAS',
    informationBody:'项目评审',
    informationTime:'2020/11/12',
  },
];

const MessageList = () => {
  const columns = [
    {
      title: '通知标题',
      dataIndex: 'informationTitle',
      key: 'informationTitle',
      render: (text) => <b>{text}</b>,
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
export default MessageList;