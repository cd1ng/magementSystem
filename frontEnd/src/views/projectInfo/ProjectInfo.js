import React from 'react'
import { Switch,Route } from 'react-router-dom'
import NoPermission from '../noPermission/NoPermission.js'
import Process from './Process'
import Information from './Information'
import ProjectInformation from './ProjectInformation'

export default function ProjectInfo() {
  return (
    <Switch>
      <Route exact path="/projectInfo/process" component={Process}/>
      <Route exact path="/projectInfo/information" component={Information}/>
      <Route path="/projectInfo/information/:id" component={ProjectInformation}/>
      <Route path="/" component={NoPermission}/>
    </Switch>
  )
}