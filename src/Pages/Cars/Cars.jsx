import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { RiStarSFill} from 'react-icons/ri';

const Cars = () => {

    const allCars = useLoaderData()
    console.log(allCars)
    return (
        <div className='my-10'>
            <h1 className='text-center text-amber-600 font-bold text-5xl'>Our Top seller Cars</h1>

            <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10'>

                {
                    allCars?.map(cars =><><div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-72 w-96' src={cars?.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{cars?.name}</h2>
                      <p>{cars?.description}</p>
                      <p className='flex items-center'>Ratings: {cars?.ratings} <RiStarSFill className="text-yellow-500 mr-2" ></RiStarSFill> </p>
                      <p className='font-bold'>price: {cars?.price} BTD</p>
                      <p>Stock: {cars?.stock} Left only </p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div></>)
                }

            </div>
        </div>
    );
};

export default Cars;