import axios from 'axios';

const getToken = () =>{
  return `Bearer ${localStorage.getItem('token')}`;
}


export const obtenerZapatillas = async (successCallback, errorCallback) => {
  const options = { method: 'GET', url: 'http://localhost:5000/zapatillas/',
  headers:{
  Authorization: getToken(),
  },
};
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearZapatilla = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/zapatillas/nuevo',
    headers: { 'Content-Type': 'application/json', Authorization: getToken()},
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const actualizarZapatillas = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/zapatillas/editar`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken()},
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarZapatillas = async (successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/zapatillas/eliminar`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken()},
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

// CRUD PARA USUARIOS

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = { method: 'GET', url: 'http://localhost:5000/admin/usuarios', 
  headers:{Authorization: getToken()},
};
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = { 
    method: 'GET', 
    url: 'http://localhost:5000/admin/usuarios/self', 
    headers:{Authorization: getToken()},
};
  await axios.request(options).then(successCallback).catch(errorCallback);
};

// CRUD DE VENTAS

export const RegistroDeVentas = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/admin/ventas',
    headers: { 'Content-Type': 'application/json', Authorization: getToken()},
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};