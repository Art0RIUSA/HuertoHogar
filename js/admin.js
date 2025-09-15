const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.querySelector('.sidebar-nav');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
}


function getUsuarios() {
  return JSON.parse(localStorage.getItem("usuarios")) || [];
}


function mostrarUsuarios() {
  const usuarios = getUsuarios();
  const tbody = document.querySelector("#tablaUsuarios tbody");
  if (!tbody) return;


  tbody.innerHTML = "";


  if (usuarios.length === 0) {
    tbody.innerHTML = `<tr><td colspan="2">No hay usuarios registrados</td></tr>`;
    return;
  }

  usuarios.forEach(user => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${user.nombre}</td>
      <td>${user.email}</td>
    `;
    tbody.appendChild(fila);
  });
}


document.addEventListener("DOMContentLoaded", mostrarUsuarios);



// Obtener productos desde localStorage
function getProductos() {
  return JSON.parse(localStorage.getItem("productos")) || [];
}

// Mostrar productos en tabla
function mostrarProductos() {
  const productos = getProductos();
  const tbody = document.querySelector("#tablaProductos tbody");
  if (!tbody) return;

  tbody.innerHTML = "";

  if (productos.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4">No hay productos registrados</td></tr>`;
    return;
  }

  productos.forEach(prod => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${prod.nombre}</td>
      <td>$${prod.precio.toLocaleString("es-CL")}</td>
    `;
    tbody.appendChild(fila);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos();
});



