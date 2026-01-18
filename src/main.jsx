import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import {Appointment, Doctors, Healing, Home, Hospital, Patients, Vaccine} from "./components/index.js"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='Appointment' element={<Appointment />} />
      <Route path='Doctors' element={<Doctors />} />
      <Route path='Healing' element={<Healing />} />
      <Route path='Hospital' element={<Hospital />} />
      <Route path='Patients' element={<Patients />} />
      <Route path='Vaccine' element={<Vaccine />} />
      
    </Route> 
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
