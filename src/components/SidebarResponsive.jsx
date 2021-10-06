import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const SidebarResponsive = () => {
    const [mostrarNavegacion,setMostrarNavegacion] = useState(false)
    return(
        <div className="md:hidden" onClick={()=>{setMostrarNavegacion(!mostrarNavegacion)}}>
            <i className={`mx-4 fas fa-${mostrarNavegacion?'times':'bars'} hover:text-yellow-600`} />
            {mostrarNavegacion && 
            <ul className="bg-gray-900">
                <ResponsiveRouter nombre='Zapatos' ruta='/admin/zapatillas'/>
                <ResponsiveRouter nombre='Ventas' ruta='/admin/ventas'/>
                <ResponsiveRouter nombre='Usuarios' ruta='/admin/usuarios'/>
            </ul>}
        </div>
    );
};

const ResponsiveRouter = ({ruta,nombre}) => {
    return( 
    <Link to={ruta}>
    <li className="text-gray-200">{nombre}</li>
    </Link>
    );
};

export default SidebarResponsive;