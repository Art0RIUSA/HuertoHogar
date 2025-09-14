function agregarUsuario(){
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("txtEmail").value.trim();
    let contraseña = document.getElementById("txtPass").value.trim();
    let concontra= document.getElementById("confirmar").value.trim();

    let usuarios = JSON.parse(localStorage.getItem("usuarios"))||[];




    let existe = usuarios.find(u => u.email === email);
    if(existe){
        document.getElementById("mensaje").innerText="El correo ya esta en uso"
        return;
    }

    usuarios.push({nombre,email,contraseña});

    if(concontra==contraseña){
        localStorage.setItem("usuarios",JSON.stringify(usuarios));
        alert("usuario registrado")
    }else{
        alert("error contraseñas no coinciden")
    }
}




