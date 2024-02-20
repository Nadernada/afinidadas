import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Formation from './Formation';
import Teambuilding from './Teambuilding';
import Contact from './Contact';

const router = createBrowserRouter([
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

])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

