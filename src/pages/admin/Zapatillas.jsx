import { nanoid } from 'nanoid';
import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import {Dialog, Tooltip} from "@mui/material";
//import axios from 'axios';

//elementos que estan en el codigo pero no se donde ponerlo//

// async //

/*const options ={
    method: 'POST',
    url:'',
    headers: { 'content-Type': 'application/json'},
    data: { name: TablaZapatillas.name, brand: TablaZapatillas.brand, model: TablaZapatillas.model}
};*/


/*await axios
.request(options)
.then(function (response){
    console.log(response.data);
})
.catch(function (error){
    console.error(error);
});*/

/* useEffect(() => {
    const obetenerZapatillas = async () =>{
    const options = {method: 'GET', url: ''};

    axios
    .request(options)
    .then(function (response){
        setZapatillas(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });
}; */



const zapatillasBackend = [
    {
        id:"4523",
        marca:"Nike",
        referencia:"Air Max",
        talla:"34"
    },
    {
        id:"9874",
        marca:"Adidas",
        referencia:"Neo",
        talla:"39"
    },
    {
        id:"4432",
        marca:"Reebok",
        referencia:"Pump",
        talla:"41"
    },   
    {
        id:"7975",
        marca:"Puma",
        referencia:"RS X",
        talla:"32"
    },
];

