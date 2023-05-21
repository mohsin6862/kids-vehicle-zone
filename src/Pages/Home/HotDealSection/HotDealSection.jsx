import React from 'react';
import { RiStarSFill } from 'react-icons/ri';

const HotDealSection = () => {
  const offers = [
    {
      "id": 1,
      "title": "Premium Package",
      "price": "$99",
      "duration": "/month",
      "image": "https://i.ibb.co/x7mZgQb/offer1.jpg",
      "features1": "Priority customer support",
      "features2": "Access to exclusive features",
      "features3": "Unlimited product listings",
      "features4": "30-day money-back guarantee"
    },
    {
      "id": 2,
      "title": "Standard Package",
      "price": "$49",
      "duration": "/month",
      "image": "https://i.ibb.co/wWRJhhB/offer2.jpg",
      "features1": "Access to standard features",
      "features2": "Customer support",
      "features3": "Limited product listings",
      "features4": "30-day money-back guarantee"
    },
    {
      "id": 3,
      "title": "Regular Package",
      "price": "$19",
      "duration": "/month",
      "image": "https://i.ibb.co/3FH3hK3/offer3.jpg",
      "features1": "Access to basic features",
      "features2": "Limited customer support",
      "features3": "Limited product listings",
      "features4": "30-day money-back guarantee"
    }
  ];

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-amber-500">Hot Deals</h2>
          <p className="text-lg mb-8 text-amber-600">Check out our latest hot deals and save big!</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div key={offer.id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={offer.image}
                    alt="Hot Deal"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="bg-red-500 text-white font-bold px-2 py-1 rounded">
                      50% Off
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-gray-800 mr-2">{offer.price}</span>
                    <span className="text-gray-500 text-sm">{offer.duration}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{offer.title}</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <RiStarSFill className="text-yellow-500 mr-2" />
                      <span>{offer.features1}</span>
                    </li>
                    <li className="flex items-center">
                      <RiStarSFill className="text-yellow-500 mr-2" />
                      <span>{offer.features2}</span>
                    </li>
                    <li className="flex items-center">
                      <RiStarSFill className="text-yellow-500 mr-2" />
                      <span>{offer.features3}</span>
                    </li>
                    <li className="flex items-center">
                      <RiStarSFill className="text-yellow-500 mr-2" />
                      <span>{offer.features4}</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 py-4 px-6">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out w-full">
                    Get Offer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotDealSection;
