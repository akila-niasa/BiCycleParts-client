import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const MyPortfolio = () => {
    return (
     <div>
        <h1 className='text-center font-bold text-2xl m-5'>My <span className='text-secondary'>ProtFolio</span></h1>
        <div className='p-5 flex justify-center items-center'>
            
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Name: ATHQIYA AKILA</h2>
    <h2 className="card-title">Email: akilaniasa@gmail.com</h2>
    <p><span className='text-xl font-bold'>Education</span>: studies in honors </p>
    <p><span className='text-xl font-bold'>Institution</span>: National University </p>
    <p><span className='text-xl font-bold'>Subject</span>: Mathmatics </p>
    <div className="card-actions ">
     <p><span className='text-xl font-bold mb-5'>my project</span>: <span><a href="https://wedding-photographer-71122.web.app/">https://wedding-photographer-71122.web.app/</a></span>
     <br />
     <span><a href="https://warehouse-management-2d317.web.app/">https://warehouse-management-2d317.web.app/</a></span>
     <br />
     <span><a href="https://phone-seeker-cc2803.netlify.app/">https://phone-seeker-cc2803.netlify.app/</a></span>
     </p>
     <p><span className='text-xl font-bold'>linkedin id</span>: <a href=" https://www.linkedin.com/in/akila-niasa-30718522a/">https://www.linkedin.com/in/akila-niasa-30718522a/</a></p>
    </div>
  </div>
</div>
            {/* https://phone-seeker-cc2803.netlify.app/ */}
            {/* https://warehouse-management-2d317.web.app/ */}
        </div>
        <Footer/>
     </div>
    );
};

export default MyPortfolio;