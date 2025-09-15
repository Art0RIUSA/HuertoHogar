
        let carritoItems = JSON.parse(localStorage.getItem("carrito")) || [];

        const detalle = document.getElementById("detalle-carrito");
        const subtotalEl = document.getElementById("subtotal");
        const ivaEl = document.getElementById("iva");
        const totalEl = document.getElementById("total");
        const vaciarBtn = document.getElementById("vaciar-carrito");

        mostrarCarrito();

        function mostrarCarrito() {
        detalle.innerHTML = "";

        let subtotal = 0;

        carritoItems.forEach(item => {
            let row = document.createElement("tr");
            row.innerHTML = `
            <td><img src="${item.imagen}"></td>
            <td>${item.titulo}</td>
            <td>$${item.precio}</td>
            <td>${item.cantidad}</td>
            <td>$${item.precio * item.cantidad}</td>
            <td><button class="btn eliminar" data-id="${item.id}">Eliminar</button></td>
            `;
            detalle.appendChild(row);

            subtotal += item.precio * item.cantidad;
        });

        let iva = subtotal * 0.19;
        let total = subtotal + iva;

        subtotalEl.textContent = "$" + subtotal.toFixed(0);
        ivaEl.textContent = "$" + iva.toFixed(0);
        totalEl.textContent = "$" + total.toFixed(0);
        }

        detalle.addEventListener("click", e => {
        if(e.target.classList.contains("eliminar")){
            const id = e.target.getAttribute("data-id");
            carritoItems = carritoItems.filter(item => item.id !== id);
            localStorage.setItem("carrito", JSON.stringify(carritoItems));
            mostrarCarrito();
        }
        });

        vaciarBtn.addEventListener("click", () => {
        carritoItems = [];
        localStorage.setItem("carrito", JSON.stringify(carritoItems));
        mostrarCarrito();
        });

import { renderCarrito, actualizarContadorCarrito, vaciarCarrito, eliminarProducto } from './shared.js';

document.addEventListener('DOMContentLoaded', () => {
  renderCarrito();
  actualizarContadorCarrito();

  const vaciarBtn = document.getElementById('vaciar-carrito');
  if (vaciarBtn) {
    vaciarBtn.addEventListener('click', () => {
      vaciarCarrito();
    });
  }

  document.addEventListener('click', e => {
    if (e.target.classList.contains('borrar')) {
      const id = e.target.getAttribute('data-id');
      eliminarProducto(id);
    }
  });
});

