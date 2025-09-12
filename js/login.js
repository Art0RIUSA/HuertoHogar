import { agregarUsuario } from "./usuario";


function validarUsuario(){
    var correo = document.getElementById("txtEmail").value;
    var contraseña = document.getElementById("txtPass").value;
    console.log("correo:"+correo+"Pass:"+contraseña);

    //if(correo=="abc@gmail.com"&&contraseña=="1234"){
    if(correo==usuarios.find(u => u.email)&& contraseña== usuarios.find(u => u.contraseña)){
      alert("BIENVENIDO")
      window.location.href="index.html"

    }else{
        alert("ERROR")
    }
}



