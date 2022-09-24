import React from 'react'
import { Layout} from 'antd';
import { Switch,Route,Redirect } from 'react-router-dom';

import "./MainPage.css"

import SiderComponent from "../components/SiderComponent"
import HeaderComponent from '../components/HeaderComponent';
import Home from './home/Home';
import Controller from './controller/Controller';
import NoPermission from './noPermission/NoPermission'
import Inform from './inform/Inform';
import ProjectInfo from './projectInfo/ProjectInfo';

const { Content } = Layout;

const MainPage = () => {
  return(
  <Layout style={{width:"100%"}}>
    <HeaderComponent />
    <Layout style={{width:"100%"}}>
      <SiderComponent/>
      <Content style={{marginLeft:"10px",marginTop:"10px",overflow:"hidden"}}>
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route path="/controller" component={Controller}/>
            <Route path="/projectInfo" component={ProjectInfo}/>
            <Route path="/inform" component={Inform}/>
            {/* 重定向+精准匹配 */}
            <Redirect from="/" to="/home" exact/>
            <Route path="*" component={NoPermission} />
        </Switch>
      </Content>
    </Layout>
  </Layout>
  )
}

export default MainPage;