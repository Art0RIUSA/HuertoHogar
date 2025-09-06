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
const vaciarcCarritoBtn = document.getElementById('vaciar-carrito');

cargarEvento();

function cargarEvento(){
    elemento1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarcCarritoBtn.addEventListener('click', vaciarCarrito);

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
        precio: element.querySelector('.precio').textContent,
        id: element.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElement)
}

function insertarCarrito(element){
    const row= document.createElement('tr');
    row.innerHTML =`
        <td>
            <img src="${element.imagen}" width=100/>
        </td>

        <td>
            ${element.titulo}
        </td>

        <td>
            ${element.precio}
        </td>

        <td>
            <a href="#" class="borrar" data-id="${element.id}">X</a>
        </td>
    
    
    `;
    lista.appendChild(row);
}

function eliminarElemento(e){
    e.preventDefault();
    let element,
        elementoid;

    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        element = e.target.parentElement.parentElement;
        elementoid = element.querySelector('a').getAttribute('data-id');
    }    
}

function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;
}