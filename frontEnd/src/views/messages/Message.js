import React from 'react'
import {Row,Col} from 'antd'
import { Switch,Route } from 'react-router-dom'
import MessageList from './MessageList.js'
import MessageSetting from './MessageSetting.js'

export default function Inform() {
  return (
    <Row style={{marginTop:"40px"}} >
      <Col span={22} offset={1} style={{backgroundColor:"#fff",padding:"20px 40px"}}>
        <Switch>
          <Route exact path="/message/list" component={MessageList}/>
          <Route exact path="/message/setting" component={MessageSetting}/>
        </Switch>
      </Col>
    </Row>
  )
}