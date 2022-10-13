import React, { memo } from "react"
import { UserOutlined } from "@ant-design/icons"
import { Dropdown, Avatar, Menu } from "antd"
import { useHistory } from "react-router-dom"
export const PersonDropdown = memo(() => {
  const history = useHistory()
  const currentUser = localStorage.getItem("userName")
  const onClick = ({ key }) => {
    if (key === "/login") {
      localStorage.clear()
    }
    history.push(key)
  }
  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: "我的工作台",
          key: "/home",
        },
        {
          label: "页面设置",
          key: "/",
        },
        {
          label: "退出",
          key: "/login",
        },
      ]}
    />
  )
  return (
    <Dropdown overlay={menu}>
      <div
        style={{
          float: "right",
          width: "100px",
          cursor: "pointer",
          textAlign: "center",
          marginRight: "20px",
        }}
      >
        <Avatar size={24} icon={<UserOutlined />} />
        <span style={{ marginLeft: "10px" }}>{currentUser}</span>
      </div>
    </Dropdown>
  )
})
