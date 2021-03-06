import React, { useEffect, useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fast-spire-01070.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    if (products.length === 0) {
        return <Loading></Loading>;
    }
    return (
        <div className='p-5'>
            <h3 className='font-bold font-serif text-3xl text-center m-5'><span className='text-secondary'>Featured</span> Parts</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    products.slice(0, 6).map(product => <ProductCard key={product._id} product={product}></ProductCard>)

                }
            </div>
        </div>
    );
};

export default Products;