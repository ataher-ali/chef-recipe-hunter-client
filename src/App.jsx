import React from 'react';
import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './Pages/Components/Header/Header';
import Footer from './Pages/Components/Footer/Footer';


const App = () => {
  return (
    <>
      <Header></Header>
         <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default App;
