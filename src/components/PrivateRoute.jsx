import React, {useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import ReactLoading from 'react-loading';
import { obtenerDatosUsuario } from "../utils/api";

const PrivateRoute = ({children}) => {
    const {isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
       const fetchAuth0Token = async ()=>{
        const accesToken= await getAccessTokenSilently({
            audience:'api-autenticacion-zapatillas',
       });
       localStorage.setItem('token', accesToken)
       console.log(accesToken);
       await obtenerDatosUsuario((response)=>{
          console.log('response', response);
       },
       (err)=>{
          console.log('err', err)
       });
    };
    if (isAuthenticated){
        fetchAuth0Token();
    }
    }, [isAuthenticated, getAccessTokenSilently])

    if (isLoading) return <ReactLoading type='bubbles' color='#03a9f4' height={667} width={375} />

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