import React, { memo } from "react"
import { Drawer, Tree, Badge, Space } from "antd"
const menuTag = <Badge status="success" />
const powerTag = <Badge status="processing" />
const treeDataAll = [
  {
    title: "工作台",
    key: 1,
  },
  {
    title: "项目",
    key: 2,
    children: [
      {
        title: "新建项目",
        key: 3,
      },
      {
        title: "项目列表",
        key: 4,
      },
    ],
  },
  {
    title: "权限管理",
    key: 5,
    icon: menuTag,
    children: [
      {
        title: "权限列表",
        key: 9,
      },
      {
        title: "用户列表",
        key: 10,
        children: [
          {
            title: "删除用户",
            icon: powerTag,
            key: 18,
          },
          {
            title: "添加用户",
            icon: powerTag,
            key: 19,
          },
          {
            title: "查看用户",
            icon: powerTag,
            key: 20,
          },
        ],
      },
    ],
  },
  {
    title: "消息中心",
    key: 6,
    children: [
      {
        title: "消息设置",
        key: 7,
      },
      {
        title: "消息列表",
        key: 8,
      },
    ],
  },
]

export const SidebarTrees = memo((props) => {
  const { authority, setAuthority, checkedKeys, setCheckedKeys, itemId } = props

  const closeAuthority = () => {
    setAuthority(false)
    let obj = {
      id: itemId,
      path: checkedKeys,
    }
    fetch("http://localhost:8000/users/changePath", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then((res) => res.json())
  }

  const onCheck = (checkedKeysValue) => setCheckedKeys(checkedKeysValue)

  return (
    <Drawer
      title="权限配置"
      placement="right"
      onClose={closeAuthority}
      open={authority}
    >
      <Space>
        <Badge status="success" text="菜单" />
        <Badge status="processing" text="权限" />
      </Space>
      <Tree
        checkable
        showIcon
        onCheck={onCheck}
        checkedKeys={checkedKeys}
        treeData={treeDataAll}
        defaultExpandAll={true}
      />
    </Drawer>
  )
})
