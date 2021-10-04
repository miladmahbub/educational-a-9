import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    const style = {
        fontWeight: "bold",
              color: "red"
     }
    return (
        <div>
            <NavLink activeStyle={style} to='/home'> Home</NavLink>
            <NavLink activeStyle={style} to='/about'>About</NavLink> 
            <NavLink activeStyle={style} to='/services'>Services</NavLink> 
            <NavLink activeStyle={style} to='/contact'>Contact</NavLink>   
            
        </div>
    );
};

export default Header;