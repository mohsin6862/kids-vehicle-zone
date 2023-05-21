import React, { useContext } from 'react';
import { RiArrowLeftFill, } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const AddVehicles = () => {
  const { user } = useContext(AuthContext)
  useTitle('Add Toys')
  const handleAddVehicle = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const stock = form.stock.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const yourname = form.yourname.value;
    form.reset('')
    const newVehicle = { name, title, description, price, ratings, stock, photo, email, yourname }
    console.log(newVehicle)

    fetch('https://toy-shop-server-umber.vercel.app/addvehicle', {
      method: 'POST',
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
              text: 'vehicle added successfully',
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
      <h1 className="text-amber-600 font-bold text-5xl text-center my-8">Add new Vehicle</h1>
      <p className='text-center w-[60%] mx-auto mt-5'>You can add your vehicles to our website, so that you can see it letter. And one more opertunaty for you, you csn sell your vehicles through our website </p>

      <div className='w-full mx-auto mt-5'>

        <form onSubmit={handleAddVehicle} >
          <div className='w-[50%] mx-auto grid grid-cols-2 gap-8'>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <label className="input-group">

                <input type="text" name='yourname' placeholder="Enter your name" className="input input-bordered" />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <label className="input-group">

                <input type="text" name='email' placeholder="Enter Your Email" defaultValue={user?.email} readOnly className="input input-bordered" />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Vehicle Name</span>
              </label>
              <label className="input-group">

                <input type="text" name='name' placeholder="Enter Vehicle name" className="input input-bordered" />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">

                <input type="text" name='title' placeholder="Enter vehicle title" className="input input-bordered" />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">description</span>
              </label>
              <label className="input-group">

                <input type="text" name='description' placeholder="Enter vehicle description" className="input input-bordered" />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">

                <input type="text" name='price' placeholder="Enter vehicle price" className="input input-bordered" />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Ratings</span>
              </label>
              <label className="input-group">

                <input type="text" name='ratings' placeholder="Enter vehicle ratings" className="input input-bordered" />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Stock</span>
              </label>
              <label className="input-group">

                <input type="text" name='stock' placeholder="Enter vehicle stock" className="input input-bordered" />
              </label>
            </div>
          </div>
          <div className=" w-[50%] mx-auto">
            <label className="label">
              <span className="">Photo URL</span>
            </label>
            <label >

              <input type="text" name='photo' placeholder="Enter vehicle Photo URL" className="input input-bordered w-full" />
            </label>
          </div>
          <div className=" w-[50%] mx-auto">

            <input type="submit" value="Add vehicle" className="btn btn-block  btn-warning my-5" />
          </div>
        </form>

      </div>
    </>
  );
};

export default AddVehicles;