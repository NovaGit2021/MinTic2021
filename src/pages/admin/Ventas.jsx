import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';




const Ventas = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [Ventas, setVentas] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear nueva venta')
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    //como en verdad se obtienen del verdadero backend
    useEffect(() => {
        const obtenerVentas = async () => {
            const options = { method: 'GET', url: 'http://localhost:5000/ventas/' };

            await axios
                .request(options)
                .then(function (response) {
                    setVentas(response.data);
                })
                .catch(function (error) {
                    console.error(error);
                });
        };
        if (ejecutarConsulta) {
            obtenerVentas();
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
            setTextoBoton("Crear nueva Venta")
        } else {
            setTextoBoton("Listado de Ventas")
        }
    }, [mostrarTabla]);
    return (
        <div className="w-500 flex flex-col items-center justify-start w-full m-8" >
            <h2 className="letra">Página de administración de Ventas</h2>
            <div className="flex justify-between m-1">
                <button onClick={() => {
                    setMostrarTabla(!mostrarTabla);
                }}
                    className="text-black my-2 p-2 rounded-full ttransition duration-200 ease-in-out bg-blue-400 hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110 "> {textoBoton}
                </button>
            </div>
            {mostrarTabla ? (<TablaVentas listaVentas={Ventas} setEjecutarConsulta={setEjecutarConsulta} /> ):(
            <FormularioCreacionVentas
                setMostrarTabla={setMostrarTabla}
                listaVentas={Ventas}
                setVentas={setVentas}
            />
            )}
            <ToastContainer position="bottom-center" autoClose={5000} />
        </div>
    );
};

const TablaVentas = ({ listaVentas, setEjecutarConsulta }) => {
    const [busqueda, setBusqueda] = useState('');
    const [VentasFiltradas, setVentasFiltradas] = useState(listaVentas);
    //const form = useRef(null);

    useEffect(() => {
        setVentasFiltradas(
            listaVentas.filter((elemento => {
                /*console.log("elemento", elemento);*/
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            }))
        )
    }, [busqueda, listaVentas]);



    return (
        <div className="p-8 flex flex-col items-center justify-center w-full">
            <input
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                className="p-5 mx-1 my-2 text-black bg-gray-200 rounded-full" placeholder="Búsqueda"
            />
            <h2 className='text-2xl font-extrabold text-gray-800'>Lista de Ventas</h2>

            <div className='hidden md:flex w-full'>
                <table className="tabla">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Precio</th>
                            <th>Vendedor</th>
                            <th>Referencia</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {VentasFiltradas.map((venta) => {
                            return <Filaventa key={nanoid()} venta={venta} />;

                        })}
                    </tbody>
                </table>
            </div>
            <div className='flex flex-col w-full m-2 md:hidden'>
                {VentasFiltradas.map((el) => {
                    return (
                        <div className='bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl'>
                            <span>{el.price}</span>
                            <span>{el.agent}</span>
                            <span>{el.reference}</span>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

const Filaventa = ({ venta, setEjecutarConsulta }) => {
    const [edit, setEdit] = useState(false);
    const [infoNuevasVentas, setInfoNuevasVentas] = useState({
        price: venta.price,
        agent: venta.agent,
        reference: venta.reference,
    });

    const actualizarVentas = async () => {
        console.log(infoNuevasVentas);
        //conectar y enviar info al backend

        const options = {
            method: 'PATCH',
            url: 'http://localhost:5000/ventas/editar/',
            headers: { 'Content-Type': 'application/json' },
            data: { ...infoNuevasVentas, id: venta._id },
        };

        await axios
            .request(options).then(function (response) {
                console.log(response.data);
                toast.success("Ventas modificadas con éxito");
                setEdit(false);

            }).catch(function (error) {
                toast.error("Error modificando las Ventas");
                console.error(error);
            });

    };

    const eliminarVentas = () => {
        const options = {
            method: 'DELETE',
            url: 'http://localhost:5000/ventas/eliminar',
            headers: { 'Content-Type': 'application/json' },
            data: { id: venta._id }
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                toast.success("Ventas eliminadas con éxito")
            }).catch(function (error) {
                console.error(error);
                toast.error("Error eliminando Ventas")
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
                            value={infoNuevasVentas.price}
                            onChange={(e) => setInfoNuevasVentas({ ...infoNuevasVentas, price: e.target.value })}
                        />
                    </td>
                    <td>
                        <input
                            className="bg-gray-50 border-gray-600 p-2 rounded-lg m-2"
                            type="text"
                            value={infoNuevasVentas.agent}
                            onChange={(e) => setInfoNuevasVentas({ ...infoNuevasVentas, agent: e.target.value })}
                        />
                    </td>
                    <td>
                        <input
                            className="bg-gray-50 border-gray-600 p-2 rounded-lg m-2"
                            type="text"
                            value={infoNuevasVentas.reference}
                            onChange={(e) => setInfoNuevasVentas({ ...infoNuevasVentas, reference: e.target.value })}
                        />
                    </td>
                </>
            ) : (
                <>
                    <td>{venta._id.slice(19)}</td>
                    <td>{venta.price}</td>
                    <td>{venta.agent}</td>
                    <td>{venta.reference}</td>
                </> 
            )}

            <td>
                <div className="flex w-full justify-around">
                    {edit ? (
                        <i
                            onClick={() => actualizarVentas()}
                            className="fas fa-check text-green-700 hover:text-green-500"
                        />


                    ) : (
                        <i
                            onClick={() => setEdit(!edit)}
                            className="fas fa-pencil-alt text-yellow-700 hover:text-yellow-500"
                        />
                    )}
                    <i
                        onClick={() => eliminarVentas()}
                        className="fas fa-trash text-red-700 hover:text-red-500" />


                </div>
            </td>
        </tr>
    );

    
};
const FormularioCreacionVentas = ({ setMostrarTabla, listaVentas, setVentas }) => {

    const form = useRef(null);

    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevasVentas = {};
        fd.forEach((value, key) => {
            nuevasVentas[key] = value;
        });

        const options = {
            method: 'POST',
            url: 'http://localhost:5000/ventas/nueva/',
            headers: { 'Content-Type': 'application/json' },
            data: { 
                price: nuevasVentas.price, 
                agent: nuevasVentas.agent, 
                reference: nuevasVentas.reference },
        };

        await axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                toast.success("Ventas agregadas con éxito");
            })
            .catch(function (error) {
                console.error(error);
                toast.error("Error creando Ventas")
            });
        setMostrarTabla(true);
    };

    return (

        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-extrabold text-gray-800">Crear nueva venta</h2>
            <form ref={form} onSubmit={submitForm} className='flex flex-col'>
                Precio
                <input name="price" className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="number" min={30000} max={900000} placeholder="Precio $" required />
                <label className='flex flex-col' htmlFor='precio'>
                    Vendedor
                    <select
                        name="agent"
                        className='bg-gray-200 border-gray-600 p-2 rounded lg m-2'
                        type="text"
                        required>
                        <option disabled value={0}>
                            Seleccione una opción
                        </option>
                        <option>Juan Diaz</option>
                        <option>Oscar Gonzalez</option>
                        <option>Martha Suarez</option>
                        <option>Julian Jaramillo</option>
                        <option>Camila Martinez</option>
                    </select>
                </label>
                Referencia
                <input name="reference" className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="Ref" required />
                <button type="submit" className="col-span-2 text-white m-16 p-2 rounded-full ttransition duration-200 ease-in-out bg-blue-400 hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110 ">
                    Guardar Ventas
                </button>
            </form>
        </div>
    )
};
export default Ventas