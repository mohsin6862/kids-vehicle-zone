import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';



const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location = useLocation()
    console.log(user)

    console.log(location)

    if(loading){
        return  <div className="radial-progress" style={{"--value":80}}>80%</div>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} replace to='/login'></Navigate>
};

export default PrivateRoute;