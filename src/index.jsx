import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { AboutUs } from './pages/AboutUs';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from '../src/pages/app';

import './global.css';
import '../src/pages/HomePage/style.css';
import { AboutProject } from './pages/AboutProject';
import { ErrorPage } from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'onas',
        element: <AboutUs />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      { path: '', element: <HomePage /> },
      {
        path: 'oprojektu',
        element: <AboutProject />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
