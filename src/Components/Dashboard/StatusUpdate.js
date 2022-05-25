import React from 'react';

const StatusUpdate = ({ order,status,handleChange,setUpdated,updated }) => {
  
    return (
        // {status==='shipped'?"shipped":"pending"}
            <tr>
                    <th></th>
                  <td>{order?.product}</td>
                  <td>{order?.price}</td>
                  <td>{order?.client}</td>
                  <td>
                  {
                      (order?.paid)? <button onClick={()=>handleChange(order._id,status)}  className='btn'>{order.status}</button>:<span>unpaid</span>
                  }
                  </td>
                  <td>
                  {/* {
                    ((order?.paid)&&    <StatusUpdate
                    orderId={order?._id}
                  handleChange={handleChange}
                    status={order?.status}
                  ></StatusUpdate>)
                  } */}
                  {/* <button onClick={()=>handleChange(order._id,status)} className=' btn'>Update Order</button> */}
                  </td>
                </tr>
              
      
    );
};

export default StatusUpdate;