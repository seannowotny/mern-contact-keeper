// @flow

import React from 'react'
import { Link } from 'react-router-dom';

type NavbarProps = {|
   title: string,
   icon: string   
|}

const Navbar = ({ title, icon }: NavbarProps) => {
   return (
      <div className="navbar bg-primary">
         <h1>
            <i className={icon} /> {title}        
         </h1>
         <ul>
            <li>
               <Link to='/'>Home</Link>
               <Link to='/about'>About</Link>
               <Link to='/register'>Register</Link>
               <Link to='/login'>Login</Link>
            </li>
         </ul>
      </div>
   );
};

Navbar.defaultProps = {
   title: 'Contact Keeper',
   icon: 'fas fa-id-card-alt hello'
};

export default Navbar
