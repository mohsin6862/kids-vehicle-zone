import React, { useEffect, useState } from 'react';
import { RiStarSFill } from 'react-icons/ri';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const FeaturedProduct = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/featured')
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className='text-amber-600 font-bold text-5xl text-center my-8'>Our Featured Product</h1>
      <div className='mt-10'>
        <Slider {...settings}>
          {featured.map((feature, index) => (
            <div key={index} className="card w-full sm:w-96 bg-base-100 shadow-xl mx-2">
              <figure><img className='h-72 w-full object-cover' src={feature?.image} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{feature?.name}</h2>
                <p>{feature?.description}</p>
                <p className='flex items-center'>Ratings: {feature?.ratings} <RiStarSFill className="text-yellow-500 mr-2" ></RiStarSFill> </p>
                <p className='font-bold'>Price: {feature?.price} BTD</p>
                <p>Stock: {feature?.stock} Left only</p>
              
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className='flex justify-center my-8'>
        <Link
          to='/allvehicles'
          className='px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600'
        >
          View All Vehicle
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProduct;
