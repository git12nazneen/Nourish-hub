import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from '../layout/Root';
import Error from '../components/Error';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/Register';
import Contact from '../pages/Contact';
import MyRooms from '../pages/myRooms/MyRooms';
import Room from '../pages/room/Room';
import About from '../pages/about/About';
import RoomView from '../pages/room/RoomView';

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
            path:'/about',
            element:<About></About>
        },{
            path:'/room',
            element:<Room></Room>,
            loader:()=>fetch('http://localhost:5000/room')
        },
        {
          path:'/room/:id',
          element:<RoomView></RoomView>,
          loader:({params})=>fetch(`http://localhost:5000/room/${params.id}`)
        },
        {
            path:'/myRoom',
            element:<MyRooms></MyRooms>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        }
      ]
    },
  ]);

export default router;