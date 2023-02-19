import React from 'react'
import ReactDOM from 'react-dom/client'

// BOOTSTRAP
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// DEFAULT CSS
import './index.css'

// COMPONENTS
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
