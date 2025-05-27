import { useState } from "react";
import { loginUsuario } from "../mockApi";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ correo: "", contraseña: "" });
  const [mensaje, setMensaje] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const res = loginUsuario(form);
    setMensaje(res.mensaje || res.error);

    if (res.usuario) {
      localStorage.setItem("usuario", JSON.stringify(res.usuario));
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
  };

  return (
    <div className="container">
      <h1>Fantasy Football</h1>
      <Link to="/register" className="link-button">Registrarse</Link>
      <form onSubmit={handleSubmit}>
        <input name="correo" placeholder="Correo electrónico" onChange={handleChange} required />
        <input name="contraseña" type="password" placeholder="Contraseña" onChange={handleChange} required />
        <button type="submit" className="login">Iniciar sesión</button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
}
