import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../../Shared/Footer/Footer';

const Purchase = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [user] = useAuthState(auth);
  // const { register, handleSubmit, reset } = useForm();

  const handleBooking = event => {
    event.preventDefault()
    const quantity = event.target.quantity.value;
    if (quantity > product.availableQuantity || quantity < product.minimumOrder) {
      toast.error('please enter a valid quantity')
    }
    const oreder = {
      productId: product._id,
      product: product.name,
      quantity,

      price: product.price * quantity,
      client: user.email,
      clientName: user.displayName,
      phone: event.target.phone.value,
      status: "pending",
    }
    fetch('https://fast-spire-01070.herokuapp.com/saveorder', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(oreder)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Order Placed Successfully")
        } else {
          toast.error('Sorry,cannot process the order')
        }
      })
  }

  useEffect(() => {
    fetch(`https://fast-spire-01070.herokuapp.com/service/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProduct(data)
      })
  }, [id])
  return (
    <div>
      <h3 className='fond bold text-2xl text-center m-5'>PurChase <span className='text-secondary'>Your Product</span></h3>
      <div className="hero min-h-screen ">

        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div className="text-5xl font-bold">{product?.name}
              <div className="avatar">
                <div className="w-8 rounded mx-3">
                  <img src={product?.image} />
                </div>
              </div>
            </div>


            <h3 className="card-title">Price:<span className='text-secondary'>{product?.price}</span>(per product)</h3>
            <h3 className="card-title">Minimum Order:<span className='text-secondary'>{product?.minimumOrder}</span></h3>
            <h3 className="card-title">Available Quantity:<span className='text-secondary'>{product?.availableQuantity}</span></h3>

            <small>{product?.details}</small>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleBooking}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" value={user?.displayName} className="input input-bordered" readOnly />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" value={user?.email} className="input input-bordered" />

                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>

                  <input type="text" value={product?.name} className="input input-bordered" />

                </div>
                <div className="form-control">
                  <label className="label" for='quantity'>
                    <span className="label-text">Quantity</span>
                  </label>
                  {/* <input type="hidden" name="amount" value={product?.minimumOrder}/> */}

                  <input type="number" id='quantity' name="quantity" min={product?.minimumOrder} max={product?.availableQuantity} className="input input-bordered"
                  />



                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input type="text" name="phone" placeholder='phone' className="input input-bordered" />

                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input type="text" placeholder='address' className="input input-bordered" />

                </div>
                <div className="form-control mt-6">
                  {
                    <input type="submit" value="Purchase" className="btn btn-secondary w-full max-w-xs" />
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default Purchase;