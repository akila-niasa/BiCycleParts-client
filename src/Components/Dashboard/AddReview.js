import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const AddReview = () => {
    const[user]=useAuthState(auth)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit=data=>{
        const reviewData = {
            username: user.displayName,
            userEmail: user.email,
            ...data,
          };
          fetch('http://localhost:5000/review',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ reviewData })
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data);
              if(data.insertedId){
                  toast.success('Review Posted Successfully')
              }else{
                  toast.error('Try Again')
              }
          })
    }
    return (
        <div>
            <h1 className='text-center my-3'>
              Write <span className='text-secondary'>Review</span>
            </h1>
            <div class="hero min-h-screen bg-base-200">
  <div class="hero-content ">
    
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
    <form onSubmit={handleSubmit(onSubmit)}>
    <div class="form-control">
          <label class="label">
            <span class="label-text">Raiting</span>
          </label>
          <input  type='number'
                    {...register("rating", {
                      required: true,
                      max: 5,
                      min: 0,
                    })}
                    step='0.1'
                    placeholder='Rating in 5' class="input input-bordered" />
        </div>
        
        <div class="form-control">
          <label class="label">
            <span class="label-text">Review</span>
          </label>
          <textarea type="text"  {...register("review", { required: true })}
                    placeholder='Write Review'
                    style={{ height: "100px" }} />
         
        </div>
        <div class="form-control mt-6">
        <input className='btn btn-secondary p-6 w-full max-w-xs text-white' type="submit" value="Review" />
        </div>
    </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddReview;