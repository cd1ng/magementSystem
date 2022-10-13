import React from "react"
import { Switch, Route } from "react-router-dom"
import AuthorityList from "./AuthorityList"
import UserList from "./UserList"
export default function Project() {
  return (
    <Switch>
      <Route exact path="/authority/authorityList" component={AuthorityList} />
      <Route exact path="/authority/userList" component={UserList} />
    </Switch>
  )
}
