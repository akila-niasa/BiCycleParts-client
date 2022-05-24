import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const MyProfile = () => {
 const[user]=useAuthState(auth)
    const { register, handleSubmit, reset } = useForm();

    const onSubmit=data=>{
        const userData = {
           
            name: user.displayName,
            education:data.education,
            location:data.location,
            phone:data.phone
          };
          fetch(`http://localhost:5000/user/${user.email}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({userData})
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data);
              if(data.upsertedCount>0||data.modifiedCount>0){
                  toast.success('Your Profile  Updated')
              }else{
                  toast.error('Try Again')
              }
          })
    }
    return (
        <div>
        <h1 className='text-center font-bold my-3'>
          My <span className='text-secondary'>ProFile</span>
        </h1>
        <div class="hero min-h-screen bg-base-200">
<div class="hero-content ">

<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <div class="card-body">
<form onSubmit={handleSubmit(onSubmit)}>
<div class="form-control">
      <label class="label">
        <span class="label-text">Name</span>
      </label>
      <input value={user?.displayName} class="input input-bordered" />
    </div>
<div class="form-control">
      <label class="label">
        <span class="label-text">Email</span>
      </label>
      <input  value={user?.email} class="input input-bordered" />
    </div>
<div class="form-control">
      <label class="label">
        <span class="label-text">Education</span>
      </label>
      <input  type='text'
                {...register("education", {
                  required: true,
                  
                })}
            
                placeholder='education' class="input input-bordered" />
    </div>
<div class="form-control">
      <label class="label">
        <span class="label-text">Location</span>
      </label>
      <input  type='text'
                {...register("location", {
                  required: true,
                })}
            
                placeholder='location' class="input input-bordered" />
    </div>
    
    <div class="form-control">
      <label class="label">
        <span class="label-text">Phone Number</span>
      </label>
      <input type="text"  {...register("phone", { required: true })}
                placeholder='number' class="input input-bordered"/>
     
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

export default MyProfile;