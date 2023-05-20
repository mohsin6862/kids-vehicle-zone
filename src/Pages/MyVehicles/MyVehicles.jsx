import React, { useState } from 'react';
import { RiDeleteBinFill, RiEdit2Fill, RiEditFill, RiEditLine } from 'react-icons/ri';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyVehicles = () => {
    const MyVehicles = useLoaderData()
    console.log(MyVehicles)
    const [deleteVehicle ,setDeleteVehicle]= useState(MyVehicles)

    const handleDelete = (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
          
        
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addveicle/${id}`,{
                    method:'DELETE'
                })
                .then(res=> res.json())
                .then(data =>{
                    console.log(data)
                   if(data.deletedCount>0){
                    Swal.fire(
                        'Deleted!',
                        'Your vehcile has been deleted.',
                        'success'
                      )

                      const remaining = deleteVehicle?.filter(v => v._id !== id)
                      setDeleteVehicle(remaining)
                  
                   }
                })
             
            }
          })


    }
    return (
        <div>
            <h1 className='text-center text-amber-600 font-bold text-5xl'>My vehicles</h1>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    deleteVehicle?.map(vehicle => <>
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
                              <Link to={`/updatevehicle/${vehicle?._id}`}>  <button  className="btn btn-circle btn-outline text-xl">
                                      <RiEditLine/>
                                    </button></Link>
                                    <button onClick={()=>handleDelete(vehicle?._id)} className="btn btn-circle btn-outline text-xl">
                                      <RiDeleteBinFill/>
                                    </button>
                                    
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