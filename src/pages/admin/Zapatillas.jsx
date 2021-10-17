import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';




const Zapatillas = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [zapatillas, setZapatillas] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear nuevas Zapatillas')
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    //como en verdad se obtienen del verdadero backend
    useEffect(() => {
        const obtenerZapatillas = async () => {
            const options = { method: 'GET', url: 'http://localhost:5000/zapatillas/' };

            await axios
                .request(options)
                .then(function (response) {
                    setZapatillas(response.data);
                })
                .catch(function (error) {
                    console.error(error);
                });
        };
        if (ejecutarConsulta) {
            obtenerZapatillas();
            setEjecutarConsulta(false);
        }
    }, [ejecutarConsulta])

    // cierre obtener lista de vehículos del supuesto backend
    useEffect(() => {
        if (mostrarTabla) {
            setEjecutarConsulta(true)
        }
    }, [mostrarTabla]);
    //aquí termina como en verdad se obtienen del verdadero backend
    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton("Crear nuevas Zapatillas")
        } else {
            setTextoBoton("Listado de Zapatillas")
        }
    }, [mostrarTabla]);
    return (
        <div className="w-500 flex flex-col items-center justify-start w-full m-8" >
            <h2 className="letra">Página de administración de Zapatillas</h2>
            <div className="flex justify-between m-1">
                <button onClick={() => {
                    setMostrarTabla(!mostrarTabla);
                }}
                    className="text-white my-2 p-2 rounded-full ttransition duration-200 ease-in-out bg-blue-400 hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110 "> {textoBoton}
                </button>
            </div>
            {mostrarTabla ? (<TablaZapatillas listaZapatillas={zapatillas} setEjecutarConsulta={setEjecutarConsulta} /> ):(
            <FormularioCreacionZapatillas
                setMostrarTabla={setMostrarTabla}
                listaZapatillas={zapatillas}
                setZapatillas={setZapatillas}
            />
            )}
            <ToastContainer position="bottom-center" autoClose={5000} />
        </div>
    );
};

