import React, { useContext } from 'react';
import login2 from '../../assets/image/login2.jpg';
import login1 from '../../assets/image/login1.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {

    const {LogIn}= useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
  
      const handleLogin=(event)=>{
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email,password)
  
          LogIn(email,password)
          .then(result=>{
            const loggedUser = result.user;
            navigate(from,{replace:true})
            console.log(loggedUser)
          })
          .catch(error=>{
            console.log(error.message)
          })
        }

  return (
    <div className="hero min-h-screen bg-base-200 my-12">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-20">
          <img src={login2} alt="Login Image" className="w-full h-[480px] rounded" />
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl my-5 text-center font-bold">Login now!</h1>
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="LogIn" />
              </div>
            </form>
            <label className="label">
              <p>
                New to kids vehicle zone?{' '}
                <span className="label-text-alt text-lg text-[#FF3811] link link-hover font-bold">
                  <Link to="/signup">Please SingUp</Link>
                </span>{' '}
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
