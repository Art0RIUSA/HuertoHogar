let cargarMasBtn = document.querySelector('#load-more');
let elemento = 4;


cargarMasBtn.onclick = () => {
    let cajas = [...document.querySelectorAll('.box_container .box')];
    for(var i = elemento; i<elemento + 4; i++){
        cajas[i].style.display='inline-block';
    }
    elemento +=4;
    if(elemento>=cajas.length){
        cargarMasBtn.style.display = 'none'
    }
}


const carrito = document.getElementById('carrito');
const elemento1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');


let carritoItems = JSON.parse(localStorage.getItem("carrito")) || [];

cargarEvento();
mostrarCarrito(); 

function cargarEvento(){
    elemento1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const element = e.target.parentElement.parentElement;
        leerDatosElemento(element);
    }
}

function leerDatosElemento(element){
    const infoElement = {
        imagen: element.querySelector('img').src,
        titulo: element.querySelector('h3').textContent,
        precio: parseFloat(element.querySelector('.precio').textContent.replace('$','')),
        id: element.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };


    const existe = carritoItems.find(item => item.id === infoElement.id);
    if(existe){
        existe.cantidad++;
    }else{
        carritoItems.push(infoElement);
    }

    guardarCarrito();
    mostrarCarrito();
}

function insertarCarrito(element){
    const row= document.createElement('tr');
    row.innerHTML =`
        <td><img src="${element.imagen}" width=100/></td>
        <td>${element.titulo}</td>
        <td>$${element.precio} x </td>
        <td>${element.cantidad} = </td>
        <td>$${element.precio * element.cantidad}</td>
        <td><a href="#" class="borrar" data-id="${element.id}">X</a></td>
    `;
    lista.appendChild(row);
}

function mostrarCarrito(){
    lista.innerHTML = ""; 

    let subtotal = 0;
    let totalProductos = 0;

    carritoItems.forEach(element => {
        insertarCarrito(element);
        subtotal += element.precio * element.cantidad;
        totalProductos += element.cantidad;
    });

    let iva = subtotal * 0.19;
    let total = subtotal + iva;

    document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(0);
    document.getElementById("iva").textContent = "$" + iva.toFixed(0);
    document.getElementById("total").textContent = "$" + total.toFixed(0);

    const contadorCarrito = document.getElementById("contador-carrito");

    if(contadorCarrito){ 
        contadorCarrito.textContent = totalProductos;
    }
}



function eliminarElemento(e){
    e.preventDefault();

    if(e.target.classList.contains('borrar')){
        const elementId = e.target.getAttribute('data-id');
        carritoItems = carritoItems.filter(item => item.id !== elementId);
        guardarCarrito();
        mostrarCarrito();
    }    
}

function vaciarCarrito(){
    carritoItems = [];
    guardarCarrito();
    mostrarCarrito();
    return false;
}


function guardarCarrito(){
    localStorage.setItem("carrito", JSON.stringify(carritoItems));
}

function ir(){
    location.href='carrito.html'
}


