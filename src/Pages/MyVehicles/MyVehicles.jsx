import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyVehicles = () => {
    const MyVehicles = useLoaderData()
    console.log(MyVehicles)
    return (
        <div>
             <h1 className='text-center text-amber-600 font-bold text-5xl'>My vehicles</h1>
             <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    MyVehicles?.map(vehicle =><>
                    <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={vehicle?.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">
                      {vehicle?.name}
                        
                      </h2>
                      <p>{vehicle?.title}</p>
                      <p>Ratings: {vehicle?.ratings} </p>
                      <p>Price: {vehicle?.price} BDT</p>
                      <p>Stock: {vehicle?.stock} Left only</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                      </div>
                    </div>
                  </div>
                    </>)
                }
             </div>
        </div>
    );
};

export default MyVehicles;