import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContextProvider } from '../AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
)
