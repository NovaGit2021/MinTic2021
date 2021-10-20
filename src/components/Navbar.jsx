import React from 'react';
import logo from "../media/logo.2.png";
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <nav className="px-3 bg-blue-300 shadow-xl">
            <ul className="p-2 flex w-full justify-between my-3">
                <img src={logo} className="h-12  "alt =""/>
                <li className='h-4 my-3 text-white font-extrabold '>ShoeStore.novaGit</li>
                
                <button onClick={() => loginWithRedirect({ returnTo: 'http://localhost:3000/admin' })}
                className= "bg-blue-300 hover:bg-blue-500 p-2 text-white rounded-lg shadow-md ttransition rounded duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
                Iniciar Sesión
                </button>


            </ul>
        </nav>
    );
}

export default Navbar
