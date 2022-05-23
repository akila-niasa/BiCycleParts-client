import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';

import auth from '../../firebase.init';

const Dashboard = () => {

    return (
        <div>
            <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
  <h2 className='text-2xl font-bold text-secondary text-center'>Welcome to your Dashboard</h2>
    {/* <!-- Page content here --> */}
  <Outlet/>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard">My Orders </Link></li>
      <li><Link to="/dashboard/addreview">Write Review</Link></li>
      <li><Link to="/dashboard/myprofile">My Profile</Link></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;