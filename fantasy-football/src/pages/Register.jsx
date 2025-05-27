import { useState } from "react";
import { registrarUsuario } from "../mockApi";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ nombre: "", correo: "", contraseña: "", confirmar: "" });
  const [mensaje, setMensaje] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (form.contraseña !== form.confirmar) {
      setMensaje("Las contraseñas no coinciden");
      return;
    }
    const res = registrarUsuario(form);
    setMensaje(res.mensaje || res.error);
  };

  return (
    <div className="container">
      <h1>Fantasy Football</h1>
      <Link to="/" className="link-button">Volver a Inicio</Link>
      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" onChange={handleChange} required />
        <input name="correo" placeholder="Correo electrónico" onChange={handleChange} required />
        <input name="contraseña" type="password" placeholder="Contraseña" onChange={handleChange} required />
        <input name="confirmar" type="password" placeholder="Confirmar contraseña" onChange={handleChange} required />
        <button type="submit" className="signup">Registrarse</button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
}
