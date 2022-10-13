import React, { memo } from "react"
import { Row, Col, Form, PageHeader } from "antd"
const BaseInformation = memo(() => {
  return (
    <>
      <PageHeader title="项目信息" style={{ marginLeft: "20px" }} />
      <p
        id="baseInfo"
        style={{ marginLeft: "45px", fontSize: "16px", fontWeight: "bold" }}
      >
        基本信息
      </p>
      <Row>
        <Col
          span={20}
          offset={1}
          style={{ backgroundColor: "#fff", padding: "20px" }}
        >
          <Form>
            <Form.Item label="申请人">xxx</Form.Item>
            <Form.Item label="项目编码">xxx</Form.Item>
            <Form.Item label="客户名称">HW</Form.Item>
            <Form.Item label="项目时间">2020/05/24-2021/10/09</Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
})

export default BaseInformation
