document.addEventListener('DOMContentLoaded', () => {
  const usuario = JSON.parse(localStorage.getItem('usuarioHuerto'));
  const loginMenu = document.querySelector('.login');

  if (usuario && loginMenu) {
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
});