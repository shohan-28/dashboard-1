import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { RouterProvider } from 'react-router'
import router from './Routes';
import { Provider } from 'react-redux'
import Store from './components/Store/Store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store} >
      <RouterProvider router={router} ></RouterProvider>
    </Provider>
  </StrictMode>
)
