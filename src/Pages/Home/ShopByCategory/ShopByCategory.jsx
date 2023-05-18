import React from 'react';
import car from '../../../assets/image/collector.jpeg'
import truck from '../../../assets/image/Truck2.jpeg'
import collector from '../../../assets/image/car2.jpg'
import { Link } from 'react-router-dom';

const ShopByCategory = () => {
    return (
        <div className='my-8'>
            <div>
                <h1 className='text-6xl font-bold text-center text-amber-500'>Shop by Top Categories</h1>
            </div>

           <div className='w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 mt-16'>
           <div className='w-60 '>
               <Link> <img className='w-60 bg-cover rounded-full' src={car} alt="" /></Link>
                <h3 className='text-2xl font-bold text-center mt-4 '>Cars</h3>
            </div>
            <div className='w-60 '>
               <Link> <img className='w-60 bg-cover rounded-full' src={truck} alt="" /></Link>
                <h3 className='text-2xl font-bold text-center mt-4 '>Truck</h3>
            </div>
            <div className='w-60 '>
                <Link><img className='w-60 bg-cover rounded-full' src={collector} alt="" /></Link>
                <h3 className='text-2xl font-bold text-center mt-4 '>Collector</h3>
            </div>
           </div>
        </div>
    );
};

export default ShopByCategory;