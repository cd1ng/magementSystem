import React from 'react'
import {Row,Col} from 'antd'
import { Switch,Route } from 'react-router-dom'
import NoPermission from '../noPermission/NoPermission.js'
import NewInfo from './NewInfo'
import InfoRecord from './InfoRecord.js'
import InformSetting from './InformSetting.js'

export default function Inform() {
  return (
    <Row style={{marginTop:"40px"}} >
      <Col span={22} offset={1} style={{backgroundColor:"#fff",padding:"20px 40px"}}>
        <Switch>
          <Route exact path="/inform/infoRecord" component={InfoRecord}/>
          <Route exact path="/inform/newInfo" component={NewInfo}/>
          <Route exact path="/inform/infoSetting" component={InformSetting}/>
          <Route path="/" component={NoPermission}/>
        </Switch>
      </Col>
    </Row>
  )
}