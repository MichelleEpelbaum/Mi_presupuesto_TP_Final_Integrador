import { useEffect, useState } from "react";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

Chart.register(BarElement, CategoryScale, LinearScale, ArcElement);

export default function Graficos() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const datos = localStorage.getItem("tareas");
    if (datos) setTareas(JSON.parse(datos));
  }, []);

  // Si no hay datos → mostrar mensaje
  if (!tareas || tareas.length === 0) {
    return <p>No hay datos para generar gráficos</p>;
  }

  // ---- CÁLCULOS ----
  const ingresos = tareas
    .filter((t) => t.tipo === "ingreso")
    .reduce((acc, t) => acc + Number(t.monto), 0);

  const gastos = tareas
    .filter((t) => t.tipo === "gasto")
    .reduce((acc, t) => acc + Number(t.monto), 0);

  const categorias = {};
  tareas.forEach((t) => {
    if (!categorias[t.categoria]) categorias[t.categoria] = 0;
    categorias[t.categoria] += Number(t.monto);
  });

  // ---- DATOS PARA BARRAS ----
  const datosBarra = {
    labels: ["Ingresos", "Gastos"],
    datasets: [
      {
        label: "Monto",
        data: [ingresos, gastos],
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };

  // ---- DATOS PARA PIE ----
  const datosPie = {
    labels: Object.keys(categorias),
    datasets: [
      {
        data: Object.values(categorias),
        backgroundColor: [
          "#2196f3",
          "#ff9800",
          "#9c27b0",
          "#3f51b5",
          "#00bcd4",
          "#8bc34a",
        ],
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gráficos</h1>

      <div style={{ width: "400px", marginBottom: "40px" }}>
        <h3>Ingresos vs Gastos</h3>
        <Bar data={datosBarra} />
      </div>

      <div style={{ width: "400px" }}>
        <h3>Gastos por Categoría</h3>
        <Pie data={datosPie} />
      </div>
    </div>
  );
}
