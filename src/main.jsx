import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {library} from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass, faArrowLeft, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass, faArrowLeft, faSpinner)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
