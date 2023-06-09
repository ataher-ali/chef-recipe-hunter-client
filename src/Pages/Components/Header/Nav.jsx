import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Nav = () => {

  const { user,logOut } = useContext(AuthContext);


    return (
        <>
            <div className="navbar   ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li> <NavLink to='/'>Home</NavLink> </li>
      <li> <NavLink to='/about'>About</NavLink> </li>
      <li> <NavLink to='/foods'>Foods</NavLink> </li>
      <li> <NavLink to='/Chefs'>Chefs</NavLink> </li>
      <li> <NavLink to='/blog'>Blog</NavLink> </li>
      
      </ul>
    </div>
    <Link className="btn btn-ghost hover:bg-white normal-case font-bold text-2xl" to='/'> <span className='text-red-400 '>Rest </span> 🍌2 <span className='text-blue-500 ml-1'>Rent</span> </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li> <NavLink to='/'>Home</NavLink> </li>
      <li> <NavLink to='/about'>About</NavLink> </li>
      <li> <NavLink to='/foods'>Foods</NavLink> </li>
      <li> <NavLink to='/Chefs'>Chefs</NavLink> </li>
      <li> <NavLink to='/blog'>Blog</NavLink> </li>
      
    </ul>
  </div>
  <div className="navbar-end">
    {
    user? 
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full bg-slate-400  ">
        <img src={user.photoURL} alt="" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

        <li>
            <Link className="justify-between bg-slate-200 rounded my-2" to='profile'>
            <div className=''>
          {user.displayName}
          </div>
            </Link>
        </li>
        <li>
            <Link className="justify-between " to='profile'> Profile </Link>
        </li>
        
        <li>
        <Link onClick={logOut}>Logout</Link>
        </li>
      </ul>
    </div>
    :
    <Link to='/login' className="btn btn-outline ">Login</Link>
    }
  </div>
</div>
        </>
    );
};

export default Nav;