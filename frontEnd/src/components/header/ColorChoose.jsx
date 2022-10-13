import React, { memo, useState } from "react"
import { Dropdown, Menu, Button, ConfigProvider } from "antd"
const colorArray = [
  {
    primaryColor: "#1DA57A",
    errorColor: "#840f59",
    warningColor: "#e1d17e",
    successColor: "#4ac50d",
    infoColor: "#1d3fc5",
  },
  {
    primaryColor: "#1890ff",
    errorColor: "#ff4d4f",
    warningColor: "#faad14",
    successColor: "#52c41a",
    infoColor: "#1890ff",
  },
]
export const ColorChoose = memo(() => {
  const [color, setColor] = useState({
    primaryColor: "#1890ff",
    errorColor: "#ff4d4f",
    warningColor: "#faad14",
    successColor: "#52c41a",
    infoColor: "#1890ff",
  })
  ConfigProvider.config({
    theme: color,
  })
  const colorClick = (e) => {
    setColor(colorArray[e.key])
  }
  return (
    <Dropdown
      overlay={
        <Menu
          onClick={colorClick}
          items={[
            {
              key: "0",
              label: "绿色",
            },
            {
              key: "1",
              label: "蓝色",
            },
          ]}
        />
      }
    >
      <Button type="primary">主题</Button>
    </Dropdown>
  )
})
