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
import PrivateRoute from './routes/PrivateRoute.jsx';
import Food_Info from './Pages/Home/Layouts/Foods/Food_Info.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Password from './Pages/Account/Profile/Password.jsx';

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
        element: <PrivateRoute> <Chef_details></Chef_details> </PrivateRoute>,
        loader:({params})=>fetch(`https://a10-server-puce.vercel.app/chefs/${params.id}`)
        
      },
      {
        path:'/Chefs',
        element: <Section_Chefs></Section_Chefs>
      },
      {
        path:'/foods',
        element:<PrivateRoute><Foods></Foods></PrivateRoute> ,
        loader:({params})=>fetch(`https://a10-server-puce.vercel.app/foods/`)
      },
      {
        path:'/food_info/:id',
        element: <PrivateRoute> <Food_Info></Food_Info> </PrivateRoute>,
        loader:({params})=>fetch(`https://a10-server-puce.vercel.app/foods/${params.id}`)
        
      },
      {
        path:'/profile',
        element: <Profile></Profile>
      },
      {
        path:'/profile/password_reset',
        element: <Password></Password>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/Contact',
        element: <Contact></Contact>
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
