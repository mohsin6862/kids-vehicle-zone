import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { RiStarSFill} from 'react-icons/ri';
import useTitle from '../../Hooks/useTitle';
import Swal from 'sweetalert2';

const Cars = () => {

    const allCars = useLoaderData()
    console.log(allCars)
    useTitle('Cars')
    const handleViewDetails =()=>{
      Swal.fire(
        {
         title: 'warning',
         text: 'To see view details you have to login first if you are already logged in please ignored this warning',
         type: 'success',
         icon:'warning',
         confirmButtonText: 'Done'
         
        }
        )
    }
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
                       <Link onClick={handleViewDetails} to={`/cardetails/${cars?._id}`}> <button className="btn btn-primary">View Details</button></Link>
                      </div>
                    </div>
                  </div></>)
                }

            </div>
        </div>
    );
};

export default Cars;