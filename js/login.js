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
      localStorage.setItem('usuarioHuerto', JSON.stringify(usuario));
      alert(`Bienvenido ${rol} 👋`);
      window.location.href = `${rol}.html`;
    } else {
      alert('Credenciales incorrectas.');
    }
  });
});