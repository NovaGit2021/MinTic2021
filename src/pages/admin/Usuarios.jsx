/*import React, {useState, useEffect} from 'react'

const zapatillasBackend = [
    {
        id:"1",
        Rol:"g",
    },
    {
        id:"2",
        Rol:"g",
    },
    {
        id:"3",
        marca:"g",
    },   
    {
        id:"4",
        Rol:"g",
    },
];

const Zapatillas = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [zapatillas, setZapatillas] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear nuevas Zapatillas')

    useEffect(() =>{
        setZapatillas(zapatillasBackend);
    },[]);


    useEffect(()=>{
        if(mostrarTabla){
            setTextoBoton("Crear Usuarios")
        } else{
            setTextoBoton("Listas de Usuarios")
        }
    },[mostrarTabla])
    return (
        <div className="w-500 flex flex-col items-center justify-start w-full m-8" >
            <h2 className="letra">Página de administración de Usuarios</h2>
        <div className= "flex justify-between mg-10">
        <button onClick={()=>
            {setMostrarTabla(!mostrarTabla);
        }}
            className="text-white m-16 p-2 rounded-full ttransition duration-200 ease-in-out bg-blue-400 hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110"> {textoBoton}
        </button>
        <input className="p-5 m-16 text-black bg-gray-200 rounded-full" placeholder="Búsqueda" />
        <button className="text-white m-16 p-2 ttransition rounded-lg duration-200 ease-in-out bg-blue-400 hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110">
            Editar
        </button>
        </div>
        {mostrarTabla ? <TablaZapatillas listaZapatillas={zapatillas}/>: <FormularioCreacionZapatillas/>}
        </div>
    )
}

const TablaZapatillas = ({listaZapatillas}) => {
    useEffect(()=>{
        console.log("este es el listado de zapatillas en el componente tabla", listaZapatillas)
    },[listaZapatillas])
    return (
        <div className="p-8 flex flex-col items-center justify-center">
        <table className="tabla">
        <thead className="">
        <tr className= "">
        <th>ID de Usuarios</th>
        <th>Rol de Usuarios</th>
        </tr>
        </thead>
        <tbody>
            {listaZapatillas.map((zapatilla)=>{
                return (
                    <tr>
                    <td>{zapatilla.id}</td>
                    <td>{zapatilla.marca}</td>
                </tr>
                );
            })}
        </tbody>
        </table>
        </div>
    )
};
const FormularioCreacionZapatillas = () => {
    return (
        <div className="flex flex-col justify-center m-12 min-w-max">
        <div className= "flex justify-between">
        <h2 className= "flex justify-center m-4 font-black">Formulario de Usuarios</h2>
        </div>
        <form className='grid grid-cols-2'>
        <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="ID de las zapatillas"/>
        <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="Marca de las zapatillas"/>
        <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="Referencia de las zapatillas"/>
        <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="number" placeholder="Talla de las zapatillas" min="32" max="44"/>
        <button type= "button" className= "col-span-2 m-4 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-full ttransition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">Guardar Usuarios</button>
        </form>
        </div>
    )
};


export default Zapatillas */
import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';




const Usuarios = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [Usuarios, setUsuarios] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear nuevo usuario')
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    //como en verdad se obtienen del verdadero backend
    useEffect(() => {
        const obtenerUsuarios = async () => {
            const options = { method: 'GET', url: 'http://localhost:5000/usuarios/' };

            await axios
                .request(options)
                .then(function (response) {
                    setUsuarios(response.data);
                })
                .catch(function (error) {
                    console.error(error);
                });
        };
        if (ejecutarConsulta) {
            obtenerUsuarios();
            setEjecutarConsulta(false);
        }
    }, [ejecutarConsulta])

    
    useEffect(() => {
        if (mostrarTabla) {
            setEjecutarConsulta(true)
        }
    }, [mostrarTabla]);
    
    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton("Crear nuevo usuario")
        } else {
            setTextoBoton("Listado de Usuarios")
        }
    }, [mostrarTabla]);
    return (
        <div className="w-500 flex flex-col items-center justify-start w-full m-8" >
            <h2 className="letra">Página de administración de Usuarios</h2>
            <div className="flex justify-between m-1">
                <button onClick={() => {
                    setMostrarTabla(!mostrarTabla);
                }}
                    className="text-black my-2 p-2 rounded-full ttransition duration-200 ease-in-out bg-blue-400 hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110 "> {textoBoton}
                </button>
            </div>
            {mostrarTabla ? (<TablaUsuarios listaUsuarios={Usuarios} setEjecutarConsulta={setEjecutarConsulta} /> ):(
            <FormularioCreacionUsuarios
                setMostrarTabla={setMostrarTabla}
                listaUsuarios={Usuarios}
                setUsuarios={setUsuarios}
            />
            )}
            <ToastContainer position="bottom-center" autoClose={5000} />
        </div>
    );
};

