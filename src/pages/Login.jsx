import React from 'react';
import { Link } from 'react-router-dom';
import logoGoogle from "../media/google_logo.png"


const Login = () => {
  return (
    <div className='p-5 flex flex-col w-full justify-center items-center'>
      <h2 className='m-4 text-center text-3xl font-extrabold text-gray-900'>
        Inicia sesión en tu cuenta
      </h2>
      <form className='p-5 mt-8 max-w-md'>
        <div>
          <input
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
            type='email'
            placeholder='novagit@c.com'
            required
          />
          <input
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
            type='password'
            placeholder='contraseña'
            required
          />
        </div>
        <div className='p-3'>
          <div className="flex justify-center">
            <label htmlFor='recuerdame'>
              <input type='checkbox' name='recuerdame'/>
              Recuerdame
            </label>
          </div>
          <div className="m-3">
            <Link to='/'>¿Olvidaste tu contraseña?</Link>
          </div>
        </div>
        <div className="flex justify-center bg-gray-200 p-2 rounded-lg shadow-md ttransition rounded duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-90 ">
          <Link to='/admin'>
            <button type='submit'>Iniciar Sesión</button>
          </Link>
        </div>
        <div className= "m-3 flex justify-center">------- O -------</div>
        <div className="flex flex-col p-1">
        <button className=" p-2 flex justify-center bg-blue-200 bg-blue-600 p-2 text-white rounded-lg shadow-md ttransition rounded duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
            <img src={logoGoogle} alt="Logo Google" className="flex justify-center h-5 m-1"/>Inicio con google</button>
            <button className="m-5 p-2 flex justify-center bg-gray-200 p-2 rounded-lg shadow-md ttransition rounded duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-90">
          Registrese
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;


