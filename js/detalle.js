import { agregarProducto, actualizarContadorCarrito } from './shared.js';

document.addEventListener('DOMContentLoaded', () => {
  actualizarContadorCarrito();

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const productos = {
    FR001: {
      nombre: "Manzanas Fuji",
      descripcion: "Crujientes y dulces, cultivadas en el Valle del Maule.",
      precio: "$1.200 / kg",
      imagen: "img/manzana.jpg"
    },
    FR003: {
      nombre: "Plátanos Cavendish",
      descripcion: "Ricos en potasio, perfectos para el desayuno.",
      precio: "$800 / kg",
      imagen: "img/platano.jpg"
    },
    VR001: {
      nombre: "Zanahorias Orgánicas",
      descripcion: "Fuente de vitamina A, cultivadas sin pesticidas.",
      precio: "$900 / kg",
      imagen: "img/zanahoria.jpg"
    },
    PO001: {
      nombre: "Miel Orgánica",
      descripcion: "Pura y natural, rica en antioxidantes.",
      precio: "$5.000 / 500g",
      imagen: "img/miel-1.jpg"
    }
  };

  const producto = productos[id];
  if (producto) {
    document.getElementById('detalle-nombre').textContent = producto.nombre;
    document.getElementById('detalle-descripcion').textContent = producto.descripcion;
    document.getElementById('detalle-precio').textContent = producto.precio;
    document.getElementById('detalle-img').src = producto.imagen;

    document.getElementById('agregar-detalle').addEventListener('click', () => {
      agregarProducto({ ...producto, id, cantidad: 1 });
    });
  } else {
    document.querySelector('#detalle-producto').innerHTML = "<p>Producto no encontrado.</p>";
  }
});