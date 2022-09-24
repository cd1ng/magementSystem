import React from 'react'
import { Switch,Route } from 'react-router-dom'
import NoPermission from '../noPermission/NoPermission.js'
import NewInfo from './NewInfo'
import InfoRecord from './InfoRecord.js'

export default function Inform() {
  return (
    <Switch>
      <Route exact path="/inform/infoRecord" component={InfoRecord}/>
      <Route exact path="/inform/newInfo" component={NewInfo}/>
      <Route path="/" component={NoPermission}/>
    </Switch>
  )
}