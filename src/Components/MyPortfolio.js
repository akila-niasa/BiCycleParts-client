import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div className='p-5 flex justify-center items-center '>
            
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Name: ATHQIYA AKILA</h2>
    <h2 class="card-title">Email: akilaniasa@gmail.com</h2>
    <p><span className='text-xl font-bold'>Education</span>: studies in honors </p>
    <p><span className='text-xl font-bold'>Institution</span>: National University </p>
    <p><span className='text-xl font-bold'>Subject</span>: Mathmatics </p>
    <div class="card-actions ">
     <p><span className='text-xl font-bold'>my project</span>: <span><a href="https://wedding-photographer-71122.web.app/">https://wedding-photographer-71122.web.app/</a></span>
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
    );
};

export default MyPortfolio;