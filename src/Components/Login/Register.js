import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useTooken from '../../hooks/useToken';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useTooken(user || guser)

    if (loading || gloading || updating) {
        return <Loading />
    }
    if (token) {
        navigate('/');
    }
    let RegisterError
    if (error || gerror || updateError) {
        RegisterError = <p className='text-red-500'><small>{error?.message || gerror?.message || updateError?.message}</small></p>
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
    }
    return (
        <div>
            <div className='flex h-screen justify-center items-center mt-28'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold"><span className='text-secondary'>Please </span> Register</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs p-6">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {
                                    ...register('name', {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })
                                    }

                                />
                                <label >
                                    {
                                        errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>
                                    }
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs p-6">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
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
                                <label >
                                    {
                                        errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                    }
                                    {
                                        errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                    }
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs p-6">
                                <label className="label">
                                    <span className="label-text"> Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Your Password"
                                    className="input input-bordered w-full max-w-xs"
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
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            {RegisterError}
                            <input className='btn btn-banner p-6 w-full max-w-xs text-white' type="submit" value="Sign Up" />

                        </form>
                        <p><small>Already have an account? <Link className='text-secondary' to="/login">Please Login</Link></small></p>
                        <div className="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn-banner btn-outline"
                        >Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;