import React from 'react';
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { HiOutlineTable,HiOutlineUserCircle } from "react-icons/hi";

const AboutUs = () => {
    return (
        <div>
            <h3 className='text-3xl text-center font-bold font-serif m-5'><span className='text-secondary'>About</span> Us</h3>
            <div className="hero min-h-screen bg-neutral">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://www.ecerimg.com/nimg/04/a5/d74152a9c748eb07a1e0d85b3112-350x250-1/baoji_quality_metals_co_ltd.jpg" className="w-full rounded-lg shadow-2xl" />
                    <div>
                        <p className=" text-right text-white">BiCycle Parts from Quality China Factory.
                            It is located in Boji China, which is engaged in the production of machining products and some metal material machining. Our company has strong technical force, advanced and sophisticated equipment, mature production technology a... <button className='text-secondary text-decoration none'>read more</button> </p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
                            <div className="card  bg- neutral shadow-xl">
                                <div className="card-body">
                                    <h5 className="card-title text-white text-xl"><BsReverseLayoutTextWindowReverse />
                                    </h5>

                                    <div className="card-actions justify-end">
                                        <p className='text-white'> <span className='font-bold'>Business Type:</span>

                                            <span> Manufacturer </span> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card  bg- neutral shadow-xl">
                                <div className="card-body">
                                    <h5 className="card-title text-white text-xl"><HiOutlineTable />
                                    </h5>

                                    <div className="card-actions justify-end">
                                        <p className='text-white'> <span className='font-bold'>Year Established:

                                        </span>

                                            <span> 2017</span> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card  bg- neutral shadow-xl">
                                <div className="card-body">
                                    <h5 className="card-title text-white text-xl"><HiOutlineUserCircle />
                                    </h5>

                                    <div className="card-actions justify-end">
                                        <p className='text-white'> <span className='font-bold'>Employee Number:



                                        </span>

                                            <span>40~50 </span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;