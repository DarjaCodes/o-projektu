import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { AboutUs } from './pages/AboutUs';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { App } from '../src/pages/app';

import './global.css';
import '../src/pages/HomePage/style.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'onas',
        element: <AboutUs />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      // {
      //   path: '/oprojektu',
      //   element: <Contact />,
      // },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