const TablaUsuarios = ({ listaUsuarios, setEjecutarConsulta }) => {
    const [busqueda, setBusqueda] = useState('');
    const [UsuariosFiltradas, setUsuariosFiltradas] = useState(listaUsuarios);
    //const form = useRef(null);

    useEffect(() => {
        setUsuariosFiltradas(
            listaUsuarios.filter((elemento => {
                /*console.log("elemento", elemento);*/
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            }))
        )
    }, [busqueda, listaUsuarios]);



    return (
        <div className="p-8 flex flex-col items-center justify-center w-full">
            <input
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                className="p-5 mx-1 my-2 text-black bg-gray-200 rounded-full" placeholder="Búsqueda"
            />
            <h2 className='text-2xl font-extrabold text-gray-800'>Lista de Usuarios</h2>

            <div className='hidden md:flex w-full'>
                <table className="tabla">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Estado</th>
                            <th>Rol</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {UsuariosFiltradas.map((usuario) => {
                            return <Filausuario key={nanoid()} usuario={usuario} />;

                        })}
                    </tbody>
                </table>
            </div>
            <div className='flex flex-col w-full m-2 md:hidden'>
                {UsuariosFiltradas.map((el) => {
                    return (
                        <div className='bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl'>
                            <span>{el.name}</span>
                            <span>{el.lastname}</span>
                            <span>{el.email}</span>
                            <span>{el.state}</span>
                            <span>{el.role}</span>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

const Filausuario = ({ usuario, setEjecutarConsulta }) => {
    const [edit, setEdit] = useState(false);
    const [infoNuevasUsuarios, setInfoNuevasUsuarios] = useState({
        name: usuario.name,
        lastname: usuario.lastname,
        email: usuario.email,
        state: usuario.state,
        role: usuario.role,
    });

    const actualizarUsuarios = async () => {
        console.log(infoNuevasUsuarios);
        //conectar y enviar info al backend

        const options = {
            method: 'PATCH',
            url: 'http://localhost:5000/usuarios/editar/',
            headers: { 'Content-Type': 'application/json' },
            data: { ...infoNuevasUsuarios, id: usuario._id },
        };

        await axios
            .request(options).then(function (response) {
                console.log(response.data);
                toast.success("Usuarios modificados con éxito");
                setEdit(false);

            }).catch(function (error) {
                toast.error("Error modificando los Usuarios");
                console.error(error);
            });

    };

    const eliminarUsuarios = () => {
        const options = {
            method: 'DELETE',
            url: 'http://localhost:5000/usuarios/eliminar',
            headers: { 'Content-Type': 'application/json' },
            data: { id: usuario._id }
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                toast.success("Usuarios eliminados con éxito")
            }).catch(function (error) {
                console.error(error);
                toast.error("Error eliminando Usuarios")
            });
    }


    return (
        <tr>

            {edit ? (
                <>
                    
                    <td>
                        <input
                            className="bg-gray-50 border-gray-600 p-2 rounded-lg m-2"
                            type="text"
                            value={infoNuevasUsuarios.name}
                            onChange={(e) => setInfoNuevasUsuarios({ ...infoNuevasUsuarios, name: e.target.value })}
                        />
                    </td>
                    <td>
                        <input
                            className="bg-gray-50 border-gray-600 p-2 rounded-lg m-2"
                            type="text"
                            value={infoNuevasUsuarios.lastname}
                            onChange={(e) => setInfoNuevasUsuarios({ ...infoNuevasUsuarios, lastname: e.target.value })}
                        />
                    </td>
                    <td>
                        <input
                            className="bg-gray-50 border-gray-600 p-2 rounded-lg m-2"
                            type="text"
                            value={infoNuevasUsuarios.email}
                            onChange={(e) => setInfoNuevasUsuarios({ ...infoNuevasUsuarios, email: e.target.value })}
                        />
                    </td>
                    <td>
                        <input
                            className="bg-gray-50 border-gray-600 p-2 rounded-lg m-2"
                            type="text"
                            value={infoNuevasUsuarios.state}
                            onChange={(e) => setInfoNuevasUsuarios({ ...infoNuevasUsuarios, state: e.target.value })}
                        />
                    </td>
                    <td>
                        <input
                            className="bg-gray-50 border-gray-600 p-2 rounded-lg m-2"
                            type="text"
                            value={infoNuevasUsuarios.role}
                            onChange={(e) => setInfoNuevasUsuarios({ ...infoNuevasUsuarios, role: e.target.value })}
                        />
                    </td>
                </>
            ) : (
                <>
                    <td>{usuario._id.slice(19)}</td>
                    <td>{usuario.name}</td>
                    <td>{usuario.lastname}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.state}</td>
                    <td>{usuario.role}</td>
                </> 
            )}

            <td>
                <div className="flex w-full justify-around">
                    {edit ? (
                        <i
                            onClick={() => actualizarUsuarios()}
                            className="fas fa-check text-green-700 hover:text-green-500"
                        />


                    ) : (
                        <i
                            onClick={() => setEdit(!edit)}
                            className="fas fa-pencil-alt text-yellow-700 hover:text-yellow-500"
                        />
                    )}
                    <i
                        onClick={() => eliminarUsuarios()}
                        className="fas fa-trash text-red-700 hover:text-red-500" />


                </div>
            </td>
        </tr>
    );

    
};
const FormularioCreacionUsuarios = ({ setMostrarTabla, listaUsuarios, setUsuarios }) => {

    const form = useRef(null);

    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevasUsuarios = {};
        fd.forEach((value, key) => {
            nuevasUsuarios[key] = value;
        });

        const options = {
            method: 'POST',
            url: 'http://localhost:5000/usuarios/nuevo/',
            headers: { 'Content-Type': 'application/json' },
            data: { 
                name: nuevasUsuarios.name, 
                lastname: nuevasUsuarios.lastname, 
                email: nuevasUsuarios.email,
                state: nuevasUsuarios.state, role: nuevasUsuarios.role },
                
                
        };

        await axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                toast.success("Usuarios agregados con éxito");
            })
            .catch(function (error) {
                console.error(error);
                toast.error("Error creando Usuarios")
            });
        setMostrarTabla(true);
    };

    return (

        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-extrabold text-gray-800">Crear nueva usuario</h2>
            <form ref={form} onSubmit={submitForm} className='flex flex-col'>
                Nombre
                <input name="name" className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="Nombre" required />
                <label className='flex flex-col' htmlFor='name'>
                Apellido
                <input name="lastname" className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="Apellido" required />
                <label className='flex flex-col' htmlFor='lastname'>
                Email
                <input name="email" className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="Email" required />
                <label className='flex flex-col' htmlFor='email'>
                Estado
                <input name="state" className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="Esatdo" required />
                <label className='flex flex-col' htmlFor='state'>
                    Rol
                    <select
                        name="role"
                        className='bg-gray-200 border-gray-600 p-2 rounded lg m-2'
                        type="text"
                        required>
                        <option disabled value={0}>
                            Seleccione una opción
                        </option>
                        <option>Admin</option>
                        <option>Vendedor</option>
                        <option>Lider zona</option>
                        <option>Practicante</option>
                        
                    </select>
                </label>
                </label>
                </label>
                </label>
               
                <button type="submit" className="col-span-2 text-white m-16 p-2 rounded-full ttransition duration-200 ease-in-out bg-blue-400 hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110 ">
                    Guardar Usuarios
                </button>
            </form>
        </div>
    );
};
export default Usuarios