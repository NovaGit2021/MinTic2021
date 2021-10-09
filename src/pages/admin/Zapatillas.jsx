import React, {useState, useEffect} from 'react'
import axios from 'axios';

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

/*useEffect(() => {
    if (mostrarTabla){
    const options = {method: 'GET', url: ''};

    axios
    .request(options)
    .then(function (response){
        useZapatillas(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });
}
}, [mostrarTabla]);*/





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
            <h2 className="letra">Página de administración de Zapatillas</h2>
        <div className= "flex justify-between mg-10">
        <button onClick={()=>
            {setMostrarTabla(!mostrarTabla);
        }}
            className="text-white m-16 p-2 rounded-full ttransition duration-200 ease-in-out bg-blue-400 hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110 "> {textoBoton}
        </button>
        <input className="p-5 m-16 text-black bg-gray-200 p-1 rounded-full m-10" placeholder="Búsqueda" />
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
        <div className="p-8 flex flex-col items-center justify-center w-full">
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
        <div className="flex flex-col justify-center m-12 min-w-max w-full">
        <div className= "flex justify-between">
        <h2 className= "flex justify-center m-4 font-black">Formulario de zapatillas</h2>
        </div>
        <form className='grid grid-cols-2'>
        <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="ID de las zapatillas"/>
        <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="Marca de las zapatillas"/>
        <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="Referencia de las zapatillas"/>
        <input className="bg-gray-200 border-gray-600 p-2 rounded lg m-2" type="number" placeholder="Talla de las zapatillas" min="32" max="44"/>
        <button type= "button" className= "col-span-2 m-4 bg-blue-500 p-2 hover:bg-blue-700 text-white m-16 p-2 rounded-full ttransition duration-200 ease-in-out bg-blue-400 hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110 ">Guardar Zapatillas</button>
        </form>
        </div>
    )
};


export default Zapatillas
