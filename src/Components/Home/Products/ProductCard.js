import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { _id, name, minimumOrder, availableQuantity, price, image, details } =
    product;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl" style={{

        borderRadius: "15px 15px 0px 0px",
        border: "2px solid rgb(236, 54, 109)",
      }}>
        <figure className=" pt-10" >
          <img style={{
            height: "200px",
            borderRadius: "15px 15px 0px 0px",

          }} src={image} alt="" className='w-full' />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary font-serif">{name}</h2>
          <h3 className="card-title">Price:<span className='text-secondary'>{price}</span>(per product)</h3>
          <h3 className="card-title">Minimum Order:<span className='text-secondary'>{minimumOrder}</span></h3>
          <h3 className="card-title">Available Quantity:<span className='text-secondary'>{availableQuantity}</span></h3>

          <p>{details}</p>

          <div className="card-actions" >
            <Link to={`/purchase/${_id}`}>
              <button className='btn-banner'>Go to Purchase</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;