const TablaZapatillas = ({ listaZapatillas, setEjecutarConsulta }) => {
    const [busqueda, setBusqueda] = useState('');
    const [zapatillasFiltradas, setZapatillasFiltradas] = useState(listaZapatillas);
    //const form = useRef(null);

    useEffect(() => {
        setZapatillasFiltradas(
            listaZapatillas.filter((elemento => {
                /*console.log("elemento", elemento);*/
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            }))
        )
    }, [busqueda, listaZapatillas]);



    return (
        <div className="p-8 flex flex-col items-center justify-center w-full">
            <input
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                className="p-5 mx-1 my-2 text-black bg-gray-200 rounded-full" placeholder="Búsqueda"
            />
            <h2 className='text-2xl font-extrabold text-gray-800'>Lista de Zapatillas</h2>

            <div className='hidden md:flex w-full'>
                <table className="tabla">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Referencia</th>
                            <th>Marca</th>
                            <th>Edición</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {zapatillasFiltradas.map((zapatilla) => {
                            return <FilaZapatilla key={nanoid()} zapatilla={zapatilla} />;

                        })}
                    </tbody>
                </table>
            </div>
            <div className='flex flex-col w-full m-2 md:hidden'>
                {zapatillasFiltradas.map((el) => {
                    return (
                        <div className='bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl'>
                            <span>{el.reference}</span>
                            <span>{el.brand}</span>
                            <span>{el.edition}</span>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

const FilaZapatilla = ({ zapatilla, setEjecutarConsulta }) => {
    const [edit, setEdit] = useState(false);
    const [infoNuevasZapatillas, setInfoNuevasZapatillas] = useState({
        _id: zapatilla._id,
        reference: zapatilla.reference,
        brand: zapatilla.brand,
        edition: zapatilla.edition,
    });

    const actualizarZapatillas = async () => {
        console.log(infoNuevasZapatillas);
        //conectar y enviar info al backend

        const options = {
            method: 'PATCH',
            url: 'http://localhost:5000/zapatillas/editar/',
            headers: { 'Content-Type': 'application/json' },
            data: { ...infoNuevasZapatillas, id: zapatilla._id },
        };

        await axios
            .request(options).then(function (response) {
                console.log(response.data);
                toast.success("Zapatillas modificadas con éxito");
                setEdit(false);

            }).catch(function (error) {
                toast.error("Error modificando las zapatillas");
                console.error(error);
            });

    };

    const eliminarZapatillas = () => {
        const options = {
            method: 'DELETE',
            url: 'http://localhost:5000/zapatillas/eliminar',
            headers: { 'Content-Type': 'application/json' },
            data: { id: zapatilla._id }
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                toast.success("Zapatillas eliminadas con éxito")
            }).catch(function (error) {
                console.error(error);
                toast.error("Error eliminando zapatillas")
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
                            value={infoNuevasZapatillas.reference}
                            onChange={(e) => setInfoNuevasZapatillas({ ...infoNuevasZapatillas, reference: e.target.value })}
                        />
                    </td>
                    <td>
                        <input
                            className="bg-gray-50 border-gray-600 p-2 rounded-lg m-2"
                            type="text"
                            value={infoNuevasZapatillas.brand}
                            onChange={(e) => setInfoNuevasZapatillas({ ...infoNuevasZapatillas, brand: e.target.value })}
                        />
                    </td>
                    <td>
                        <input
                            className="bg-gray-50 border-gray-600 p-2 rounded-lg m-2"
                            type="text"
                            value={infoNuevasZapatillas.edition}
                            onChange={(e) => setInfoNuevasZapatillas({ ...infoNuevasZapatillas, edition: e.target.value })}
                        />
                    </td>
                </>
            ) : (
                <>
                    <td>{zapatilla._id.slice(19)}</td>
                    <td>{zapatilla.reference}</td>
                    <td>{zapatilla.brand}</td>
                    <td>{zapatilla.edition}</td>
                </>
            )}

            <td>
                <div className="flex w-full justify-around">
                    {edit ? (
                        <i
                            onClick={() => actualizarZapatillas()}
                            className="fas fa-check text-green-700 hover:text-green-500"
                        />


                    ) : (
                        <i
                            onClick={() => setEdit(!edit)}
                            className="fas fa-pencil-alt text-yellow-700 hover:text-yellow-500"
                        />
                    )}
                    <i
                        onClick={() => eliminarZapatillas()}
                        className="fas fa-trash text-red-700 hover:text-red-500" />


                </div>
            </td>
        </tr>
    );

    
};
const FormularioCreacionZapatillas = ({ setMostrarTabla, listaZapatillas, setZapatillas }) => {

    const form = useRef(null);

    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevasZapatillas = {};
        fd.forEach((value, key) => {
            nuevasZapatillas[key] = value;
        });

        const options = {
            method: 'POST',
            url: 'http://localhost:5000/zapatillas/nuevo/',
            headers: { 'Content-Type': 'aplication/json' },
            data: { 
                reference: nuevasZapatillas.reference, 
                brand: nuevasZapatillas.brand, 
                edition: nuevasZapatillas.edition },
        };

        await axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                toast.success("Zapatillas agregadas con éxito");
            })
            .catch(function (error) {
                console.error(error);
                toast.error("Error creando zapatillas")
            });
        setMostrarTabla(true);
    };

    return (

        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-extrabold text-gray-800">Crear nueva zapatilla</h2>
            <form ref={form} onSubmit={submitForm} className='flex flex-col'>
                Rerefencia
                <input name="reference" className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="Ref" required />
                <label className='flex flex-col' htmlFor='marca'>
                    Marca
                    <select
                        name="brand"
                        className='bg-gray-200 border-gray-600 p-2 rounded lg m-2'
                        type="text"
                        required>
                        <option disabled value={0}>
                            Seleccione una opción
                        </option>
                        <option>Adidas</option>
                        <option>Nike</option>
                        <option>Reebok</option>
                        <option>Skechers</option>
                        <option>Puma</option>
                    </select>
                </label>
                Edición
                <input name="edition" className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="number" min={1960} max={2021} placeholder="Año" required />
                <button type="submit" className="col-span-2 text-white m-16 p-2 rounded-full ttransition duration-200 ease-in-out bg-blue-400 hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110 ">
                    Guardar Zapatillas
                </button>
            </form>
        </div>
    )
};
export default Zapatillas