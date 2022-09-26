import React from 'react'
import { Layout} from 'antd';
import { Switch,Route,Redirect } from 'react-router-dom';

import Sidebar from "../components/sidebar/Sidebar"
import HeaderComponent from "../components/header/HeaderComponent"
import Home from './home/Home';
import Controller from './controller/Controller';
import NoPermission from './noPermission/NoPermission'
import Inform from './inform/Inform';
import ProjectInfo from './projectInfo/ProjectInfo';

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
          <Route path="/controller" component={Controller}/>
          <Route path="/projectInfo" component={ProjectInfo}/>
          <Route path="/inform" component={Inform}/>
          <Redirect from="/" to="/home" exact/>
          <Route path="*" component={NoPermission} />
        </Switch>
      </Content>
    </Layout>
  </Layout>
  )
}

export default MainPage;