import React from 'react';
import { RiStarFill } from 'react-icons/ri';

const CustomerReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      review: 'I am happy with the vehicle and the deal I got from the company. I wanted a good smartphone that did the basics and the site recommended one that ticked all the boxes. Speaking with the service team helped me get exactly what I was looking for.',
      rating: 5,
      time: '1 day ago',
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'The only reason not to give 5 stars is the fact that I had to separately claim for the offered cash back deal, rather than it being automatic, and this info wasn not stated anywhere.',
      rating: 4,
      time: '60 minutes ago',
    },
    {
      id: 3,
      name: 'David Johnson',
      review: 'To be honest, this is the best platform I have ever seen in my life. This is the best platform for kids\' vehicles.',
      rating: 4.5,
      time: '2 hours ago',
    },
  ];

  return (
    <div className="bg-base-300 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-amber-500 text-center my-12">Customer Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={`https://picsum.photos/seed/${review.id}/40/40`}
                    alt={`Customer ${review.id}`}
                  />
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                    <div className="flex items-center mt-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <RiStarFill
                          key={index}
                          className={`h-5 w-5 text-yellow-500 ${
                            index < review.rating ? 'text-yellow-500' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-gray-600">{review.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="text-gray-500">
                  <span className="text-xs">{review.time}</span>
                </div>
              </div>
              <p className="text-gray-800">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewSection;
