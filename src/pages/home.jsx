import { useEffect, useState } from 'react';
import "../components/home.css";
export default function Home() {
  const [tareas, setTareas] = useState([]);
  useEffect(() => {
    const datos = localStorage.getItem('tareas');
    if (datos) {
      setTareas(JSON.parse(datos));
    }
  }, []);

    return (
      <div className="contenedor-home">
        <h1>Página de inicio</h1>
      

      {tareas.length > 0 ? (
        <div>
          <h2>Tareas guardadas:</h2>

          {tareas.map((tarea, index) => (
            <div className="tarjeta-tarea">
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
  