import React, { useState, useEffect } from 'react';
import { Table, Switch, Row, Col, Tag } from 'antd';
import transformTree from '../../utils/transformTree';

const AuthorityList = () => {
  const [authority, setAuthority] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/router/findRoutes')
      .then((res) => res.json())
      .then((res) => setAuthority(transformTree(res.result)));
  }, [authority]);

  // 获取路由权限
  const onChange = (item) => {
    let temp = [];
    temp.push({ id: item.id, pagePermission: 1 - item.pagePermission });
    fetch('http://localhost:8000/router/changeRoutes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(temp),
    })
      .then((res) => res.json())
      .then((res) => setAuthority(transformTree(res.result)));
  };

  const columns = [
    {
      title: '权限详情',
      dataIndex: 'routerTitle',
      key: 'routerTitle',
      render: (text, item) => {
        return (
          <>
            {item.grade === 3 ? (
              <Tag color='processing'>权限</Tag>
            ) : (
              <Tag color='success'>菜单</Tag>
            )}
            <b>{text}</b>
          </>
        );
      },
    },
    {
      title: '权限修改',
      key: 'action',
      render: (item) => {
        return (
          <>
            <Switch
              checked={item.pagePermission}
              onChange={() => onChange(item)}
            />
          </>
        );
      },
    },
  ];
  return (
    <Row style={{ marginTop: '40px', overflow: 'auto', height: '550px' }}>
      <Col
        span={22}
        offset={1}
        style={{ backgroundColor: '#fff', padding: '20px 40px' }}
      >
        <Table columns={columns} dataSource={authority} pagination={false} />
      </Col>
    </Row>
  );
};
export default AuthorityList;
