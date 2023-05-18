import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../../../assets/image/banner1.jpg';
import banner2 from '../../../assets/image/banner2.jpg';
import banner3 from '../../../assets/image/banner3.jpg';
import banner4 from '../../../assets/image/banner4.jpg';

const BannerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center my-12">
      <div className="md:w-1/2">
        <Slider {...settings}>
          <div>
            <img className="w-full h-[380px]" src={banner1} alt="Banner 1" />
          </div>
          <div>
            <img className="w-full h-[380px]" src={banner2} alt="Banner 2" />
          </div>
          <div>
            <img className="w-full h-[380px]" src={banner3} alt="Banner 3" />
          </div>
          <div>
            <img className="w-full h-[380px]" src={banner4} alt="Banner 4" />
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 animate-pulse text-blue-600">
          Welcome to<br /> our <span className="text-purple-600">Kids Vehicle Zone</span>
        </h1>
        <p className="text-lg md:text-xl animate-bounce text-yellow-500">
          <span className="text-red-500">We</span> <span className="text-green-500">Sell</span> <span className="text-blue-500">what</span> <span className="text-purple-500">you</span> <span className="text-yellow-500">want!</span>
        </p>
        <div className="mt-8">
          <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
