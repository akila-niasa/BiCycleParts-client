import React from 'react';

const Reviews = () => {
    return (
        <div className='d-flex justify-between items-center'>
            <h3 className='text-5xl text-center m-5'><span className='text-secondary'>Customes</span>Reviews</h3>
       <div className='w-76'>
       <div class="carousel ">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" class="w-full"/>
    <p>reviews</p>  
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-full"/>  
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-full"/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full"/>  
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Reviews;