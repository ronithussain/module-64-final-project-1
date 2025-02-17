import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='w-9/12 mx-auto'>
    <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
