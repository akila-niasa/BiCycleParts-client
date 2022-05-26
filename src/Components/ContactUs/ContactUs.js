import React from 'react';
import { FiSend } from "react-icons/fi";
const ContactUs = () => {
  return (
    <div>
      <h2 className='p-10 text-center text-4xl font-bold font-serif'><span className='text-secondary '>Contact </span>Us</h2>
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure><img src="https://i.ibb.co/gvW1n0C/images-5.png" alt="" /></figure>

        <div className="card-body justify-center items-center">
          <div >
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" className="input input-bordered w-96" />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea type="text" placeholder="message" className="input input-bordered w-96 h-5/6" />
          </div>
          <div>
            <button className='btn btn-banner  m-5' type="submit">
              Send <FiSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;