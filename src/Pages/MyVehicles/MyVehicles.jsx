
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ViewVehicles from '../AllVehicles/ViewVehicles/ViewVehicles';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';

const MyVehicles = () => {
    const{user,loading} = useContext(AuthContext)
    const [myVehicles,setMyVehicles] =useState()

    useTitle('My Toys')
    const url =` https://toy-shop-server-umber.vercel.app/addvehicle?email=${user?.email}`
    useEffect(()=>{
        fetch(url,{
            method :'GET',
            headers :{
                authorization : `Bearer ${localStorage.getItem('kids-zone-access-token')}`
            }
        })
        .then(res=>res.json())
        .then(data =>setMyVehicles(data))
    },[url])
    if(loading){
        return  <progress className="progress progress-success w-56"></progress>
    }
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
                fetch(`https://toy-shop-server-umber.vercel.app/addveicle/${id}`,{
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

                      const remaining = myVehicles?.filter(v => v._id !== id)
                      setMyVehicles(remaining)
                  
                   }
                })
             
            }
          })


    }

    return (
        <div>
             <h1 className='text-center text-amber-600 font-bold text-5xl my-12'>My vehicles</h1>
             <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 my-12'>
             {

                myVehicles?.map( vehicles => <ViewVehicles key={vehicles?._id} vehicles={vehicles} handleDelete={handleDelete}></ViewVehicles>)

             }
        </div>
        </div>
    );
};

export default MyVehicles;