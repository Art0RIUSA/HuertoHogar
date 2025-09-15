import {
  agregarProducto,
  renderCarrito,
  actualizarContadorCarrito,
  vaciarCarrito,
  eliminarProducto
} from './carrito.js';

import { obtenerUsuario } from './login.js';

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
      const card = e.target.closest('.producto-card') || e.target.closest('.box');
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

  const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
  if (vaciarCarritoBtn) {
    vaciarCarritoBtn.addEventListener('click', () => {
      vaciarCarrito();
    });
  }

  document.addEventListener('click', e => {
    if (e.target.classList.contains('borrar')) {
      const id = e.target.getAttribute('data-id');
      eliminarProducto(id);
    }
  });

  const usuario = obtenerUsuario();
  if (usuario) {
    const loginMenu = document.querySelector('.login');
    if (loginMenu) {
      loginMenu.innerHTML = `
        <span>👤 ${usuario.rol}</span>
        <a href="#" id="cerrar-sesion">Cerrar sesión</a>
      `;
      document.getElementById('cerrar-sesion').addEventListener('click', e => {
        e.preventDefault();
        localStorage.removeItem('usuarioHuerto');
        window.location.href = 'login.html';
      });
    }
  }
});