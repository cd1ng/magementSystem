import React, { memo } from "react"
import { UserOutlined } from "@ant-design/icons"
import { Dropdown, Avatar, Menu } from "antd"
import { useNavigate } from "react-router-dom"
import type { MenuProps } from 'antd';

const PersonDropdown = memo(() => {
  const navigate = useNavigate()
  const currentUser = localStorage.getItem("userName")
  const onClick: MenuProps['onClick'] = (e) => {
    if (e.key === "/login") {
      localStorage.clear()
    }
    navigate(e.key)
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

export default PersonDropdown