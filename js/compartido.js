export let carrito = JSON.parse(localStorage.getItem('carritoHuerto')) || [];

export function agregarProducto(producto) {
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

export function renderCarrito() {
  const tabla = document.querySelector('#carrito-items');
  if (!tabla) return;
  tabla.innerHTML = '';
  carrito.forEach(producto => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td><img src="${producto.imagen}" width="80"></td>
      <td>${producto.titulo}</td>
      <td>${producto.precio}</td>
      <td>${producto.cantidad}</td>
      <td><a href="#" class="borrar" data-id="${producto.id}">X</a></td>
    `;
    tabla.appendChild(fila);
  });
}

export function actualizarContadorCarrito() {
  const contador = document.getElementById('contador-carrito');
  const total = carrito.reduce((sum, p) => sum + p.cantidad, 0);
  if (contador) contador.textContent = total;
}