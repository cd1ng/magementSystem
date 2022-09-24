import React from 'react'
import { Switch,Route } from 'react-router-dom'
import NoPermission from '../noPermission/NoPermission.js'
import History from './History'
import Process from './Process'
import Information from './Information'

export default function ProjectInfo() {
  return (
    <Switch>
      <Route exact path="/projectInfo/history" component={History}/>
      <Route exact path="/projectInfo/process" component={Process}/>
      <Route exact path="/projectInfo/information" component={Information}/>
      <Route path="/" component={NoPermission}/>
    </Switch>
  )
}