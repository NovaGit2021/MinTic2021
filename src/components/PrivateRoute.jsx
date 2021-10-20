import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <div>Loading...</div>;

    return isAuthenticated ? (<>{children}</>):(
    <div className=''>
        <div className='flex justify-center text-6xl text-indigo-400'>No estas autorizado para ver este sitio.</div>
        <Link to='/'>
            <span className='m-10 flex justify-center text-black font-bold'>Registrate ombe</span>
        </Link>
    </div>
    );
};

export default PrivateRoute;