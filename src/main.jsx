import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home';
import Roots from './Components/Root/Roots';
import Applied from './Components/AppiedJobs/Applied';
import Jobs from './Components/Jobs/Jobs';
import Blogs from './Components/Blogs/Blogs';
import Statiscs from './Components/Statiscs/Statiscs';
import ArrorPage from './Components/ArrorPage/ArrorPage';
import JobDetalis from './Components/jobDetalis/JobDetalis';
import Detils from './Components/Detils/Detils';




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
        path:"/card/:id",
        element:<Detils></Detils>,
        loader: () => fetch('../data.json')

      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
