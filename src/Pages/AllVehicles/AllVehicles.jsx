import React from 'react';
import { RiStarSFill } from 'react-icons/ri';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const AllVehicles = () => {
    const allvehicles = useLoaderData()
    console.log(allvehicles)
    useTitle('All Vehicles')
    return (
        <div>
            <h1 className='text-amber-600 font-bold text-5xl text-center my-8'>All Vehicles</h1>


            <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10'>

                {
                    allvehicles?.map(cars => <><div key={cars?._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='h-72 w-96' src={cars?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{cars?.name}</h2>
                            <p className='flex items-center'>Ratings: {cars?.ratings} <RiStarSFill className="text-yellow-500 mr-2" ></RiStarSFill> </p>
                            <p className='font-bold'>price: {cars?.price} BTD</p>
                            <p>Stock: {cars?.stock} Left only </p>
                            <div className="card-actions justify-end">
                        <Link to={`/allvehicles/${cars?._id}`}><button className="btn btn-primary">View Details</button></Link>
                            </div>
                        </div>
                    </div></>)
                }

            </div>
        </div>
    );
};

export default AllVehicles;