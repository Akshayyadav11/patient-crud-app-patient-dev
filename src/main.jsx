import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Patient } from './patient/Patient.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import { getPatientsById } from './business_logic/crud.js'
import { PatientForm } from './patient_form/PatientForm.jsx'


let routes=[
  {
    path:'/',
    element:  <App />,
    children :[
       
        {
            path:'list_patients',
            element:<Patient />
        },
        {
           
          path:'edit_patients/:id',
          element:<PatientForm />,
          loader: async({params})=>{
              return await getPatientsById(params.id)
          }
          
      },
      {
           
        path:'add_patients',
        element:<PatientForm />
        
    },
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
