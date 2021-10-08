import React, {useState, useEffect} from 'react'



const RegistrosVentasBackend = [
    {
        idVenta:"aswe",
        nombreComprandor:"Carlos",
        id:"0234",
        precio:"45000",
    },
    {
        idVenta:"polu",
        nombreComprandor:"Mariana",
        id:"9876",
        precio:"32000",
    },
    {
        idVenta:"llih",
        nombreComprandor:"Liliana",
        id:"3872",
        precio:"98000",
    },
    {
        idVenta:"pfgd",
        nombreComprandor:"Juan",
        id:"6549",
        precio:"86000",
    },
]
const RegistroDeVentas = () =>{
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [RegistrosVentas, setRegistrosVentas] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Registrar Nueva Venta')

    useEffect(() =>{
        setRegistrosVentas(RegistrosVentasBackend);
    },[]);

    useEffect(()=>{
        if (mostrarTabla){
            setTextoBoton("Reguistrar Nueva Venta")
        } else {
            setTextoBoton ("Listado de Ventas")
        }
    },[mostrarTabla])
    return(
        <div className="w-500 flex flex-col items-center justify-start w-full m-8" >
        <div className= "flex justify-between mg-10">
        <h2 className="flex justify-center font-extrabold m-6">Página de administración de Ventas</h2>
        <button onClick={()=>
            {setMostrarTabla(!mostrarTabla);
        }}
            className="text-white m-16 p-2 rounded ttransition duration-500 ease-in-out bg-blue-400 hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110 "> {textoBoton}
        </button>
        <input className="p-5 m-16 text-black bg-gray-200 p-1 rounded m-10 ttransition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110" placeholder="Búsqueda" />
        <button className="text-white m-16 p-2 ttransition rounded duration-500 ease-in-out bg-blue-400 hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110">editar
        </button>
        

        </div>
        {mostrarTabla ? <TablaVentas listaVentas={RegistrosVentas}/>: <FormularioRegistroDeVentas/>}
        </div>
    )
}    
const TablaVentas = ({listaVentas}) => {
    useEffect(()=>{
        console.log("este es el listado de ventas en el componente tabla", listaVentas)
    },[listaVentas])
    return(
        <div className="flex flex-col items-center justify-center">
        <table className="tabla">
        <thead className="">
        <tr className= "">
        <th>ID de venta</th>
        <th>Nombre del comprador</th>
        <th>ID de las zapatillas</th>
        <th>Precio</th>
        </tr>
        </thead>
        <tbody>
            {listaVentas.map((venta)=>{
                return (
                    <tr>
                    <td>{venta.idVenta}</td>
                    <td>{venta.nombreComprandor}</td>
                    <td>{venta.id}</td>
                    <td>{venta.precio}</td>
                </tr>
                );
            })}
        </tbody>
        </table>
        </div>
    )
}
const FormularioRegistroDeVentas = () => {
    return (
        <div className="flex flex-col justify-center m-12 min-w-max">
        <div className= "flex justify-between">
        <h2>Formulario Registro de Ventas</h2>
        </div>
        <form className="grid grid-cols-2">
        <input className="bg-gray-50 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="ID de venta" />
        <input className="bg-gray-50 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="Nombre del Comprador"/>
        <input className="bg-gray-50 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="ID de las zapatillas"/>
        <input className="bg-gray-50 border-gray-600 p-2 rounded lg m-2" type="text" placeholder="Precio"/>
        <button type= "button" className= "col-span-2 m-4 bg-blue-500 p-2 hover:bg-blue-700">Guardar Venta</button>
        </form>
            
        </div>
    )
}

export default RegistroDeVentas