import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from './App';
import About from './pages/About';
import ProdCategories from './pages/ProdCategories';
import Contact from './pages/Contact';
import Products from './pages/Products';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about", // No leading slash for nested route
        element: <About />,
      },
      {
        path: "product-category", // No leading slash for nested route
        element: <ProdCategories />,
      },
      {
        path: "contact", // No leading slash for nested route
        element: <Contact />,
      },
      {
        path: "products/:id", // No leading slash for nested route
        element: <Products />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
