
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



