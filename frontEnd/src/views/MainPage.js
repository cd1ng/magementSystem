import React from 'react'
import { Layout} from 'antd';
import { Switch,Route,Redirect } from 'react-router-dom';

import Sidebar from "../components/sidebar/Sidebar"
import HeaderComponent from "../components/header/HeaderComponent"
import Home from './home/Home';
import Message from './messages/Message';
import Authority from './authority/Authority'
import Project from './project/Project'
import UserList from './authority/UserList'

const { Content } = Layout;

const MainPage = () => {
  return(
  <Layout>
    <HeaderComponent />
    <Layout>
      <Sidebar/>
      <Content>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route path="/authority" component={Authority}/>
          <Route path="/user" component={UserList}/>
          <Route path="/project" component={Project}/>
          <Route path="/message" component={Message}/>
          <Redirect from="/" to="/home" exact/>
        </Switch>
      </Content>
    </Layout>
  </Layout>
  )
}

export default MainPage;