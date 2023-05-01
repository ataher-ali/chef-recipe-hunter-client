import React from 'react';
import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './Pages/Components/Header/Header';
import Footer from './Pages/Components/Footer/Footer';


const App = () => {
  return (
    <>
      <Header></Header>
      <div className='mx-28 px-2 '>
         <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
