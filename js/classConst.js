// Clase constructora
class ProductoStock {
    constructor(id, tipo, version, precio, img) {
        this.id = id
        this.tipo = tipo
        this.version = version
        this.precio = precio
        this.img = img
        

    }
    datosProductos() {
        alert(`Producto en venta: ${this.id} tipo de hardware ${this.tipo}  version ${this.version} su precio es ${this.precio}`)
    }
}

// objetos creados con la clase constructora de los productos en k../
const productoVideo1 = new ProductoStock(1, "Placa de video", "Nvidia 3060 Ti", 160000, "img/nvidia-3060.webp");
const productoVideo2 = new ProductoStock(2, "Placa de video", "Nvidia 1660 Super", 110000, "img/nvidia-1660.webp");
const productoVideo3 = new ProductoStock(3, "Placa de video", "AMD 5600 XT", 90000, "img/amd-5600xt.webp");
const productoVideo4 = new ProductoStock(4, "Placa de video", "AMD 6500 XT", 130000, "img/amd-5600xt.webp");
const productoVideo5 = new ProductoStock(5, "Placa de video", "AMD 3090", 300000, "img/nvidia-3090.webp");
const productoVideo6 = new ProductoStock(6, "Placa de video", "AMD 6700 XT ", 190000, "img/amd-6700xt.webp");
const productoProcesador1 = new ProductoStock(1, "Procesador", "Intel Core I7 10 Gen", 79999, "img/i7-10700.webp");
const productoProcesador3 = new ProductoStock(3, "Procesador", "Ryzen 5 5600g", 110000, "img/ryzen5-5600g.webp");
const productoProcesador2 = new ProductoStock(2, "Procesador", "Ryzen 5 3600", 65000, "img/ryzen5-3600.webp");
const memoriaRam1 = new ProductoStock(1, "Memoria Ram", " Corsair 16 Gb ", 20000, "img/ram-corsair-16gb.webp");
const memoriaRam2 = new ProductoStock(3, "Memoria Ram", " Kingston 8gb", 11000, "img/ram-kingston-8gb.webp");
const memoriaRam3 = new ProductoStock(2, "Memoria Ram", " Spectrix 32GB", 35000, "img/ram-spectrix-32gb.webp");

// array de placas de video en stock para vender
const videoStock = []
videoStock.push(productoVideo1, productoVideo2, productoVideo3, productoVideo4, productoVideo5, productoVideo6)
// array + push de procesador en stock
const procesadorStock = []
procesadorStock.push(productoProcesador1, productoProcesador2, productoProcesador3)
// array con memoria rams
const ramStock = []
ramStock.push(memoriaRam1, memoriaRam2, memoriaRam3)
// array de todos los productos en stock
let allProductos = []
// allProductos.push(videoStock, procesadorStock, ramStock)

if(localStorage.getItem("allProductos")){
    // Si existe allProductos en el storage (key), va a entrar aca
    console.log("Ya existe la key all productos")
    allProductos = JSON.parse(localStorage.getItem("allProductos"))
}else{
    console.log(`Entra por primera vez, seteamos array en storage`)
    allProductos.push(productoVideo1, productoVideo2, productoVideo3, productoVideo4, productoVideo5, productoVideo6, productoProcesador1, productoProcesador2, productoProcesador3, memoriaRam1, memoriaRam2, memoriaRam3)
    localStorage.setItem("allProductos", JSON.stringify(allProductos))
}
