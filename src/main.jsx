import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Patient } from './patient/Patient.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";


let routes=[
  {
    path:'/',
    element:  <App />,
    children :[
       
        {
            path:'list_patients',
            element:<Patient />
        }
    ]
  }
]

let browserRouter=createBrowserRouter(routes);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={browserRouter}></RouterProvider>
  </StrictMode>,
)
