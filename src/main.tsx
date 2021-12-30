import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { UserProvider } from './context/user'
const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
