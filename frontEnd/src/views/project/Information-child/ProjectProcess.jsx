import React, { memo } from "react"
import { Row, Col } from "antd"

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
        项目进度
      </p>
      <Row>
        <Col
          span={20}
          offset={1}
          style={{ backgroundColor: "#fff", padding: "20px" }}
        ></Col>
      </Row>
    </>
  )
})

export default ProjectProcess
