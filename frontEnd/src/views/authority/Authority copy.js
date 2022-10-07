import React,{useState} from 'react';
import { Table,Divider, Tag,Switch,Row,Col, Button,Tree, Modal } from 'antd';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

const treeData = [
  {
    title: '项目数据',
    key: '0',
  },
  {
    title: '项目查看',
    key: '1',
  },
  {
    title: '项目修改',
    key: '2',
  },
  {
    title: '消息设置',
    key: '3',
  },
];

const data = [
  {
    key:'0',
    jobType:'超级管理员',
    children:[
      {
        key:'10',
        jobType:"cd1ng",
        powerClass:(
        <>
          <Tag>项目图表</Tag>
          <Tag>项目查看</Tag>
          <Tag>项目修改</Tag>
          <Tag>消息记录</Tag>
        </>
        ),
      }
    ]
  },
  {
    key:'1',
    jobType:'经理',
    children:[
      {
        key:'11',
        jobType:"xxx",
        powerClass:(
        <>
          <Tag>项目图表</Tag>
          <Tag>项目查看</Tag>
          <Tag>项目修改</Tag>
          <Tag>消息记录</Tag>
        </>
        ),
      },
      {
        key:'12',
        jobType:"yyy",
        powerClass:(
        <>
          <Tag>项目图表</Tag>
          <Tag>项目查看</Tag>
          <Tag>项目修改</Tag>
          <Tag>消息记录</Tag>
        </>
        ),
      }
    ]
  },
  {
    key:'2',
    jobType:'主管',
    children:[
      {
        key:'13',
        jobType:"zsa",
        powerClass:(
        <>
          <Tag>项目数据</Tag>
          <Tag>项目查看</Tag>
          <Tag>项目修改</Tag>
        </>
        ),
      },
      {
        key:'14',
        jobType:"zsf",
        powerClass:(
        <>
          <Tag>项目数据</Tag>
          <Tag>项目查看</Tag>
          <Tag>项目修改</Tag>
        </>
        ),
      }
    ]
  },
  {
    key:'3',
    jobType:'工程师',
    children:[
      {
        key:'15',
        jobType:"gas",
        powerClass:(
        <>
          <Tag>项目查看</Tag>
          <Tag>项目修改</Tag>
        </>
        ),
      },
      {
        key:'16',
        jobType:"xha",
        powerClass:(
        <>
          <Tag>项目查看</Tag>
          <Tag>项目修改</Tag>
        </>
        ),
      }
    ]
  },
  {
    key:'4',
    jobType:'技术员',
    children:[
      {
        key:'17',
        jobType:"bax",
        powerClass:(
        <>
          <Tag>项目查看</Tag>
        </>
        ),
      },
      {
        key:'18',
        jobType:"zhs",
        powerClass:(
        <>
          <Tag>项目查看</Tag>
        </>
        ),
      }
    ]
  },
];

const Authority = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
  {
    title: '人员职位',
    dataIndex: 'jobType',
    key: 'jobType',
  },
  {
    title: '权限',
    dataIndex: 'powerClass',
    key: 'powerClass',
  },
  {
    title: '权限修改',
    key: 'action',
    render: (_, record) => (
      <>
        <Switch defaultChecked onChange={onChange} style={{marginRight:"10px"}}/>
        <Button onClick={showModal}>配置</Button>
      </>
    ),
  },
];
  return(
    <Row style={{marginTop:"40px",overflow:"auto",height:"550px"}}>
      <Col span={22} offset={1} style={{backgroundColor:"#fff",padding:"20px 40px"}}>
      <Divider orientation="left">权限设置</Divider>
      <Table columns={columns} dataSource={data} pagination={false}/>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Tree
          checkable
          defaultExpandedKeys={['0-0-0', '0-0-1']}
          defaultSelectedKeys={['0-0-0', '0-0-1']}
          defaultCheckedKeys={['0-0-0', '0-0-1']}
          onSelect={onSelect}
          onCheck={onCheck}
          treeData={treeData}
        />
      </Modal>
      </Col>
    </Row>

  )
}
export default Authority;