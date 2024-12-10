import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import HomePage from './Components/HomePage.jsx'
import ProductsPage from './Components/ProductsPage.jsx'
import ContactPage from "./Components/ContactPage";
import AboutPage from "./Components/AboutPage";
import CareersPage from "./Components/CareersPage";
import ServicePage from "./Components/ServicePage";
import ErrorPage from './Components/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path : "",
        element : <HomePage/>
      },{
        path: "/products",
        element: <ProductsPage/>
      },
      {
        path: "/service",
        element: <ServicePage/>
      },
      {
        path: "/careers",
        element: <CareersPage/>
      }, {
        path: "/contact",
        element: <ContactPage/>
      },
      {
        path: "/about",
        element: <AboutPage/>
      },{
        path: "*",
        element : <ErrorPage/>
      }
    ]
  }
])

/**
 * 
 * const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/products",
      element: <ProductsPage/>
    },
    {
      path: "/service",
      element: <ServicePage/>
    },
    {
      path: "/careers",
      element: <CareersPage/>
    }, {
      path: "/contact",
      element: <ContactPage/>
    },
    {
      path: "/about",
      element: <AboutPage/>
    }
  ])
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
