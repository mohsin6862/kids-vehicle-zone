import React from 'react';
import { RiStarSFill } from 'react-icons/ri';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const Collectors = () => {
    const allCollectors = useLoaderData()
    useTitle('Collectors')
    return (
        <div>
            <h1 className='text-center text-amber-600 font-bold text-5xl'>Our Top seller Collectors</h1>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10'>

                {
                    allCollectors?.map(collector => <><div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='h-72 w-96' src={collector?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{collector?.name}</h2>
                            <p>{collector?.description}</p>
                            <p className='flex items-center'>Ratings: {collector?.ratings} <RiStarSFill className="text-yellow-500 mr-2" ></RiStarSFill> </p>
                            <p className='font-bold'>price: {collector?.price} BTD</p>
                            <p>Stock: {collector?.stock} Left only </p>
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

export default Collectors;