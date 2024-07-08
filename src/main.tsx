import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from './store/index.ts'
import { Provider as ReduxProvider } from 'react-redux'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
)
