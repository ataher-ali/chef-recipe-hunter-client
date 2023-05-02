import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import Login from './Pages/Account/Login.jsx';
import Register from './Pages/Account/Register.jsx';
import Error from './Pages/Error/Error.jsx';
import Profile from './Pages/Account/Profile/Profile.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/*',
        element: <Error></Error>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/profile',
        element: <Profile></Profile>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
