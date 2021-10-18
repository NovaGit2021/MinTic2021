import React, {useState, useEffect} from 'react'

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


export default Zapatillas