

function getData(clave) {
  return JSON.parse(localStorage.getItem(clave)) || [];
}


function saveData(clave, data) {
  localStorage.setItem(clave, JSON.stringify(data));
}


const formUsuario = document.getElementById("formUsuario");

formUsuario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombreUsuario").value.trim();
  const email = document.getElementById("emailUsuario").value.trim();
  const contraseña = document.getElementById("passUsuario").value.trim();

  const usuarios = getData("usuarios");

  const nuevoUsuario = {
    id: Date.now(),
    nombre,
    email,
    contraseña
  };

  usuarios.push(nuevoUsuario);
  saveData("usuarios", usuarios);

  alert("Usuario agregado correctamente");
  formUsuario.reset();
});


const formProducto = document.getElementById("formProducto");

formProducto.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombreProducto").value.trim();
  const descripcion = document.getElementById("descProducto").value.trim();
  const precio = parseInt(document.getElementById("precioProducto").value);
  const imagen = document.getElementById("imagenProducto").value.trim() || "img/logo.png";

  const productos = getData("productos");

  const nuevoProducto = {
    id: Date.now(),
    nombre,
    descripcion,
    precio,
    imagen
  };

  productos.push(nuevoProducto);
  saveData("productos", productos);

  alert("Producto agregado correctamente");
  formProducto.reset();
});
