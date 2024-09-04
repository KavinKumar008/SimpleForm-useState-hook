import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import UserDetails from './UserDetails.jsx'
import RegFrm from './RegFrm.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UserDetails/> */}
    <RegFrm/>
  </StrictMode>,
)
