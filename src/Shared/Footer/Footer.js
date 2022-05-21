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
              <p className='small text-muted mb-0'>
                &copy; Copyrights. All rights reserved.{" "}
                <Link className='text-secondary' to='/'>
                  BiCycle.com
                </Link>
              </p>
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
    
      </footer>
    );
};

export default Footer;