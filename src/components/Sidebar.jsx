import React from 'react';
import LogoNovaG from './LogoNovaG';
import { Link } from 'react-router-dom';
import useActiveRoute from '../hooks/useActiveRoute';
import { useAuth0 } from "@auth0/auth0-react";




const Sidebar = () => {
    const { logout } = useAuth0();
    return(
            <nav className= 'hidden md:flex md:w-72  h-full flex-col bg-blue-300 p-6'>
                <Link to='/admin'>
                    <LogoNovaG />
                </Link>
                <div className="my-4 p-3">
                    <Ruta icono="fas fa-solid fa-user" ruta="/admin/perfil" nombre="Perfil" />
                    <Ruta icono="fas fa-solid fa-shoe-prints" ruta="/admin/zapatillas" nombre="Zapatos" />
                    <Ruta icono="fas fa-solid fa-shopping-bag" ruta="/admin/ventas" nombre="Ventas" />
                    <Ruta icono="fas fa-solid fa-users" ruta="/admin/usuarios" nombre="Usuarios" />
                    
                </div>
                <div className='my-4 p-3'>
                    <button onClick={() => logout({ returnTo: window.location.origin })} 
                    className='justify-center p-1 my-6 bg-indigo-400 hover:bg-indigo-500 flex  w-full items-center text-white rounded-md 
                    transition  duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg'>Cerrar Sesión</button>
                </div>
            </nav>
            
    );
};

const Ruta = ({icono,ruta,nombre}) =>{

    const isActive = useActiveRoute(ruta);

    return(
        <Link to={ruta}>
            <button className={`p-1 my-6 bg-${isActive ? 'blue-300' : 'blue'
            }-400 hover:bg-blue-500 flex w-full items-center text-white rounded-md ttransition  duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg`}>
            <i className={`${icono} w-10`} />
                {nombre}
            </button>
        </Link> 
    );
};


export default Sidebar

/* bg-blue-400 hover:bg-blue-500 */
