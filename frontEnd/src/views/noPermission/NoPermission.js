import React from 'react'
import { Empty,Row,Col } from 'antd'


export default function NoPermission() {
  return (
    <Row style={{marginTop:"40px"}} >
      <Col span={22} offset={1} style={{backgroundColor:"#fff",padding:"20px 40px"}}>
        <h1 style={{textAlign:"center",fontSize:"28px"}}>没有数据！</h1>
        <Empty/>
      </Col>
    </Row>
  )
}
