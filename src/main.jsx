import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {library} from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass, faArrowLeft)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
