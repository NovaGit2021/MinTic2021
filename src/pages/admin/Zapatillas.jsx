import React, {useState, useEffect} from 'react'

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

    useEffect(() =>{
        setZapatillas(zapatillasBackend);
    },[]);


    useEffect(()=>{
        if(mostrarTabla){
            setTextoBoton("Crear nuevas Zapatillas")
        } else{
            setTextoBoton("Listado de Zapatillas")
        }
    },[mostrarTabla])
    return (
        <div className="w-500 flex flex-col items-center justify-start w-full m-8" >
        <div className= "flex justify-between mg-10">
        <h2 className="flex justify-center font-extrabold m-6">Página de administración de Zapatillas</h2>
        <button onClick={()=>
            {setMostrarTabla(!mostrarTabla);
        }}
            className="text-white bg-blue-400 p-4 rounded-full mg-10"> {textoBoton}
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
        <th>ID de las zapatillas</th>
        <th>Marca de las zapatillas</th>
        <th>Referencia de las zapatillas</th>
        <th>Talla de las zapatillas</th>
        </tr>
        </thead>
        <tbody>
            {listaZapatillas.map((zapatilla)=>{
                return (
                    <tr>
                    <td>{zapatilla.id}</td>
                    <td>{zapatilla.marca}</td>
                    <td>{zapatilla.referencia}</td>
                    <td>{zapatilla.talla}</td>
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
        <h2 className= "flex justify-center m-4 font-black">Formulario de zapatillas</h2>
        </div>
        <form className='grid grid-cols-2'>
        <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="ID de las zapatillas"/>
        <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="Marca de las zapatillas"/>
        <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="Referencia de las zapatillas"/>
        <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="number" placeholder="Talla de las zapatillas" min="32" max="44"/>
        <button type= "button" className= "col-span-2 m-8 bg-green-400 p-2 hover:bg-green-600 rounded">Guardar Zapatillas</button>
        </form>
        </div>
    )
};


export default Zapatillas
