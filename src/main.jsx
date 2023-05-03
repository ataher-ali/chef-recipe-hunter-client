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
import Chef_details from './Pages/Home/Layouts/Chefs/Chef_details.jsx';
import Foods from './Pages/Home/Layouts/Foods/Foods.jsx';
import Section_Chefs from './Pages/Home/Layouts/Chefs/Section_Chefs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        
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
        path:'/Chef_Details/:id',
        element: <Chef_details></Chef_details>,
        loader:({params})=>fetch(`https://a10-server-puce.vercel.app/chefs/${params.id}`)
        
      },
      {
        path:'/Chefs',
        element: <Section_Chefs></Section_Chefs>
      },
      {
        path:'/foods',
        element: <Foods></Foods>,
        loader:({params})=>fetch(`https://a10-server-puce.vercel.app/foods/`)
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
