import React from "react"
import "./App.less"
import ManagementRouter from "./routers/managementRouter"
import { ConfigProvider } from "antd"
import "antd/dist/antd.variable.min.css"

function App() {
  return (
    <ConfigProvider>
      <ManagementRouter />
    </ConfigProvider>
  )
}

export default App
