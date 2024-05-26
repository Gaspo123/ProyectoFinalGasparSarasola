// Objeto para representar un producto
class Producto {
    constructor(nombre, imagen, precio, stock) {
        this.nombre = nombre (pepe);
        console.log (true)
        this.imagen = imagen;
        this.precio = precio;
        this.stock = stock;
    }
}

// Array de productos
let productos = [];

// Función para cargar productos desde un JSON local
async function cargarProductos() {
    try {
        const response = await fetch('productos.json');
        const data = await response.json();
        productos = data.map(item => new Producto(item.nombre, item.imagen, item.precio, item.stock));
        mostrarProductos();
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
}

// Función para mostrar los productos en el DOM de forma dinámica
function mostrarProductos() {
    const sectionProductos = document.querySelector('section');
    sectionProductos.innerHTML = '';
    productos.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <p>${producto.nombre}</p>
            <p>Precio: $${producto.precio}</p>
            <p>Stock: ${producto.stock}</p>
        `;
        sectionProductos.appendChild(divProducto);
    });
}

// Evento para realizar la búsqueda de productos
function buscar() {
    const inputBusqueda = document.querySelector('input[name="search"]');
    const textoBusqueda = inputBusqueda.value.toLowerCase();
    const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(textoBusqueda));
    mostrarProductosFiltrados(productosFiltrados);
}

// Función para mostrar los productos filtrados en el DOM
function mostrarProductosFiltrados(productosFiltrados) {
    const sectionProductos = document.querySelector('section');
    sectionProductos.innerHTML = '';
    productosFiltrados.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <p>${producto.nombre}</p>
            <p>Precio: $${producto.precio}</p>
            <p>Stock: ${producto.stock}</p>
        `;
        sectionProductos.appendChild(divProducto);
    });
}

// Función para manejar el evento de envío del formulario de pedido
function manejarPedido(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    // Aquí podrías enviar los datos del pedido a una API externa o realizar alguna acción adicional
    console.log('Pedido realizado por:', nombre, email, telefono, direccion);
}

// Evento para cargar productos al cargar la página
window.addEventListener('load', cargarProductos);

// Evento para manejar el envío del formulario de pedido
const formularioPedido = document.getElementById('formularioPedido');
formularioPedido.addEventListener('submit', manejarPedido);
