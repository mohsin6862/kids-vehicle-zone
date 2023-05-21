import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  const images = [
    {
      id: 1,
      title: 'Toy Car 1',
      imageUrl: 'https://ae01.alicdn.com/kf/HTB1WXwRRFXXXXaGXVXXq6xXFXXXj/1-36-Retro-Classic-Vintage-Car-Vehicle-Diecast-Alloy-Metal-Luxury-Car-Model-Collection-Model-Pull.jpg',
      category: 'Toy Car',
    },
    {
      id: 2,
      title: 'Toy Car 2',
      imageUrl: 'https://i.pinimg.com/originals/2b/13/de/2b13deda4eba256e8c3fe0cbc1d54f5e.jpg',
      category: 'Toy Car',
    },
    {
      id: 3,
      title: 'Vintage Car',
      imageUrl: 'https://i.etsystatic.com/14483344/r/il/273834/2048239102/il_fullxfull.2048239102_g3lb.jpg',
      category: 'Vintage Car',
    },
    {
      id: 4,
      title: 'Vintage Car ',
      imageUrl: 'https://www.tnttoytrucks.com/sitebuilder/images/Hubley1010-435x315.jpg',
      category: 'Vintage Car',
    },
    {
      id: 5,
      title: 'Vintage Car ',
      imageUrl: 'https://image.made-in-china.com/44f3j00nfQTlmbKfqkj/BMW-Concept-Toy-Car.jpg',
      category: 'Vintage Car',
    },
    {
      id: 6,
      title: 'Exclucive car',
      imageUrl: 'https://wallup.net/wp-content/uploads/2015/01/cadillac-vintage-car.jpg',
      category: 'Vintage Car',
    },
    {
      id: 7,
      title: 'Old King',
      imageUrl: 'https://ae01.alicdn.com/kf/HTB18s5QlY_I8KJjy1Xaq6zsxpXa3/Kids-mini-Classic-Model-Car-Toy-Vintage-Convertible-Pull-Back-Plastic-Metal-Flashing-Musical-Model-Cars.jpg',
      category: 'Vintage Car',
    },
    {
      id: 8,
      title: 'Vintage Car ',
      imageUrl: 'https://4.bp.blogspot.com/-OIbgn_Ga4R0/VARzAvX7PaI/AAAAAAAAA-Y/xQbZt1CE8B8/s1600/buick.jpg',
      category: 'Vintage Car',
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-amber-600 font-bold text-5xl text-center my-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => openImageModal(image)}
            data-aos="fade-up"
          >
            <img
              className="object-cover w-full h-64"
              src={image.imageUrl}
              alt={image.title}
            />
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black via-transparent to-transparent"
              data-aos="fade-down"
            >
              <div className="text-white text-center p-4">
                <h3 className="text-lg font-semibold">{image.title}</h3>
                <p className="text-sm">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="max-w-3xl mx-auto">
            <img
              className="object-contain max-h-screen"
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
            />
            <div className="absolute top-0 right-0 mt-2 mr-2">
              <button
                className="text-white text-2xl focus:outline-none"
                onClick={closeImageModal}
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
