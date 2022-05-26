import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageStorage_key = "6a52efbcb14ac6f1541aa5d999317e73";
    const onSubmit = async data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?&key=${imageStorage_key}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                //  console.log(result);
                if (result.success) {
                    const img = result.data.url
                    const doctor = {
                        name: data.name,
                        quantity: data.quantity,
                        price: data.price,
                        image: img
                    }
                    fetch('https://fast-spire-01070.herokuapp.com/addservice', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            // console.log(inserted);
                            if (inserted.insertedId) {
                                toast.success('Product added successfully')
                            }
                            else {
                                toast.error('Failed to add the Product');
                            }
                        })
                }
            })
    }
    return (
        <div className='bg-base-200 p-5 mt-3'>
            <h3 className="text-xl text-center ">Add a <span className='text-secondary font-bold'> New Product</span></h3>
            <div className='flex items-center justify-center '>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="product name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                }
                            })}
                        />
                        <label className="label">

                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input
                            type="quantity"
                            placeholder="product quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("quantity", {
                                required: {
                                    value: true

                                }
                            })}
                        />
                        <label className="label">

                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price(per product)</span>
                        </label>
                        <input
                            type="text"
                            placeholder="product price"
                            className="input input-bordered w-full max-w-xs"
                            {...register("price", {
                                required: {
                                    value: true

                                }
                            })}
                        />
                        <label className="label">

                        </label>
                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true
                                }
                            })}
                        />
                        <label className="label">

                        </label>
                    </div>

                    <input className='btn btn-secondary w-full text-white' type="submit" value="Add" />
                </form>
            </div>
        </div>

    );
};

export default AddProduct;