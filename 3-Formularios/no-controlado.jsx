//Importamos useRef y useState de ract
import { useRef, useState } from "react";

//Creamos el componente
const NoControlado = () => {
    //Constante form que toma el valor de un formulario
  const form = useRef(null);
  //Estado del input con useState
  const [inputState,setInputState] = useState("");

  const handleSubmit = (e) => {
    //Prevenimos que la web se actualice al enviar un formulario
    e.preventDefault();

    //establecemos una variable que guarda el valor de FormData; la cual a su vez trabaja con el valor actual de la referencia form
    const data = new FormData(form.current);

    //Convertimos en objetos las entradas iteradas (...  .entries) de la variable data
    const { title, description, state } = Object.fromEntries([
      ...data.entries(),
    ]);
    console.log(title, description, state);

    //Validar Datos; si están vacíos, seteamos inputState como "llenar datos"
        if(title.trim()==="" || description.trim()==="" || state.trim()===""){
            // console.log('Llena los datos');
            // return <h1>Llena los datos</h1>
            setInputState('Llena los campos');
        }
    //Enviar Datos

  };
  return (
    <form onSubmit={handleSubmit} action="" ref={form}>
      <input
        type="text"
        placeholder="Ingrese datos"
        className="form-control mb-2"
        name="title"
        
      />
      <textarea
        placeholder="Ingrese descripcion"
        className="form-control mb-2"
        name="description"
       
      />
      <select className="form-select mb-2" name="state">
        <option value="pendiente">pendiente</option>
        <option value="completado">completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        procesar
      </button>
       {/* Evalua si input state está vacío; si lo está, imprime el valor de inputstate en una <p>; si no lo está, no pasa nada*/}
      {
        inputState !== "" &&  inputState 
      }
    </form>
  );
};
export default NoControlado;
