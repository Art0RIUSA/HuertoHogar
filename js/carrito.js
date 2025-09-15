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