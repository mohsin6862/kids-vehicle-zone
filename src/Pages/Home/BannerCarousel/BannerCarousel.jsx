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
        <h1 className="text-2xl md:text-4xl font-bold mb-4 animate-translate">
          Welcome to our Fancy Carousel
        </h1>
        <p className="text-lg md:text-xl animate-translate">
          Enjoy the beautiful design and animated text!
        </p>
      </div>
    </div>
  );
};

export default BannerCarousel;