const Zapatillas = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [zapatillas, setZapatillas] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear nuevas Zapatillas')
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
//como en verdad se obtienen del verdadero backend
    useEffect (() => {
        const obtenerZapatillas = async () =>{
            const options = {method: 'GET', url: ''};
        
            axios
            .request(options)
            .then(function (response){
                setZapatillas(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
        }; 
        if (ejecutarConsulta){
            obtenerZapatillas();
            setEjecutarConsulta(false);
        }
    }, [ejecutarConsulta])
//obtener lista de vehículos del supuesto backend
    useEffect(() =>{
        setZapatillas(zapatillasBackend);
    },[]);
// cierre obtener lista de vehículos del supuesto backend
 useEffect(() => {
    if (mostrarTabla){
      setEjecutarConsulta(true)
    }
    },[mostrarTabla]);
//aquí termina como en verdad se obtienen del verdadero backend
    useEffect(()=>{
        if(mostrarTabla){
            setTextoBoton("Crear nuevas Zapatillas")
        } else{
            setTextoBoton("Listado de Zapatillas")
        }
    },[mostrarTabla])
    return (
        <div className="w-500 flex flex-col items-center justify-start w-full m-8" >
            <h2 className="letra">Página de administración de Zapatillas</h2>
        <div className= "flex justify-between m-1">
        <button onClick={()=>
            {setMostrarTabla(!mostrarTabla);
        }}
            className="text-white my-2 p-2 rounded-full ttransition duration-200 ease-in-out bg-blue-400 hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110 "> {textoBoton}
        </button>
        </div>
        {mostrarTabla ? <TablaZapatillas listaZapatillas={zapatillas} setEjecutarConsulta={setEjecutarConsulta}/>: <FormularioCreacionZapatillas/>}
        </div>
    )
}

const TablaZapatillas = ({listaZapatillas, setEjecutarConsulta }) => {
    const [busqueda, setBusqueda] = useState('');
    const [zapatillasFiltradas, setZapatillasFiltradas] = useState(listaZapatillas);

    useEffect (()=>{
        setZapatillasFiltradas(
        listaZapatillas.filter((elemento=>{
            console.log("elemento", elemento);
            return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
        }))
        )
    }, [busqueda, listaZapatillas]);

    return (
        <div className="p-8 flex flex-col items-center justify-center w-full">
        <input 
        value={busqueda}
        onChange={e=>setBusqueda(e.target.value)}
        className="p-5 mx-1 my-2 text-black bg-gray-200 rounded-full" placeholder="Búsqueda" />
        <table className="tabla">
        <thead className="">
        <tr className= "">
        <th>ID de las zapatillas</th>
        <th>Marca de las zapatillas</th>
        <th>Referencia de las zapatillas</th>
        <th>Talla de las zapatillas</th>
        <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
            {zapatillasFiltradas.map((zapatilla)=>{
                return (
                    <FilaZapatilla key={nanoid()} zapatilla={zapatilla} setEjecutarConsulta={setEjecutarConsulta}/>
                );
            })}
        </tbody>
        </table>
        </div>
    )
};
const FilaZapatilla = ({zapatilla, setEjecutarConsulta}) =>{
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false); //Para el dialogo en la línea 287
    const[infoNuevasZapatillas, setInfoNuevasZapatillas] = useState({
        id: zapatilla.id,
        marca: zapatilla.marca,
        referencia: zapatilla.referencia,
        talla: zapatilla.talla,
    })

    const actualizarZapatillas = async () =>{
        console.log(infoNuevasZapatillas);
        //enviar info al backend
        const options = {
            method: 'PATCH',
            url: '',
            headers: {'Content-Type': 'application/json'},
            data:{...infoNuevasZapatillas, id: zapatilla.id},
        };
        await axios 
        .request(options)
        .then(function(response){
            console.log(response.data)
            toast.succes("Zapatillas modificadas con éxito");
            setEdit(false);
            setEjecutarConsulta(true);
        })
        .catch(function(error){
            console.error(error);
            toast.error("Error modificando zapatillas")
        });
    };
    const eliminarZapatillas = async () =>{
        const options = {
            method: 'DELETE',
            url: '',
            headers: {'Content-Type': 'application/json'},
            data:{id: zapatilla.id},
        };
        await axios 
        .request(options)
        .then(function(response){
            console.log(response.data)
            toast.succes("Zapatillas eliminadas con éxito");
            setEjecutarConsulta(true);
        })
        .catch(function(error){
            console.error(error);
            toast.error("Error eliminando zapatillas")
        });
        setOpenDialog(false);
    }
    return(
        <tr>
        {edit ? (
        <>
            <td>
            <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" 
            type="text" 
            value={infoNuevasZapatillas.id} 
            onChange={e=>setInfoNuevasZapatillas({...infoNuevasZapatillas,id: e.target.value})}/>
            </td>
            <td>
            <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2"
            type="text" 
            value={infoNuevasZapatillas.marca}
            onChange={e=>setInfoNuevasZapatillas({...infoNuevasZapatillas,marca: e.target.value})}/>
            </td>
            <td>
            <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" 
            type="text" 
            value={infoNuevasZapatillas.referencia}
            onChange={e=>setInfoNuevasZapatillas({...infoNuevasZapatillas,referencia: e.target.value})}/>
            </td>
            <td>
            <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2"
            type="text" 
            value={infoNuevasZapatillas.talla}
            onChange={e=>setInfoNuevasZapatillas({...infoNuevasZapatillas,talla: e.target.value})}/>
            </td>
        </>
        ):(
        <>
        <td>{zapatilla.id}</td>
        <td>{zapatilla.marca}</td>
        <td>{zapatilla.referencia}</td>
        <td>{zapatilla.talla}</td>
        </>
        )}
        <td>
            <div className= "flex w-full justify-around">
                {edit ? (
                    <>
                    <Tooltip title="Confirmar edición" arrow>
                    <i 
                    onClick={()=> actualizarZapatillas()}
                    className="fas fa-check-circle text-green-500 hover:text-green-800"/>
                    </Tooltip>
                    <Tooltip title="Cancelar edición" arrow>
                    <i 
                    onClick={()=>setEdit(!edit)} 
                    className="far fa-window-close text-red-500 hover:text-black"/>
                    </Tooltip>
                    </>
                ):(    
                <>
                <Tooltip title="Editar zapatillas" arrow>
                <i 
                onClick={()=>setEdit(!edit)} 
                className="fas fa-pencil-alt text-gray-500 hover:text-black"/>
                </Tooltip>
                <Tooltip title="Eliminar zapatillas" arrow> 
                <i onClick={()=> setOpenDialog(true)}className="fas fa-trash text-red-500 hover:text-red-900"/>
                </Tooltip>
                </>
                )}
            </div>
            <Dialog open={openDialog}>
            <div className="p-8 flex flex-col">
            <h1 className="text-gray-900 text-2xl font-bold">¿Está seguro de querer eliminar las zapatillas?</h1>
            <div className="flex w-full justify-center my-4">
            <button onClick={()=> eliminarZapatillas}className="mx-2 px-4 py-2 bg-blue-500 hover:bg-blue-700">Sí</button>
            <button onClick={()=> setOpenDialog(false)}className="mx-2 px-4 py-2 bg-pink-500 hover:bg-pink-700">No</button>
            </div>
            </div>
            </Dialog>
        </td>
    </tr>
    )
}
const FormularioCreacionZapatillas = ({setMostrarTabla, listaZapatillas, setZapatillas}) => {
    const form = useRef(null);

    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData (form.current);

        const nuevasZapatillas = {};
        fd.forEach((value,key) => {
            nuevasZapatillas[key]= value;
        });

        /* const options = {
            method: 'POST',
            url: '',
            headers: {'Content-Type': 'aplication/json'},
            data: {id: nuevasZapatillas.id, marca: nuevasZapatillas.marca, referencia: nuevasZapatillas.referencia, talla: nuevasZapatillas.talla},
        }; */

        await axios 
            //.request(options)
            .then (function(response){
                console.log(response.data);
                toast.succes("Zapatillas agregadas con éxito");
            })
            .catch(function(error){
                console.error(error);
                toast.error("Error creando zapatillas")
            });
        setMostrarTabla(true);
    };

    return (

        <div className="flex flex-col justify-center m-12 min-w-max w-full">
        <div className= "flex justify-between">
        <h2 className= "flex justify-center m-4 font-black">Formulario de zapatillas</h2>
        </div>
        <form ref={form} onSubmit={submitForm} className='grid grid-cols-2'>
        <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="ID de las zapatillas" required/>
        <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="Marca de las zapatillas" required/>
        <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="Referencia de las zapatillas" required/>
        <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="number" placeholder="Talla de las zapatillas" min="32" max="44" required/>
        <button type= "button" className= "col-span-2 text-white m-16 p-2 rounded-full ttransition duration-200 ease-in-out bg-blue-400 hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110 ">Guardar Zapatillas</button>
        </form>
        </div> 
    )
};


export default Zapatillas
