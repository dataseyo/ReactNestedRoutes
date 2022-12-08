import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux/es/exports'

import App from './App'
import './index.css'
import store from './state/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>

    
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
)