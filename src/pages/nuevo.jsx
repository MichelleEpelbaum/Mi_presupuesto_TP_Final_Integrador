import { useState } from "react";
import "../components/nuevo.css";

export default function Nuevo() {
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [tipo, setTipo] = useState('');
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');

  const guardarEnLocalStorage = () => {
    const objForm = { descripcion, categoria, tipo, monto, fecha };
    localStorage.setItem('formData', JSON.stringify(objForm));
    console.log('Datos guardados:', objForm);
    alert('Datos guardados correctamente');
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // previene recarga
    guardarEnLocalStorage();
  };

  return (
    <div>
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
          placeholder="Categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
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