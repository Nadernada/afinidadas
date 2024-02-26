import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Formation from './Formation';
import Teambuilding from './Teambuilding';
import Contact from './Contact';
import Coworking from './Coworking';
import SalleReunion from './SalleReunion';
import Bureaux from './Bureaux';

const router = createHashRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/formation",
    element: <Formation />
  },
  {
    path: "/teambuilding",
    element: <Teambuilding />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/co-working",
    element: <Coworking />
  },
  {
    path: "/bureaux",
    element: <Bureaux />
  },
  {
    path: "/reunion",
    element: <SalleReunion />
  },

])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

