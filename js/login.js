

function validarUsuario(){
    var correo = document.getElementById("txtEmail").value.trim();
    var contraseña = document.getElementById("txtPass").value.trim();
    console.log("correo:"+correo+"Pass:"+contraseña);

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    //if(correo=="abc@gmail.com"&&contraseña=="1234"){
    let usuario = usuarios.find(u => u.email === correo && u.contraseña === contraseña);

    if(usuario){
        alert("Bienvenido" + usuario.nombre);
        localStorage.setItem("sesion", JSON.stringify(usuario));
        window.location.href = "index.html";
    }else{
        alert("Correo o contraseña incorrectos");
        console.log(JSON.parse(localStorage.getItem("usuarios")));

    }
}




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

