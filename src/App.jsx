import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainLayout from './Layout/MainLayout'
import FeedPage from './Pages/FeedPage'
import ProfilePage from './Pages/ProfilePage'
import LoginPage from './Pages/LoginPage'
import SinglePostPage from './Pages/SinglePost'
import RegisterPage from './Pages/RegisterPage'
import NotFoundPage from './Pages/NotFoundPage'
import AuthLayout from './Layout/AuthLayout'
import { HeroUIProvider } from '@heroui/react'
import ProtectedRoute from './Components/ProtectedRoute'


export default function App() {

  const routers = createBrowserRouter([
    {
      path: '', element: <MainLayout />, children: [

        {
          index: true, element: <ProtectedRoute><FeedPage /></ProtectedRoute>

        },
        { path: 'profile', element: <ProtectedRoute><ProfilePage /></ProtectedRoute> },
        { path: 'single-post', element: <ProtectedRoute><SinglePostPage /></ProtectedRoute> },
      ]
    },
    {
      path: '', element: <AuthLayout />, children: [
        { path: 'register-page', element: <RegisterPage /> },
        { path: 'login', element: <LoginPage /> },
      ]
    }
  ])

  return <>
    <HeroUIProvider>
      <RouterProvider router={routers}></RouterProvider>
    </HeroUIProvider>

  </>
}
