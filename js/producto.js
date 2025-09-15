import { agregarProducto, actualizarContadorCarrito, renderCarrito } from './shared.js';

document.addEventListener('DOMContentLoaded', () => {
  renderCarrito();
  actualizarContadorCarrito();

  // Filtros
  document.querySelectorAll('.filtro-categorias button').forEach(btn => {
    btn.addEventListener('click', () => {
      const categoria = btn.getAttribute('data-categoria');
      document.querySelectorAll('.producto-card').forEach(card => {
        card.style.display = card.classList.contains(categoria) ? 'block' : 'none';
      });
    });
  });

  // Búsqueda
  const buscador = document.getElementById('busqueda');
  if (buscador) {
    buscador.addEventListener('input', e => {
      const texto = e.target.value.toLowerCase();
      document.querySelectorAll('.producto-card').forEach(card => {
        const nombre = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = nombre.includes(texto) ? 'block' : 'none';
      });
    });
  }

  // Agregar al carrito
  document.querySelectorAll('.agregar-carrito').forEach(boton => {
    boton.addEventListener('click', e => {
      e.preventDefault();
      const card = e.target.closest('.producto-card');
      const producto = {
        imagen: card.querySelector('img').src,
        titulo: card.querySelector('h3').textContent,
        precio: card.querySelector('.precio').textContent,
        id: e.target.getAttribute('data-id'),
        cantidad: 1
      };
      agregarProducto(producto);
    });
  });
});