import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation();
    console.log(location.pathname)

    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if(user){
        return children;
    }

    return <Navigate state={location?.pathname || '/'} to='/login'></Navigate>

};

export default Privateroute;