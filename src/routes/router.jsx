import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from '../layout/Root';
import Error from '../components/Error';
import Home from '../pages/home/Home';
import AvailableFoods from '../pages/availableFood/AvailableFoods';
import AddFood from '../pages/addFood/AddFood';
import MyFoodReq from '../pages/myFood/MyFoodReq';
import Login from '../pages/login/Login';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/availableFoods',
            element:<AvailableFoods></AvailableFoods>
        },{
            path:'/addFood',
            element:<AddFood></AddFood>
        },
        {
            path:'/myFoodReq',
            element:<MyFoodReq></MyFoodReq>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
      ]
    },
  ]);

export default router;