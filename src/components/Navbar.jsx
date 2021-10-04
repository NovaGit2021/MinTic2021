import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="bg-indigo-500">
            <ul className="flex w-full justify-between my-3">
                <li>logo</li>
                <li>Nav1</li>
                <li>Nav2</li>
                
                <li className= "px-3">
                    <Link to="/login">
                    <button className= "bg-green-600 p-2 text-white rounded-lg shadow-md hover:bg-grey-600">Iniciar Sesión</button>
                    
                    </Link>
                </li>    
                
            </ul>
        </nav>
    );
}

export default Navbar
