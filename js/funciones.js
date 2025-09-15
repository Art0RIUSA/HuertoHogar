<script>
  document.addEventListener('DOMContentLoaded', () => {
    let carrito = JSON.parse(localStorage.getItem('carritoHuerto')) || [];

    const cargarMasBtn = document.querySelector('#load-more');
    const carritoVisual = document.getElementById('carrito');
    const tablaCarrito = document.querySelector('#carrito-items');
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
    const contadorCarrito = document.getElementById('contador-carrito');
    const verCarritoBtn = document.getElementById('ver-carrito');

    let elementoVisible = 4;

    // Mostrar más productos
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

    // Agregar al carrito
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

    // Mostrar/ocultar carrito
    if (verCarritoBtn && carritoVisual) {
      verCarritoBtn.addEventListener('click', e => {
        e.preventDefault();
        carritoVisual.style.display = carritoVisual.style.display === 'none' ? 'block' : 'none';
      });
    }

    // Vaciar carrito
    if (vaciarCarritoBtn) {
      vaciarCarritoBtn.addEventListener('click', () => {
        carrito = [];
        localStorage.removeItem('carritoHuerto');
        renderCarrito();
        actualizarContadorCarrito();
      });
    }

    // Eliminar producto
    document.addEventListener('click', e => {
      if (e.target.classList.contains('borrar')) {
        const id = e.target.getAttribute('data-id');
        carrito = carrito.filter(p => p.id !== id);
        localStorage.setItem('carritoHuerto', JSON.stringify(carrito));
        renderCarrito();
        actualizarContadorCarrito();
      }
    });

    // Filtros por categoría
    document.querySelectorAll('.filtro-categorias button').forEach(btn => {
      btn.addEventListener('click', () => {
        const categoria = btn.getAttribute('data-categoria');
        document.querySelectorAll('.producto-card').forEach(card => {
          card.style.display = card.classList.contains(categoria) ? 'block' : 'none';
        });
      });
    });

    // Búsqueda por nombre
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

    // Funciones internas
    function agregarProducto(producto) {
      const existente = carrito.find(p => p.id === producto.id);
      if (existente) {
        existente.cantidad += 1;
      } else {
        carrito.push(producto);
      }
      localStorage.setItem('carritoHuerto', JSON.stringify(carrito));
      renderCarrito();
      actualizarContadorCarrito();
      alert('Producto añadido al carrito correctamente');
    }

    function renderCarrito() {
      if (!tablaCarrito) return;
      tablaCarrito.innerHTML = '';
      carrito.forEach(producto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td><img src="${producto.imagen}" width="80"></td>
          <td>${producto.titulo}</td>
          <td>${producto.precio}</td>
          <td>${producto.cantidad}</td>
          <td><a href="#" class="borrar" data-id="${producto.id}">X</a></td>
        `;
        tablaCarrito.appendChild(fila);
      });
    }

    function actualizarContadorCarrito() {
      const total = carrito.reduce((sum, p) => sum + p.cantidad, 0);
      if (contadorCarrito) contadorCarrito.textContent = total;
    }

    // Inicializar
    renderCarrito();
    actualizarContadorCarrito();
  });

  // Simulación de login
  document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('.formulario-login');
    if (!formulario) return;

    const usuarios = [
      { correo: 'cliente@huerto.cl', clave: 'cliente123', rol: 'cliente' },
      { correo: 'empleado@huerto.cl', clave: 'empleado123', rol: 'empleado' },
      { correo: 'admin@huerto.cl', clave: 'admin123', rol: 'admin' }
    ];

    formulario.addEventListener('submit', e => {
      e.preventDefault();
      const correo = document.getElementById('correo').value.trim();
      const clave = document.getElementById('clave').value.trim();
      const rol = document.getElementById('rol').value;

      const usuario = usuarios.find(u => u.correo === correo && u.clave === clave && u.rol === rol);

      if (usuario) {
        alert(`Bienvenido ${rol === 'admin' ? 'Administrador' : rol === 'empleado' ? 'Empleado' : 'Cliente'} 👋`);
        switch (rol) {
          case 'cliente':
            window.location.href = 'cliente.html';
            break;
          case 'empleado':
            window.location.href = 'empleado.html';
            break;
          case 'admin':
            window.location.href = 'admin.html';
            break;
        }
      } else {
        alert('Credenciales incorrectas. Verifica tu correo, contraseña y rol seleccionado.');
      }
    });
  });
</script>