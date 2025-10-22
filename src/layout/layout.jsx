import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <h1>Mi App</h1>
      </header>

      {/* Aquí se renderizan las rutas hijas */}
      <Outlet />

      <footer>
        <p>© 2025 Mi App</p>
      </footer>
    </div>
  );
}