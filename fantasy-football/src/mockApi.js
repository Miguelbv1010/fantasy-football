const usuarios = [];

export function registrarUsuario({ nombre, correo, contraseña }) {
  if (usuarios.find(u => u.correo === correo)) {
    return { error: "El correo ya está registrado" };
  }
  usuarios.push({ nombre, correo, contraseña });
  return { mensaje: "Registro exitoso" };
}

export function loginUsuario({ correo, contraseña }) {
  const user = usuarios.find(u => u.correo === correo && u.contraseña === contraseña);
  if (!user) return { error: "Credenciales inválidas" };
  return { mensaje: "Inicio de sesión exitoso", usuario: user };
}
