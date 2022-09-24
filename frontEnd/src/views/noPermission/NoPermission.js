import { Empty } from 'antd'
import React from 'react'


export default function NoPermission() {
  return (
    <>
      <h1 style={{textAlign:"center",fontSize:"28px"}}>没有数据！</h1>
      <Empty/>
    </>
  )
}
