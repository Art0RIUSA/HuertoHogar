const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const productos = {
  FR001: {
    nombre: "Manzanas Fuji",
    descripcion: "Crujientes y dulces, cultivadas en el Valle del Maule.",
    precio: "$1.200 / kg",
    imagen: "img/manzana.jpg"
  },
  // Agrega más productos aquí
};

const producto = productos[id];

if (producto) {
  document.getElementById('detalle-nombre').textContent = producto.nombre;
  document.getElementById('detalle-descripcion').textContent = producto.descripcion;
  document.getElementById('detalle-precio').textContent = producto.precio;
  document.getElementById('detalle-img').src = producto.imagen;
}