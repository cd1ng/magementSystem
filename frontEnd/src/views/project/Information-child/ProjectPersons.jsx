import React, { memo } from "react"
import { Row, Col } from "antd"
const ProjectPersons = memo(() => {
  return (
    <>
      <p
        id="person"
        style={{
          marginLeft: "45px",
          fontSize: "16px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        人员安排
      </p>
      <p style={{ marginLeft: "45px", fontSize: "12px" }}>
        设置项目的参与人员和关注
      </p>
      <Row>
        <Col
          span={20}
          offset={1}
          style={{ backgroundColor: "#fff", padding: "20px" }}
        >
          <div style={{ height: "300px" }}></div>
        </Col>
      </Row>
    </>
  )
})

export default ProjectPersons
