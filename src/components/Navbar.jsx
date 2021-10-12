import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../media/logo.2.png"

const Navbar = () => {
    return (
        <nav className="px-3 bg-blue-300">
            <ul className="p-2 flex w-full justify-between my-3">
                <img src={logo} className="h-12  "alt =""/>
                <li className='h-4 my-3 text-white font-extrabold'>ShoeStore.novaGit</li>
                
                <li className= "px-3">

                    <Link to='/login'>
                    <button className= "bg-blue-600 p-2 text-white rounded-lg shadow-md ttransition rounded duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">Iniciar Sesión</button>

                    
                    </Link>
                </li>    
                
            </ul>
        </nav>
    );
}

export default Navbar
