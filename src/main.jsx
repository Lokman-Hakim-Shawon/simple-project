import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Routes from './Components/Routes';
import Home from './pages/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProvider from './authentication/AuthProvider';
import Contact from './pages/Contact';
import PrivateRoute from './authentication/PrivateRoute';
import DashboardHome from './pages/Dashboard/DashboardHome';
import Dashboard from './pages/Dashboard/Dashboard';
import AddTask from './pages/Dashboard/AddTask';
import DashMyTask from './pages/Dashboard/DashMyTask';
import Details from './pages/Dashboard/Details';
import DragAndDrop from './pages/Dashboard/DragAndDrop';
import Update from './pages/Dashboard/Update';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Routes></Routes>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<PrivateRoute><Contact></Contact></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'/dashboard',
        element:<DashboardHome></DashboardHome>
      },
      {
        path:'/dashboard/add_task',
        element:<AddTask></AddTask>
      },
      {
        path:'/dashboard/my_task',
        element:<DashMyTask></DashMyTask>
      },
    ]
  },
  {
  path:'/details',
  element:<Details></Details>
  },
  {
    path:'/draganddrop',
    element:<DragAndDrop></DragAndDrop>
  },
  {
    path:'/update',
    element:<Update></Update>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
