import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';
import useTooken from '../../hooks/useToken';


const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useTooken(user || guser)

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });


        }
    }, [token, from, navigate])
    if (loading || gloading) {
        return <Loading />
    }


    let logInError
    if (error || gerror) {
        logInError = <p className='text-red-500'><small>{error?.message || gerror?.message}</small></p>
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);

    }


    return (
        <div>
            <div className='flex h-screen justify-center items-center mt-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold"><span className='text-secondary'>Please</span> Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs p-6">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input

                                    type="email"
                                    placeholder="Your Email" className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}

                                />
                                <label className=''>
                                    {errors.email?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                    }
                                    {errors.email?.type === 'pattern' &&
                                        <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                    }
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs p-6">
                                <label className="label">
                                    <span className="label-text ">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Your Password" className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}

                                />

                                <label className=''>
                                    {errors.password?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                    }
                                    {errors.password?.type === 'pattern' &&
                                        <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                    }
                                </label>

                            </div>
                            {logInError}
                            <input className='btn btn-banner p-6 w-full max-w-xs text-white' type="submit" value="Login" />


                        </form>

                        <p><small>New to BiCycle store <Link className='text-secondary' to="/signup"> Create New Account</Link></small></p>
                        <div className="divider text-secondary">OR</div>
                        <button onClick={() => signInWithGoogle()}
                            className="btn-banner btn-outline"
                        >Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;