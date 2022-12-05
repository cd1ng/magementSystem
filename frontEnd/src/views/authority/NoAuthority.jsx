import React, { memo } from "react"
import { Row, Col } from "antd"
const NoAuthority = memo(() => {
  return (
    <Row style={{ marginTop: "40px", overflow: "auto", height: "550px" }}>
      <Col
        span={22}
        offset={1}
        style={{ backgroundColor: "#fff", padding: "20px 40px" }}
      >
        当前用户没有权限访问该页面
      </Col>
    </Row>
  )
})

export default NoAuthority
