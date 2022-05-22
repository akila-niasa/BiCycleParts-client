import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user]=useAuthState(auth)
    const logout = () => {
        signOut(auth);
       
      };
    const menuItems = <>
    <li className='text-white'><Link to="/">Home</Link></li>
  
    <li className='text-white'><Link to="/myprofile">My Profile</Link></li>

    {
    user?<button className="btn btn-ghost text-white" onClick={logout}>Log Out</button>:  <li className='text-white'><Link to="/login">Login</Link></li>
  }
    
   
   
</>
    return (
        <div>
            <div className="navbar bg-accent sticky top-0 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52">
       {menuItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-secondary">ManuFacTure Of BiCycle</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
 
</div>
        </div>
    );
};

export default Navbar;