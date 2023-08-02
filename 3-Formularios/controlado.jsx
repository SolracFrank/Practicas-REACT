//Importamos useRef y useState de ract
import { useState } from "react";
const Controlado = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    state: "pendiente",
    priority: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} action="POST">
      <input
        type="text"
        placeholder="Ingrese datos"
        className="form-control mb-2"
        name="title"
        value={todo.title}
        onChange={handleChange}
      />
      <textarea
        placeholder="Ingrese descripcion"
        className="form-control mb-2"
        name="description"
        value={todo.description}
        onChange={handleChange}
      />
      <select
        className="form-select mb-2"
        name="state"
        value={todo.state}
        onChange={handleChange}
      >
        <option value="pendiente">pendiente</option>
        <option value="completado">completado</option>
      </select>
      <div className="form-check mb-2">
        <input
          type="checkbox"
          name="priority"
          checked={todo.priority}
          onChange={handleChange}
        />
        <label htmlFor="inputCheck">Dar prioridad</label>
      </div>
      <button type="submit" className="btn btn-primary">
        procesar
      </button>
    </form>
  );
};
export default Controlado;

/*
const prueba = () =>
{
    const [valorTotal,setValorTotal] = useState(
        {
            count: 1,
            visitors: 'Team'
        }
    );

    setValorTotal({...valorTotal, count: valorTotal.count + 1});
};*/
