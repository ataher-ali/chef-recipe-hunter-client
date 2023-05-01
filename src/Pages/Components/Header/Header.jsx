import React from 'react';
import Nav from './Nav';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="lg:mx-24 mt-2">

            <Nav></Nav>

            </div>

        </>
    );
};

export default Header;