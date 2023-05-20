import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import car from '../../../assets/image/collector.jpeg';
import truck from '../../../assets/image/Truck2.jpeg';
import collector from '../../../assets/image/car2.jpg';
import car2 from '../../../assets/image/car2 (2).jpg'
import car3 from '../../../assets/image/car3.jpg'
import collector1 from '../../../assets/image/collector1.jpg'
import collector2 from '../../../assets/image/Collector2.jpg'

const ShopByCategory = () => {
  const location = useLocation();

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <div className='my-8 w-full max-w-6xl mx-auto bg-base-300 p-5'>
      <div className='flex justify-center'>
        <h1 className='text-5xl font-bold text-amber-500'>Shop by Top Categories</h1>
      </div>

      <div className='flex justify-center mt-8'>
        <Tabs>
          <TabList className='flex justify-center space-x-6'>
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
            <div className='grid grid-cols-3 gap-4 mt-8'>
              <div className='relative'>
                <img
                  className='w-full h-60 rounded-lg hover:scale-105 transition-all duration-300'
                  src={car2}
                  alt=''
                />
                <div className='absolute top-0 left-0 right-0 bottom-0 rounded-lg'>
                  <div className='bg-gradient-to-b from-transparent to-black opacity-70 h-full rounded-lg'></div>
                </div>
                <Link
                  to='/cars'
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 text-2xl font-semibold  text-amber-600   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) '
                >
                  New Arrival
                </Link>
              </div>
              <div className='relative'>
                <img
                  className='w-full h-60 rounded-lg hover:scale-105 transition-all duration-300'
                  src={car}
                  alt=''
                />
                <div className='absolute top-0 left-0 right-0 bottom-0 rounded-lg'>
                  <div className='bg-gradient-to-b from-transparent to-black opacity-70 h-full rounded-lg'></div>
                </div>
                <Link
                  to='/cars'
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 text-2xl font-semibold text-amber-600 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) '
                >
                  All Cars
                </Link>
              </div>
              <div className='relative'>
                <img
                  className='w-full h-60 rounded-lg hover:scale-105 transition-all duration-300'
                  src={car3}
                  alt=''
                />
                <div className='absolute top-0 left-0 right-0 bottom-0 rounded-lg'>
                  <div className='bg-gradient-to-b from-transparent to-black opacity-70 h-full rounded-lg'></div>
                </div>
                <Link
                  to='/allvehicles'
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 text-2xl font-semibold  text-amber-600   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) '
                >
                  Exclusive Car
                </Link>
              </div>
            </div>
          </TabPanel>
          <TabPanel className='flex justify-center'>
            <div className='grid grid-cols-3 gap-4 mt-8'>
              <div className='relative'>
                <img
                  className='w-full h-60 rounded-lg hover:scale-105 transition-all duration-300'
                  src={truck}
                  alt=''
                />
                <div className='absolute top-0 left-0 right-0 bottom-0 rounded-lg'>
                  <div className='bg-gradient-to-b from-transparent to-black opacity-70 h-full rounded-lg'></div>
                </div>
                <Link
                  to='/trucks'
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 text-2xl  text-amber-600  font-semibold  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) '
                >
                 New Arrival
                </Link>
              </div>
              <div className='relative'>
                <img
                  className='w-full h-60 rounded-lg hover:scale-105 transition-all duration-300'
                  src={truck}
                  alt=''
                />
                <div className='absolute top-0 left-0 right-0 bottom-0 rounded-lg'>
                  <div className='bg-gradient-to-b from-transparent to-black opacity-70 h-full rounded-lg'></div>
                </div>
                <Link
                  to='/trucks'
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 text-2xl  text-amber-600  font-semibold  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) '
                >
                  All Trucks
                </Link>
              </div>
              <div className='relative'>
                <img
                  className='w-full h-60 rounded-lg hover:scale-105 transition-all duration-300'
                  src={truck}
                  alt=''
                />
                <div className='absolute top-0 left-0 right-0 bottom-0 rounded-lg'>
                  <div className='bg-gradient-to-b from-transparent to-black opacity-70 h-full rounded-lg'></div>
                </div>
                <Link
                  to='/allvehicles'
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 text-2xl  text-amber-600  font-semibold  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) '
                >
                  Exclusive Trucks
                </Link>
              </div>
            </div>
          </TabPanel>
          <TabPanel className='flex justify-center'>
            <div className='grid grid-cols-3 gap-4 mt-8'>
              <div className='relative'>
                <img
                  className='w-full h-60 rounded-lg hover:scale-105 transition-all duration-300'
                  src={collector2}
                  alt=''
                />
                <div className='absolute top-0 left-0 right-0 bottom-0 rounded-lg'>
                  <div className='bg-gradient-to-b from-transparent to-black opacity-70 h-full rounded-lg'></div>
                </div>
                <Link
                  to='/collectors'
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 text-2xl  text-amber-600  font-semibold  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) '
                >
                 New Arrival
                </Link>
              </div>
              <div className='relative'>
                <img
                  className='w-full h-60 rounded-lg hover:scale-105 transition-all duration-300'
                  src={collector1}
                  alt=''
                />
                <div className='absolute top-0 left-0 right-0 bottom-0 rounded-lg'>
                  <div className='bg-gradient-to-b from-transparent to-black opacity-70 h-full rounded-lg'></div>
                </div>
                <Link
                  to='/collectors'
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 text-2xl  text-amber-600  font-semibold  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) '
                >
                  All Collectors
                </Link>
              </div>
              <div className='relative'>
                <img
                  className='w-full h-60 rounded-lg hover:scale-105 transition-all duration-300'
                  src={collector}
                  alt=''
                />
                <div className='absolute top-0 left-0 right-0 bottom-0 rounded-lg'>
                  <div className='bg-gradient-to-b from-transparent to-black opacity-70 h-full rounded-lg'></div>
                </div>
                <Link
                  to='/allvehicles'
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 text-2xl  text-amber-600  font-semibold  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) '
                >
                  Exclusive Collectors
                </Link>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>

      {/* Additional Features */}

      <div className='flex justify-center mt-8'>
        <Link
          to='/allvehicles'
          className='px-6 py-3 text-lg  text-amber-600  font-semibold  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) '
        >
          View All Vehicles
        </Link>
      </div>
    </div>
  );
};

export default ShopByCategory;
