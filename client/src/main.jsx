import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Subscription from './pages/Subscription.jsx'
import AboutBajwa from './pages/AboutBajwa.jsx'
import Login from './pages/Login.jsx'
import ComingSoon from './pages/ComingSoon.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App />},
  { path: "/coming-soon", element: <ComingSoon />},
  { path: "/login", element: <Login />},
  { path: "/subscription", element: <Subscription />},
  { path: "/about", element: <AboutBajwa />},
  { path: "*", element: <NotFoundPage />},

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
