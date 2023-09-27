import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home';
import Roots from './Components/Root/Roots';
import ArrorPage from './Components/ArrorPage/ArrorPage';
import Detils from './Components/Detils/Detils';
import Donation from './Components/Statiscs/Donation';
import PieChart from './Components/PieChart/PieChart';






const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
    errorElement:<ArrorPage></ArrorPage>,
    children:[
      {
        path:'/',
        element:  <Home></Home>,
       
      },
      {
        path:'/statistics',
        element: <PieChart></PieChart>,
        loader: () => fetch('/data.json')

      },
      {
        path:'/donation',
        element:<Donation></Donation>,
        loader: () => fetch('/data.json')
       
      },
      {
        path:"/card/:id",
        element:<Detils></Detils>,
        loader: () => fetch('/data.json')

      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
