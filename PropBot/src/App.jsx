import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Sell from './Components/Sell'
import Buy from './Components/Buy'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Rent from './Components/Rent'
import Contact from './Components/Contact'
import Signup from './Components/Signup'
import Footer from './Components/Footer'

const pageRouter = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/buy',
        element: <Buy />
      },
      {
        path:'/rent',
        element:<Rent />
      },
      {
        path:'/sell',
        element: <Sell />
      },
      {
        path:'/about',
        element: <About />
      },
      {
        path:'/contact',
        element: <Contact />
      },
      // {
      //   path:'/footer',
      //   element:<Footer />
      // }
    ]
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/signup',
    element:<Signup />
  }
])



function App() {
  return (
    <>
    <div className="h-full font-popi">
      
    </div>
      <RouterProvider router={pageRouter} />
      <Footer />
    </>
  )
}

export default App