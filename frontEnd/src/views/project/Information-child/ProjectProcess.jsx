import React, { memo } from "react"
import { Row, Col, Form } from "antd"

const ProjectProcess = memo(() => {
  return (
    <>
      <p
        id="process"
        style={{
          marginLeft: "45px",
          fontSize: "16px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        项目详情
      </p>
      <p
        style={{
          marginLeft: "45px",
          fontSize: "12px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        项目进度
      </p>
      <Row>
        <Col
          span={20}
          offset={1}
          style={{ backgroundColor: "#fff", padding: "20px" }}
        ></Col>
      </Row>
      <p
        style={{
          marginLeft: "45px",
          fontSize: "12px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        项目问题
      </p>
      <Row>
        <Col
          span={20}
          offset={1}
          style={{ backgroundColor: "#fff", padding: "20px" }}
        >
          <Form>
            <Form.Item>问题编号</Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
})

export default ProjectProcess
