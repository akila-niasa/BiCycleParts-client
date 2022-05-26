import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
  return (
    <div className=' banner  p-52'>
      <div className='mt-8 '>
        <h1 className='text-white text-5xl text-left'>
          <span >
            Shop Your{' '}
            <span className='text-left text-secondary indent-8'>Product From Us</span> To Your Bicycle
          </span>
        </h1>
        <h5 className='text-white text-left p-5'>
          We provide you qualified product
        </h5>
      </div>

      <div className='p-5'>
        <Link to='/blogs'>
          <button className='btn-banner '>
            Blogs
          </button>
        </Link>
      </div>
    </div>



  );
};

export default Banner;