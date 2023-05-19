import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import car from '../../../assets/image/collector.jpeg';
import truck from '../../../assets/image/Truck2.jpeg';
import collector from '../../../assets/image/car2.jpg';

const ShopByCategory = () => {
  const location = useLocation();

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <div className='my-8 w-full max-w-6xl mx-auto'>
      <div>
        <h1 className='text-6xl font-bold text-center text-amber-500'>Shop by Top Categories</h1>
      </div>

      <div className='w-full ml-[400px] grid grid-cols-3 gap-16 mt-16'>
        <Tabs>
          <TabList className='flex justify-center space-x-20'>
            <Tab>
              <h3
                className={`text-2xl font-bold text-center mt-4 cursor-pointer ${
                  isActiveRoute('/cars') ? 'text-blue-500' : 'text-gray-500'
                }`}
              >
                Cars
              </h3>
            </Tab>
            <Tab>
              <h3
                className={`text-2xl font-bold text-center mt-4 cursor-pointer ${
                  isActiveRoute('/trucks') ? 'text-blue-500' : 'text-gray-500'
                }`}
              >
                Trucks
              </h3>
            </Tab>
            <Tab>
              <h3
                className={`text-2xl font-bold text-center mt-4 cursor-pointer ${
                  isActiveRoute('/collectors') ? 'text-blue-500' : 'text-gray-500'
                }`}
              >
                Collectors
              </h3>
            </Tab>
          </TabList>

          <TabPanel className='w-full flex justify-center'>
            <div className='flex flex-col items-center'>
              <div className='relative'>
                <img
                  className='w-72 h-60 rounded-lg hover:scale-105 transition-all duration-300 mt-16'
                  src={car}
                  alt=''
                />
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-blue-500 bg-opacity-30 opacity-0 hover:opacity-100 transition-all duration-300 rounded-lg'></div>
              </div>
              <Link
                to='/cars'
                className='mt-4 text-lg font-semibold text-blue-500 hover:text-blue-700'
              >
                View Cars
              </Link>
            </div>
          </TabPanel>
          <TabPanel className='flex justify-center'>
            <div className='flex flex-col items-center'>
              <div className='relative'>
                <img
                  className='w-72 h-60 rounded-lg hover:scale-105 transition-all duration-300 mt-16'
                  src={truck}
                  alt=''
                />
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-blue-500 bg-opacity-30 opacity-0 hover:opacity-100 transition-all duration-300 rounded-lg'></div>
              </div>
              <Link
                to='/trucks'
                className='mt-4 text-lg font-semibold text-blue-500 hover:text-blue-700'
              >
                View Trucks
              </Link>
            </div>
          </TabPanel>
          <TabPanel className='flex justify-center'>
            <div className='flex flex-col items-center'>
              <div className='relative'>
                <img
                  className='w-72 h-60 rounded-lg hover:scale-105 transition-all duration-300 mt-16'
                  src={collector}
                  alt=''
                />
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-blue-500 bg-opacity-30 opacity-0 hover:opacity-100 transition-all duration-300 rounded-lg'></div>
              </div>
              <Link
                to='/collectors'
                className='mt-4 text-lg font-semibold text-blue-500 hover:text-blue-700'
              >
                View Collectors
              </Link>
            </div>
          </TabPanel>
        </Tabs>
      </div>

      {/* Additional Features */}
      <div className='flex justify-center mt-10'>
        <p className='text-gray-500 text-sm'>
          Explore our wide range of categories and find your favorite items.
        </p>
      </div>
      <div className='flex justify-center mt-8'>
        <Link
          to='/categories'
          className='px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600'
        >
          Browse All Categories
        </Link>
      </div>
    </div>
  );
};

export default ShopByCategory;

