import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/router';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider';

// tanStackQuery import and apply all over;
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      {/* tanstackQuery */}
      <QueryClientProvider client={queryClient}> 
        <HelmetProvider>
          <div className='w-9/12 mx-auto'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
