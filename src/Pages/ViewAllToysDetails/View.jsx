import React from 'react';
import { useLoaderData } from 'react-router-dom';

const View = () => {
    const details = useLoaderData()
    return (
        <div>
            <h1 className='text-amber-600 font-bold text-5xl text-center my-8'>Details of {details?.name}</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={details?.photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{details?.title}</h1>
                        <p className="py-6"><span className='font-bold text-lg'>Description:</span> {details?.description}</p>
                        <p className="py-2"><span className='font-bold text-lg'>Ratings: </span> {details?.ratings}</p>
                        <p className="py-2"><span className='font-bold text-lg'>Seller:</span> {details?.yourname} </p>
                        <p className="py-2"><span className='font-bold text-lg'>Price:</span> {details?.price} BDT</p>
                        <p className="py-2"><span className='font-bold text-lg'>Stock:</span> {details?.stock} left only</p>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;