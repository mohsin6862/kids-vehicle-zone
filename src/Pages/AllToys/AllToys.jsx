import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import  { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const AllToys = () => {

    const toys = useLoaderData()
    const{user} = useContext(AuthContext)
    useTitle('All Toys')
    return (
        <div>
            <h1 className='text-5xl font-bold text-amber-600 text-center my-12'>All toys </h1>

            {
                toys.map(toy =><><div className="overflow-x-auto w-full">
                <table className="table w-full">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <th>Name</th>
                      <th>Seller information</th>
                      <th>Price</th>
                      <th>Ratings</th>

                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={toy?.photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{toy?.name}</div>
                            <div className="text-sm opacity-50">{toy?.title}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {user?.name}
                        <br/>
                        <span className="badge badge-ghost badge-sm">{user?.email}</span>
                      </td>
                      <td>{toy?.price} bdt</td>
                      <td>{toy?.ratings} Star</td>
                   
                    </tr>
               
                 
                  </tbody>
          
                
                  
                </table>
              </div></>)
            }
        </div>
    );
};

export default AllToys;