import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'
import './i18n/config.js'
import './index.css'
import App from './App.jsx'

ReactGA.initialize('G-F1T3ZQ00C8')

function PageTracker() {
  const location = useLocation()

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    })
  }, [location])

  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PageTracker />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
