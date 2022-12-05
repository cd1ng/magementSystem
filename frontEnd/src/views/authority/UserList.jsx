import React, { memo, useEffect, useState } from 'react';
import { Table, Row, Col, Button, Switch, Space, Popover } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import {
  SidebarAddUser,
  SidebarChangeUser,
  SidebarTrees,
} from '../../components';

const UserList = memo(() => {
  // 树形结构设置
  const [authority, setAuthority] = useState(false);
  // 传入checked数据
  const [itemId, setItemId] = useState(0);
  const [checkedKeys, setCheckedKeys] = useState([]);
  // 设置用户列表
  const [userList, setUserList] = useState([]);
  const showAuthority = (item) => {
    if (item.path) {
      setCheckedKeys(item.path.split(',').map(Number));
    } else {
      setCheckedKeys([]);
    }
    setItemId(item.id);
    setAuthority(true);
  };

  // 侧边栏修改用户信息
  const [user, setUser] = useState(false);
  const showUser = () => setUser(true);

  // 小窗口删除
  const [_, setDeleteUser] = useState(false);
  const userHide = () => setDeleteUser(false);
  const userDelete = (item) => {
    setDeleteUser(false);
    let obj = { id: item.id };
    fetch('http://localhost:8000/users/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    }).then((res) => res.json());
    // window.location.reload();
  };
  const userShow = () => setDeleteUser(true);

  // 侧边栏新增用户信息
  const [addUser, setAddUser] = useState(false);
  const showAddUser = () => setAddUser(true);

  let AddPower =
    localStorage.getItem('path').split(',').map(Number).indexOf(19) !== -1;
  let deletePower =
    localStorage.getItem('path').split(',').map(Number).indexOf(18) !== -1;

  useEffect(() => {
    async function fetchUserList() {
      const res = await fetch('http://localhost:8000/users/allUsers')
        .then((res) => res.json())
        .then((res) => {
          let newArr = [];
          res.result.forEach((item, index) => {
            newArr.push({
              id: item.id,
              key: index,
              userName: item.userName,
              jobTitle: item.jobTitle,
              permission: item.permission,
              path: item.path,
            });
          });
          setUserList(newArr);
        });
      return res;
    }
    fetchUserList();
  }, [authority, addUser, userList]);

  // 用户表格
  const columns = [
    {
      title: '用户名称',
      dataIndex: 'userName',
      key: 'userName',
      render: (text) => <b>{text}</b>,
    },
    {
      title: '用户职位',
      dataIndex: 'jobTitle',
      key: 'jobTitle',
      render: (text) => {
        let showText = '';
        switch (text) {
          case 'admin':
            showText = '超级管理员';
            break;
          case 'manger':
            showText = '经理';
            break;
          case 'supervisor':
            showText = '主管';
            break;
          case 'engineer':
            showText = '工程师';
            break;
          default:
            showText = '待定';
            break;
        }
        return <span>{showText}</span>;
      },
    },
    {
      title: '状态',
      dataIndex: 'userStatus',
      key: 'userStatus',
      render: (_, record, index) => {
        let disabled = false;
        let checked = record.permission;
        if (record.jobTitle === 'admin') {
          disabled = true;
        }
        return (
          <Switch
            defaultChecked={checked}
            disabled={disabled}
            onChange={(e) => console.log(e)}
          />
        );
      },
    },
    {
      title: '操作',
      dataIndex: 'userOperation',
      key: 'userOperation',
      render: (text, record) => {
        return (
          <Space
            size='middle'
            style={{
              display: 'flex',
              width: '200px',
              justifyContent: 'space-around',
              color: 'blue',
            }}
          >
            <span onClick={() => showAuthority(record)}>配置权限</span>
            <span onClick={showUser}>修改</span>
            {deletePower && (
              <Popover
                content={
                  <div>
                    <p>
                      <QuestionCircleOutlined
                        style={{
                          color: 'orange',
                          fontSize: '14px',
                          marginRight: '4px',
                        }}
                      />
                      是否要删除该用户？
                    </p>
                    <Space style={{ marginLeft: '40px' }}>
                      <Button type='primary' onClick={userHide}>
                        否
                      </Button>
                      <Button
                        type='primary'
                        danger
                        onClick={() => userDelete(record)}
                      >
                        是
                      </Button>
                    </Space>
                  </div>
                }
                trigger='click'
              >
                <span onClick={userShow}>删除</span>
              </Popover>
            )}
          </Space>
        );
      },
    },
  ];
  return (
    <div style={{ height: '100%', overflowY: 'auto' }}>
      <Row style={{ marginTop: '40px', marginLeft: '40px' }}>
        {AddPower && (
          <Col
            span={22}
            style={{ backgroundColor: '#fff', paddingLeft: '20px' }}
          >
            <Button
              type='primary'
              style={{ marginTop: '10px', marginBottom: '10px' }}
              onClick={showAddUser}
            >
              新增用户
            </Button>
          </Col>
        )}

        <Col span={22} style={{ backgroundColor: '#fff', paddingLeft: '20px' }}>
          <Table columns={columns} dataSource={userList} pagination={false} />
        </Col>
      </Row>
      <SidebarTrees
        authority={authority}
        setAuthority={setAuthority}
        checkedKeys={checkedKeys}
        setCheckedKeys={setCheckedKeys}
        itemId={itemId}
      />
      <SidebarChangeUser user={user} setUser={setUser} />
      <SidebarAddUser addUser={addUser} setAddUser={setAddUser} />
    </div>
  );
});
export default UserList;
