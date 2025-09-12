

export function agregarUsuario(){
    let nombre = document.getElementById("nombre").Value.trim();
    let email = document.getElementById("txtEmail").Value.trim();
    let contraseña = document.getElementById("txtPass").Value.trim();
    let concontra= document.getElementById("confirmar").Value.trim();

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




