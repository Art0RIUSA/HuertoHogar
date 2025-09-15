import { agregarProducto, actualizarContadorCarrito, renderCarrito } from './shared.js';

document.addEventListener('DOMContentLoaded', () => {
  renderCarrito();
  actualizarContadorCarrito();

  const cargarMasBtn = document.querySelector('#load-more');
  let elementoVisible = 4;

  if (cargarMasBtn) {
    cargarMasBtn.onclick = () => {
      const cajas = [...document.querySelectorAll('.box_container .box')];
      for (let i = elementoVisible; i < elementoVisible + 4 && i < cajas.length; i++) {
        cajas[i].style.display = 'inline-block';
      }
      elementoVisible += 4;
      if (elementoVisible >= cajas.length) {
        cargarMasBtn.style.display = 'none';
      }
    };
  }

  document.querySelectorAll('.agregar-carrito').forEach(boton => {
    boton.addEventListener('click', e => {
      e.preventDefault();
      const card = e.target.closest('.box');
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