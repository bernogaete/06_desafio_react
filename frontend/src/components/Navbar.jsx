import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";

const Navbar = () => {
  // Extraemos los valores del contexto
  const { quantity, totalPrice } = useContext(MyContext);


  const token = true;

  return (
    <div className="barra">
      <div className="d-flex align-items-center justify-content-between w-100">
        {/* Título */}
        <p className="mb-0">Pizzería Mamma Mía!</p>

        <div className="d-inline-flex gap-2">
          {/* Links de navegación */}
          <Link to="/">
            <Button className="btn-nav">Home</Button>
          </Link>
          <Link to="/login">
            <Button className="btn-nav">🔐 Login</Button>
          </Link>
          <Link to="/register">
            <Button className="btn-nav">🔐 Register</Button>
          </Link>
          <Link to="/cart">
            <Button className="btn-nav">🛒 Cart</Button>
          </Link>
          <Link to="/404">
            <Button className="btn-nav">404 Not Found</Button>
          </Link>

          

          {/* Botón de perfil condicional basado en el token */}
          {token ? (
            <Link to="/profile">
              <Button className="btn-nav">👤 Perfil</Button>
            </Link>
          ) : null}
        </div>

        {/* Información del carrito */}
        <div className="d-flex gap-2 ms-auto">
          <Link
            to="/cart"
            className="btn btn-outline-primary d-flex align-items-center"
            style={{ fontSize: "small", backgroundColor: "#f8f9fa" }}
          >
            {/* Mostramos el total del carrito y la cantidad */}
            🛒 Total: ${totalPrice.toLocaleString()} &nbsp;|&nbsp; Pagar
            CARRITO: {quantity}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
