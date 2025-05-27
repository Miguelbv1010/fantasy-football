import { Link } from "react-router-dom";

export default function Home() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  return (
    <div className="container">
      <h1>Fantasy Football</h1>
      <p>Build your dream team and compete against others!</p>

      {/* Íconos decorativos */}
      <div style={{ margin: "20px" }}>
        <img src="https://cdn-icons-png.flaticon.com/512/4388/4388185.png" width="80" alt="Jugador" />
        <img src="https://cdn-icons-png.flaticon.com/512/854/854894.png" width="80" alt="Trofeo" />
      </div>

      {/* Mensaje de bienvenida */}
      {usuario && <p>Bienvenido, <strong>{usuario.nombre}</strong> 👋</p>}

      {/* Botones */}
      <div className="buttons">
        {!usuario && <>
          <Link to="/login"><button className="login">Log In</button></Link>
          <Link to="/register"><button className="signup">Sign Up</button></Link>
        </>}

        {usuario && (
          <button
            onClick={() => {
              localStorage.removeItem("usuario");
              window.location.reload();
            }}
            className="login"
          >
            Cerrar sesión
          </button>
        )}
      </div>
    </div>
  );
}
