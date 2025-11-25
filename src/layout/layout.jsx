import { Link, Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/nuevo">Nuevo</Link>
        <Link to="/graficos">Graficos</Link>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2025 Mi App</p>
      </footer>
    </>
  );
};

export default Layout;