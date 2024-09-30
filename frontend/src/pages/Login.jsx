import { useState } from "react";

const Login = () => {
    // Estados del Login
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");

    // Estado para los errores
    const [error, setError] = useState("");

    // Función antes de enviar el formulario
    const validarDatos = (e) => {
        e.preventDefault();

        // Validación de los campos
        if (!email.trim() || !contraseña.trim()) {
            setError("Todos los campos son obligatorios");
            return;
        }

        if (contraseña.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        // Limpiar los errores y los campos si todo es válido
        setError("");
        setEmail("");
        setContraseña("");

        alert("Los datos son correctos");
    };

    return (
        <div className="container-login">
            <form className="login" onSubmit={validarDatos}>
                {error && <p className="error-message">{error}</p>}

                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input 
                        type="password"
                        name="contraseña"
                        className="form-control"
                        onChange={(e) => setContraseña(e.target.value)}
                        value={contraseña}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    ENVIAR
                </button>
            </form>
        </div>
    );
};

export default Login;

