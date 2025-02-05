import React from 'react'
import AuthPage from './pages/AuthPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const Home = () => {
  const queryClient=new QueryClient({defaultOptions})

  return (
    <QueryClientProvider client={queryClient} >
      <h1>پروژه دیوار </h1>
      <AuthPage />
      <ReactQueryDevtools />
    </QueryClientProvider>
    
  )
}

export default Home