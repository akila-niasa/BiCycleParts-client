import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { MdDelete } from "react-icons/md";

const MyOrder = () => {
    const navigate=useNavigate()
    const[user]=useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setMyOrders(data)
            })
        }
    },[user])

    return (
        <div>
            <div className='mb-3'>
                <h2 className='mb-2 text-xl'>
                    My <span className='text-secondary'>Orders</span>
                </h2>
                <hr />
            </div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>product</th>
                            <th>quantity</th>
                           
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
            {myOrders.length > 0 ? (
              myOrders.map((order,index) => (
                <tr key={order._id}>
                     <th>{index + 1}</th>
                  <td>{order?.product}</td>
                  <td>{order?.quantity}</td>
                  <td>{order?.price&& <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}</td>
                  <td>
                    <span
                      style={{ fontSize: "24px" }}
                    >
                      <MdDelete />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='4' className='text-center'>
                  No Orders Found
                </td>
              </tr>
            )}
          </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;