import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='w-full  flex-shrink-0 bg-accent'>
       
          <div className='  grid sm:grid-cols-1  lg:grid-cols-3'>
            <div className='text-white p-5'>
             
              <p className='small  mt-4'>
                It is an online  shop where you can find parts of bicycle.
              </p>
            <div>
            <h3 className='text-secondary '>Follow Us</h3>
            <a href='https://github.com/akila-niasa?tab=repositories'><img className='w-3.5 h-3.5 m-3' src="https://www.shareicon.net/data/256x256/2015/08/11/83538_facebook_512x512.png" alt="" /></a>
        <a href='https://github.com/akila-niasa?tab=repositories'><img className='w-3.5 h-3.5 m-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbmlO8vg3r4q4Ule3u4XvSKLXZP4mNjE4Uw&usqp=CAU" alt="" /></a>
            </div>
            </div>
            <div className='p-10'>
              <h5 className='text-white mb-3 footer-title'>Quick links</h5>
              <ul className='list-unstyled text-muted'>
                <li>
                  <Link className='text-white ' to='/'>Home</Link>
                </li>
                <li>
                  <Link className='text-white' to='/'>About</Link>
                </li>
                <li>
                  <Link className='text-white' to='/'>Get started</Link>
                </li>
                
                
              </ul>
            </div>
            <div className='p-10'>
              <h5 className='text-white mb-3 footer-title'>Quick links</h5>
              <ul className='list-unstyled text-muted'>
                <li>
                  <Link className='text-white' to='/'>Home</Link>
                </li>
                <li>
                  <Link className='text-white' to='/'>About</Link>
                </li>
                <li>
                  <Link className='text-white' to='/'>Get started</Link>
                </li>
              
              </ul>
            </div>
          </div>
          <p className='small text-white text-center mb-0'>
                &copy; Copyrights. All rights reserved.{" "}
                <Link className='text-secondary' to='/'>
                  BiCycle.com
                </Link>
              </p>
      </footer>
    );
};

export default Footer;