import React from 'react';
import { RiDeleteBinFill, RiEditLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';

const ViewVehicles = ({vehicles,handleDelete}) => {
    useTitle('View Details')
    const {photo,title,price,stock,ratings,_id,}=vehicles
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img className='h-96' src={photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {name}

                                </h2>
                                <p>{title}</p>
                                <p>Ratings: {ratings} </p>
                                <p>Price: {price} BDT</p>
                                <p>Stock: {stock} Left only</p>
                                <div className="card-actions justify-end">
                              <Link to={`/updatevehicle/${_id}`}>  <button  className="btn btn-circle btn-outline text-xl">
                                      <RiEditLine/>
                                    </button></Link>
                                    <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline text-xl">
                                      <RiDeleteBinFill/>
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default ViewVehicles;