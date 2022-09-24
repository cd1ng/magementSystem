import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import MainPage from '../views/MainPage';
import Login from '../views/login/Login'

export default function ManagementRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" render={()=>
          <MainPage />
        }/>
      </Switch>
    </BrowserRouter>
  )
}

