import { useState } from "react";
import "../components/nuevo.css";
import { useNavigate } from "react-router-dom"


export default function Nuevo() {
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [tipo, setTipo] = useState('');
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');


  const navigate = useNavigate()


  const validarFormulario = () => {
    if (!descripcion || descripcion.trim().length < 3) {
      alert("La descripción es obligatoria y debe tener al menos 3 caracteres.");
      return false;
    }


    if (!categoria) {
      alert("Debe seleccionar una categoría.");
      return false;
    }
    if (tipo !== "ingreso" && tipo !== "gasto") {
      alert("Debe seleccionar un tipo válido: ingreso o gasto.");
      return false;
    }


    if (!monto || isNaN(monto) || Number(monto) <= 0) {
      alert("El monto debe ser un número positivo.");
      return false;
    }


    const hoy = new Date().toISOString().split("T")[0];
    if (!fecha) {
      alert("Debe seleccionar una fecha.");
      return false;
    }
    if (fecha > hoy) {
      alert("La fecha no puede ser futura.");
      return false;
    }


    return true;
  };


  const guardarEnLocalStorage = () => {
    const nuevo = { descripcion, categoria, tipo, monto, fecha };
  const guardados = JSON.parse(localStorage.getItem('tareas')) || [];
  guardados.push(nuevo);
  localStorage.setItem('tareas', JSON.stringify(guardados));
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 


    if (!validarFormulario()) return;


    guardarEnLocalStorage();


    navigate("/")
  };


  return (
    <div className="contenedor-formulario">
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />


        <input
          type="text"
          placeholder="Categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />


        {/* TIPO SELECT */}
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="">Seleccione tipo</option>
          <option value="ingreso">Ingreso</option>
          <option value="gasto">Gasto</option>
        </select>


        <input
          type="number"
          placeholder="Monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />


        <input
          type="date"
          placeholder="Fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />


        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
