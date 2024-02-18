import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import New from './pages/New.jsx';
import Popular from './pages/Popular.jsx';
import Trending from './pages/Trending.jsx';
import Categories from './pages/Categories.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'new', element: <New /> },
      { path: 'popular', element: <Popular /> },
      { path: 'trending', element: <Trending /> },
      { path: 'categories', element: <Categories /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
