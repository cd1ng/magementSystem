import React from 'react'
import { Switch,Route } from 'react-router-dom'
import CreateProject from './CreateProject'
import ProjectList from './ProjectList'
import ProjectInformation from './ProjectInformation'
export default function Project() {
  return (
    <Switch>
      <Route exact path="/project/list" component={ProjectList}/>
      <Route exact path="/project/create" component={CreateProject}/>
      <Route path="/project/list/:id" component={ProjectInformation}/>
    </Switch>
  )
}