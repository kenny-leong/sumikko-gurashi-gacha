import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from 'react-router-dom';
import Home from './routes/Home';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [],
    },
  ]);

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);