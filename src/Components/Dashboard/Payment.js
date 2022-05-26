import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutFrom from './CheckoutFrom';

const stripePromise = loadStripe('pk_test_51L0seeLYqjpqRkhInLZ33wqAd1acWKpO6AqpypY5zM1hoAdBbvjNOSuEtabKYcRTx4vLHENlFwmKzrlDt2Obcso100tztuqwdr');

const Payment = () => {
    const { id } = useParams()
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(`https://fast-spire-01070.herokuapp.com/order/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }

    })
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12 border-secondary-focus">
                <div className="card-body">
                    <p className="text-secondary font-bold">Hello,{order.clientName
                    } </p>
                    <h2 className="card-title">Please Pay for {order.product}</h2>
                    <p>Your Product Quantity: <span className='text-secondary'>{order.quantity
                    }</span> </p>
                    <p>Your Product Price: <span className='text-secondary'>{order.price
                    }</span> </p>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutFrom order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;