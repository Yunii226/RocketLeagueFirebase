import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import ItemsList from './components/ItemsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { useState } from 'react';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <ItemsList />,
      },
    ],
  },
]);

const App = () => {
  return (
      <RouterProvider router={router} />
  );
}


export default App;
