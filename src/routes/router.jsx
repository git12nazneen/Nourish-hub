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
import Features from '../pages/home/Features';
import SingleFeatures from '../pages/home/SingleFeatures';
import PostReview from '../pages/room/PostReview';
import Privateroute from './Privateroute';

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
        },{
            path:'/features',
            element:<Features></Features>,
        },
        {
          path:'/room/:id',
          element:<Privateroute><RoomView></RoomView></Privateroute>,
          loader:({params})=>fetch(`http://localhost:5000/room/${params.id}`)
        },{
          path:'/room/:id',
          element:<SingleFeatures></SingleFeatures>,
          loader:({params})=>fetch(`http://localhost:5000/room/${params.id}`)
        },
        {
            path:'/myRoom',
            element:<Privateroute><MyRooms></MyRooms></Privateroute>
        },,
        {
            path:'/review',
            element:<PostReview></PostReview>
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