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
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
