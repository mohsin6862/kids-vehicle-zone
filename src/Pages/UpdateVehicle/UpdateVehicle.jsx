import React from 'react';
import { RiArrowLeftFill } from 'react-icons/ri';
import { Link, useLoaderData, } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateVehicle = () => {
  const update = useLoaderData()
  console.log(update)
  const handleUpdateVehicle = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const stock = form.stock.value;
    const photo = form.photo.value;

    const newVehicle = { name, title, description, price, ratings, stock, photo }
    console.log(newVehicle)

    fetch(`https://toy-shop-server-umber.vercel.app/addvehicle/${update?._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newVehicle)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged == true) {
          Swal.fire(
            {
              title: 'Success',
              text: 'Vehicle updated successfully',
              type: 'success',
              icon: 'success',
              confirmButtonText: 'Done'

            }
          )

        }
      })

  }
  return (
    <>
      <Link to='/'>  <h3 className='text-2xl mt-5 ml-5 flex items-center'><RiArrowLeftFill></RiArrowLeftFill><span className='ml-3'>Back to home</span></h3></Link>
      <h1 className="text-amber-600 font-bold text-5xl text-center my-8">Please Update {update?.name}</h1>
      <p className='text-center w-[60%] mx-auto mt-5'>You can update any information about your Toys.</p>

      <div className='w-full mx-auto mt-5'>

        <form onSubmit={handleUpdateVehicle} >
          <div className='w-[50%] mx-auto grid grid-cols-2 gap-8'>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Vehicle Name</span>
              </label>
              <label className="input-group">

                <input type="text" defaultValue={update?.name} name='name' placeholder="Enter Vehicle name" className="input input-bordered" />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">

                <input type="text" defaultValue={update?.title} name='title' placeholder="Enter vehicle title" className="input input-bordered" />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">description</span>
              </label>
              <label className="input-group">

                <input type="text" defaultValue={update?.description} name='description' placeholder="Enter vehicle description" className="input input-bordered" />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">

                <input type="text" defaultValue={update?.price} name='price' placeholder="Enter vehicle price" className="input input-bordered" />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Ratings</span>
              </label>
              <label className="input-group">

                <input type="text" defaultValue={update?.ratings} name='ratings' placeholder="Enter vehicle ratings" className="input input-bordered" />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Stock</span>
              </label>
              <label className="input-group">

                <input type="text" defaultValue={update?.stock} name='stock' placeholder="Enter vehicle stock" className="input input-bordered" />
              </label>
            </div>
          </div>
          <div className=" w-[50%] mx-auto">
            <label className="label">
              <span className="">Photo URL</span>
            </label>
            <label >

              <input type="text" defaultValue={update?.photo} name='photo' placeholder="Enter vehicle Photo URL" className="input input-bordered w-full" />
            </label>
          </div>
          <div className=" w-[50%] mx-auto">

            <input type="submit" value="Update vehicle" className="btn btn-block  btn-warning my-5" />
          </div>
        </form>

      </div>
    </>
  );
};
export default UpdateVehicle;