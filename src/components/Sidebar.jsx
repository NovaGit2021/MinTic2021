import React from 'react';
import LogoNovaG from './LogoNovaG';
import { Link } from 'react-router-dom';
import useActiveRoute from '../hooks/useActiveRoute';




const Sidebar = () => {
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
                <Link to='/'>
                <div className='my-4 p-3'>
                    <button className='justify-center p-1 my-6 bg-pink-400 hover:bg-pink-500 flex  w-full items-center text-white rounded-md 
                    transition  duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>Cerrar Sesión</button>
                </div>
                </Link>
            </nav>
            
    );
};

const Ruta = ({icono,ruta,nombre}) =>{

    const isActive = useActiveRoute(ruta);

    return(
        <Link to={ruta}>
            <button className={`p-1 my-6 bg-${isActive ? 'green' : 'blue'
            }-400 hover:bg-blue-500 flex w-full items-center text-white rounded-md ttransition  duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110`}>
            <i className={`${icono} w-10`} />
                {nombre}
            </button>
        </Link> 
    );
};


export default Sidebar

/* bg-blue-400 hover:bg-blue-500 */
