import React, { memo } from "react"
import {
  BellOutlined,
  InfoCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons"
import { Dropdown, Badge, List, Empty, Tabs, Button } from "antd"
import { useHistory } from "react-router-dom"
import styles from "./Header.module.css"

const listData = [
  {
    CodeNumber: "1",
    title: "项目指派",
    from: "系统消息",
    description: "XMIASI",
  },
  {
    CodeNumber: "1",
    title: "项目评审",
    from: "系统消息",
    description: "XXXMASM",
  },
  {
    CodeNumber: "0",
    title: "项目延期",
    description: "XXXMASM",
  },
]
export const MessageCenter = memo(() => {
  const history = useHistory()
  const handleToInformation = () => history.push("/inform/infoRecord")
  const handleToHome = () => history.push("/home")
  const infoItems = [
    {
      label: "通知",
      key: "item-1",
      children: (
        <List
          size="small"
          itemLayout="horizontal"
          dataSource={listData}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  item.CodeNumber === "0" ? (
                    <InfoCircleOutlined
                      style={{ fontSize: "32px", color: "blue" }}
                    />
                  ) : (
                    <AlertOutlined style={{ fontSize: "32px", color: "red" }} />
                  )
                }
                title={<span>{item.title}</span>}
                description={<p>{item.description}</p>}
              />
            </List.Item>
          )}
        />
      ),
    },
    { label: "待办", key: "item-2", children: <Empty /> },
  ]
  const infoMenu = (
    <>
      <Tabs
        items={infoItems}
        centered
        size={"large"}
        className={styles["notificationHub"]}
        tabBarStyle={{ letterSpacing: "4px" }}
      />
      <Button style={{ width: "50%" }} onClick={handleToInformation}>
        清除消息
      </Button>
      <Button style={{ width: "50%" }} onClick={handleToHome}>
        查看更多
      </Button>
    </>
  )

  return (
    <Dropdown overlay={infoMenu} placement="bottomRight">
      <div
        style={{
          float: "right",
          width: "60px",
          cursor: "pointer",
          textAlign: "center",
        }}
      >
        <Badge count={listData.length} overflowCount={10} size="small">
          <BellOutlined style={{ color: "white", fontSize: "20px" }} />
        </Badge>
      </div>
    </Dropdown>
  )
})
