import React from 'react'
import { Switch,Route } from 'react-router-dom'
import NoPermission from '../noPermission/NoPermission.js'
import Authority from './Authority.js'
import NewProject from './NewProject'

export default function Controller() {
  return (
    <Switch>
      <Route exact path="/controller/newProject" component={NewProject}/>
      <Route exact path="/controller/authority" component={Authority}/>
      <Route path="/" component={NoPermission}/>
    </Switch>
  )
}
