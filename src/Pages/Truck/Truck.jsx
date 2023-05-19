import React from 'react';
import { RiStarSFill } from 'react-icons/ri';
import { useLoaderData } from 'react-router-dom';

const Truck = () => {
    const allTruck = useLoaderData()
    console.log(allTruck)
    return (
        <div>
            <h1 className='text-center text-amber-600 font-bold text-5xl'>Our Top seller Truck</h1>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10'>

                {
                    allTruck?.map(truck => <><div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='h-72 w-96' src={truck?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{truck?.name}</h2>
                            <p>{truck?.description}</p>
                            <p className='flex items-center'>Ratings: {truck?.ratings} <RiStarSFill className="text-yellow-500 mr-2" ></RiStarSFill> </p>
                            <p className='font-bold'>price: {truck?.price} BTD</p>
                            <p>Stock: {truck?.stock} Left only </p>
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

export default Truck;