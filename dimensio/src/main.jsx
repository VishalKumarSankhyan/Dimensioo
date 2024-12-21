import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import HomePage from './Components/HomePage.jsx'
import ProductsPage from './Components/ProductsPage.jsx'
import ContactPage from "./Components/ContactPage";
import AboutPage from "./Components/AboutPage";
import CareersPage from "./Components/CareersPage";
import ServicePage from "./Components/ServicePage";
import ErrorPage from './Components/ErrorPage.jsx'

import { BrowserRouter, useRoutes, HashRouter } from 'react-router-dom';

const AppRoutes = () =>
  useRoutes([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <HomePage />,
        },
        {
          path: 'products',
          element: <ProductsPage />,
        },
        {
          path: 'service',
          element: <ServicePage />,
        },
        {
          path: 'careers',
          element: <CareersPage />,
        },
        {
          path: 'contact',
          element: <ContactPage />,
        },
        {
          path: 'about',
          element: <AboutPage />,
        },
        {
          path: '*',
          element: <ErrorPage />,
        },
      ],
    },
  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HashRouter>
      <AppRoutes />
    </HashRouter>
  </React.StrictMode>,
)

// <BrowserRouter basename="/Dimensioo"></BrowserRouter> 