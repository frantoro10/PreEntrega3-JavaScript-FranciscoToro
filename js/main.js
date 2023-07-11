// E-Commerce Productos PC

// Capuramos DOM:

// Catalogo
let componentesDiv = document.getElementById("componentes")
let showCatalogo = document.getElementById("verCatalogo")
let hideCatalogo = document.getElementById("ocultarCatalogo")
// Select Orden (Filtro Mayor Menor Etc)
let selectOrden = document.getElementById("selectOrden")
// Agregar componente
let tipoIngresado = document.getElementById("addTipo")
let versionIngresado = document.getElementById("addVersion")
let precioIngresado = document.getElementById("addPrecio")
let agregarComponenteBtn = document.getElementById("guardarComponente")
// Inputs FIltro
let tipoInput = document.getElementById("tipoInput")
let versionInput = document.getElementById("versionInput")
let precioInput = document.getElementById("precioInput")
let filtrarComponente = document.getElementById ("filtrarComponente")



// Funciones del Proyecto: | (Hoisting) 

// Agregar componente Funcion
function agregarComponente(array){
    const componenteNuevo = new ProductoStock(array.length+1,tipoIngresado.value,versionIngresado.value,precioIngresado.value,"img/componentes.webp")
    array.push(componenteNuevo)
    // Setear en el storage el array con el componente 
    localStorage.setItem("allProductos", JSON.stringify(array))
    mostrarCatalogo(array)
    //resetear el form
   tipoIngresado.value = ""
   versionIngresado.value = ""
   precioIngresado.value = ""
}

// Al agrupar las tres variables de valor "tipo version precio coincide" en una sola funcion flecha, estas 3 entonces se relacionan entre si para conseguir un resultado. En cambio el codigo anterior comentado que hice, estas no se relacionaban y trabajaban de forma independiente.
function busqueda3I(array) {
    let busquedaFiltro = array.filter((componente) => {
      const tipoCoincide = componente.tipo.toLowerCase() == tipoInput.value.toLowerCase();
      const versionCoincide = componente.version.toLowerCase().includes(versionInput.value.toLowerCase());
      const precioCoincide = parseInt(componente.precio) <= parseInt(precioInput.value);
      return tipoCoincide && versionCoincide && precioCoincide;
    });
    if ( busquedaFiltro.length === 0) {
      alert("Nada para mostrar");
    }
    else {
      mostrarCatalogo(busquedaFiltro);
    }
  }

// Funcion con Metodo sort para ordenar de forma ascendente un array
function ordenarMenorMayor(array) {
    const menorMayor = [].concat(array)
    menorMayor.sort((a, b) => a.precio - b.precio)
    mostrarCatalogo(menorMayor)
}
// ordenarMenorMayor(allProductos)

// sort forma descendente | el elemento 2 va primero que el 1 para hacer lo contrario a la forma ascendente.
function ordenarMayorMenor(array) {
    const mayorMenor = [].concat(array)
    mayorMenor.sort((el1, el2) => el2.precio - el1.precio)
    mostrarCatalogo(mayorMenor)
}
// ordenarMayorMenor(allProductos)

// sort para ordenar alfabeticamente
// Entonces con esta estructura ordenamos alfabeticamenta el array. (estructura correcta)
function sortAlfabeticoTipo(array) {
    const arrayAnalfabetico = [].concat(array)
    arrayAnalfabetico.sort((a, b) => {
        if (a.tipo > b.tipo) {
            return 1;
        }
        if (a.tipo < b.tipo) {
            return -1;
        }
        // Y si no quiere decir que son iguales y me retorna 0
        return 0;
    })
    mostrarCatalogo(arrayAnalfabetico)
}

// Imprimimos array de objetos (all) en catalogo HTML
//  for of para imprimir todo el array 
function mostrarCatalogo(array){
    // reset DOM
    componentesDiv.innerHTML = ``
    for (let componentes of array) {
        let newComponenteDiv = document.createElement("div")
        newComponenteDiv.className = "col-12 col-md-6 col-lg-4"
        newComponenteDiv.innerHTML = `<div id="${componentes.id}" style="width: 18rem;">
                                    <img src="${componentes.img}" class="card-img-top" alt="${componentes.version}">
                                        <div class="card-body">
                                             <h4 class="card-title">${componentes.tipo}</h4>
                                                <p>Version: ${componentes.version}</p>
                                                <p> Precio: ${componentes.precio}</p>
                                     <button id="" class="btn btn-outline-success">Agregar al carrito</button>
                                         </div>
                                    </div>`
        componentesDiv.appendChild(newComponenteDiv)

    }
}


// Eventos del proyecto:

// Agregar componente
 agregarComponenteBtn.addEventListener("click", function(event){
    //nos permite que no se actualice al ejecutar el evento
    event.preventDefault()
    // event.target
    agregarComponente(allProductos)
 })
// Boton de filtrar
filtrarComponente.addEventListener("click", () => {busqueda3I(allProductos)})
//  Mostrar Catalogo
showCatalogo.addEventListener("click", () => {mostrarCatalogo(allProductos)}) 
// Ocultar catalogo
hideCatalogo.addEventListener("click", () => {componentesDiv.innerHTML = ``})
// Agregamos interactividad al select y sus opciones (menor mayor) etc
selectOrden.addEventListener("change", ()=> { 
    switch(selectOrden.value){
        case "1":
            ordenarMayorMenor(allProductos)
            break
        case "2":
            ordenarMenorMayor(allProductos)
            break
        case "3": 
            sortAlfabeticoTipo(allProductos)
            break
        default: 
            mostrarCatalogo(allProductos)
            break            
    }
})








