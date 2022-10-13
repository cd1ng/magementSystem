import React, { memo, useState } from "react"
import { Modal, Input, message } from "antd"
import { QuestionCircleOutlined } from "@ant-design/icons"
export const Feedback = memo(() => {
  // const { isModalOpen, setIsModalOpen } = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => setIsModalOpen(true)
  const handleOk = () => {
    setIsModalOpen(false)
    message.success("谢谢您的反馈！")
  }
  const handleCancel = () => setIsModalOpen(false)

  return (
    <>
      <QuestionCircleOutlined
        style={{ fontSize: "20px", marginRight: "20px" }}
        onClick={showModal}
      />
      <Modal
        title="反馈"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"提交"}
        cancelText={"取消"}
      >
        <Input.TextArea placeholder="欢迎提供反馈！" />
      </Modal>
    </>
  )
})
