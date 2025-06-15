import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ModelProvider } from './Context/ModelContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ModelProvider>
         <App />
      </ModelProvider>
    </BrowserRouter>
  </StrictMode>,
)
