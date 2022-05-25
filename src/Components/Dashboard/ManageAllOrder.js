import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import StatusUpdate from './StatusUpdate';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    const[status,setStatus]=useState('')
    const [updated, setUpdated] = useState(false);
  
useEffect(()=>{
    fetch('http://localhost:5000/manageorders',{
        method:"GET",
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>res.json())
    .then(data=>{
        setOrders(data)
        console.log(data);
    })
},[updated])


const handleChange=(orderId,status)=>{
 const updatestatus={
        status:'shipped'
    }


   fetch(`http://localhost:5000/manageorders/${orderId}`,{
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(updatestatus)
}
  )
  .then(res=>res.json())
  .then(data=>{
    setUpdated(true);
      setStatus('shipped')
      console.log(data);
  })
}

    return (
        <div>
            <h2 className='mb-2'>
            <span className='text-xl'>Manage</span> All Orders {orders?.length}
          </h2>
          <hr />
          <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Product</th>
              <th>Price</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Action</th>
      </tr>
    </thead>
    <tbody>
            {
              orders?.map(order => (
                <StatusUpdate key={order._id} order={order}handleChange={handleChange} status={status}updated={updated} setUpdated={setUpdated}></StatusUpdate>
              ))
           }
          </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageAllOrder;