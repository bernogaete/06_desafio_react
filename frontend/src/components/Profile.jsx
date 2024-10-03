import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Usamos useNavigate para redirigir
import { MyContext } from '../context/MyContext'; // Asumiendo que tienes el contexto con logout

const Profile = ({ email }) => {
  const navigate = useNavigate(); // Hook de navegación
  const { logout } = useContext(MyContext); // Obtén la función de logout desde el contexto

  useEffect(() => {
    document.title = "Profile - Pizzería Mamma Mia";
  }, []);

  const handleLogout = () => {
    console.log("Cerrando sesión..."); // Verificar si se ejecuta
    logout(); // Llama a la función de logout

    // Verificar si la redirección funciona
    console.log("Redirigiendo a /login...");
    navigate("/login"); // Redirige al usuario a la página de login
  };

  return (
    <div className='profile-container'>
      <h2>Perfil del Usuario</h2>
      {/* Muestra el correo del usuario */}
      <p>Email: {email}</p>
      {/* Botón para cerrar sesión */}
      <button className='btn btn-danger' onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;