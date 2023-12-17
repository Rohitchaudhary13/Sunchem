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


const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />),
  },
  {
    path: "about",
    element: (<About />),
  },
  {
    path: "product-category",
    element: (<ProdCategories />),
  },
  {
    path: "contact",
    element: (<Contact />),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
