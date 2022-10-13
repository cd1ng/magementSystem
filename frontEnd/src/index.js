import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { createStore } from "redux"
import rootReducer from "./reducers"
import { Provider } from "react-redux"
import "./i18n/config"

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
