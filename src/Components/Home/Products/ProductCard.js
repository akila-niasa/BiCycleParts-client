import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    const { _id, name,minimumOrder,availableQuantity, price,image, details } =
    product;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure class=" pt-10">
    <img  style={{
            height: "200px",
            borderRadius: "15px 15px 0px 0px",
            border: "2px solid rgb(236, 54, 109)",
          }} src={image} alt="" className='w-full' />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title text-secondary font-serif">{name}</h2>
    <h3 class="card-title">Price:<span className='text-secondary'>{price}</span>(per product)</h3>
    <h3 class="card-title">Minimum Order:<span className='text-secondary'>{minimumOrder}</span></h3>
    <h3 class="card-title">Available Quantity:<span className='text-secondary'>{availableQuantity}</span></h3>
    
    <p>{details}</p>
    
    <div class="card-actions" >
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