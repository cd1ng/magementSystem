import { useRoutes } from "react-router-dom";
import { Layout } from "antd"
import { HeaderComponent } from "./components"
import { normalRoutes, dynamicRoutes } from "./router";
import Sidebar from "./components/sidebar/Sidebar"

import "./App.less"

const { Content } = Layout
function App() {
  const alreadyLogin = useRoutes(dynamicRoutes)
  const noLogin = useRoutes(normalRoutes)
  const loginStatus = window.localStorage.getItem('userName')
  return (
    loginStatus ? <Layout>
      < HeaderComponent />
      <Layout>
        <Sidebar />
        <Content style={{ height: "100%", overflow: "auto" }}>
          {alreadyLogin}
        </Content>
      </Layout>
    </Layout > :
      <Layout>
        {noLogin}
      </Layout>
  );
}

export default App;
