import React from 'react';
import { FaRegFlag, FaThumbsUp} from "react-icons/fa";
import { AiOutlineDesktop,AiOutlineUsergroupAdd } from "react-icons/ai";
const BusinessSummary = () => {
    return (
       <div>
           
            <h3 className=' text-3xl text-center m-3 font-serif'><span className='text-secondary font-bold'>Million Business </span> Trust Us</h3>
            <div className='bg-success p-5'>
           
            <h5 className='text-white text-xl text-center m-3'>We try to Understand what People's need</h5>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
                <div className="card  bg- neutral shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-white text-xl">  <FaRegFlag /></h2>
                        <h2 className='text-white'>74</h2>
                        <div className="card-actions justify-end">
                            <p className='text-white'>Countries</p>
                        </div>
                    </div>
                </div>
             
                <div className="card  bg- neutral shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-white text-xl">  <AiOutlineUsergroupAdd /></h2>
                        <h2 className='text-white'>235+</h2>
                        <div className="card-actions justify-end">
                            <p className='text-white'>Happy Clients</p>
                        </div>
                    </div>
                </div>
                <div className="card  bg- neutral shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-white text-xl">  <FaThumbsUp/></h2>
                        <h2 className='text-white'>432+</h2>
                        <div className="card-actions justify-end">
                            <p className='text-white'>Feedbacks</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-accent text-slate-50 ">
  <div className="card-body ">
    <h2 className="card-title">Have any question about us?</h2>
    <p>Please ask. Don't hesitate.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-secondary">Request For Quote</button>
      <button className="btn btn-ghost">Contract us</button>
    </div>
  </div>
</div>
        </div>
       </div>
    );
};

export default BusinessSummary;