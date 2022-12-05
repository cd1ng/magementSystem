import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './store';
import App from './App'
import { Spin } from "antd";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(Reducer)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Spin size="large" delay={500} style={{ position: "absolute", left: "50%", height: "50%" }} />}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>
);

