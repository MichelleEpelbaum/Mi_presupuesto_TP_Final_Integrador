import { useEffect, useState } from "react";
import Graficos from "../pages/graficos.jsx";
import "../components/home.css";
 

export default function Home() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const datos = localStorage.getItem("tareas");
    if (datos) setTareas(JSON.parse(datos));
  }, []);

  const totalIngresos = tareas
    .filter(t => t.tipo === "ingreso")
    .reduce((acc, t) => acc + Number(t.monto), 0);

  const totalGastos = tareas
    .filter(t => t.tipo === "gasto")
    .reduce((acc, t) => acc + Number(t.monto), 0);

  const balance = totalIngresos - totalGastos;

  return (
    <div className="contenedor-home">
      <h1>Página de inicio</h1>

      <div className="totales">
        <p><strong>Total ingresos:</strong> ${totalIngresos}</p>
        <p><strong>Total gastos:</strong> ${totalGastos}</p>
        <p><strong>Balance:</strong> ${balance}</p>
      </div>

      {/* LISTA DE TAREAS */}
      {tareas.length > 0 ? (
        <div>
          <h2>Tareas guardadas:</h2>
          {tareas.map((tarea, index) => (
            <div className="tarjeta-tarea" key={index}>
              <p><strong>Descripción:</strong> {tarea.descripcion}</p>
              <p><strong>Categoría:</strong> {tarea.categoria}</p>
              <p><strong>Tipo:</strong> {tarea.tipo}</p>
              <p><strong>Monto:</strong> {tarea.monto}</p>
              <p><strong>Fecha:</strong> {tarea.fecha}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay datos guardados</p>
      )}
    </div>
  );
}
