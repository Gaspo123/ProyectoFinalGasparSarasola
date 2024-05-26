// Objeto de ejemplo para un producto
const producto = {
    id: 1,
    nombre: "Camiseta",
    precio: 20,
    cantidad: 10
  };
  
  // Array de productos
  let productos = [
    { id: 1, nombre: "Camiseta", precio: 20, cantidad: 10 },
    { id: 2, nombre: "Pantalón", precio: 30, cantidad: 5 },
    { id: 3, nombre: "Zapatos", precio: 50, cantidad: 3 }
  ];
  
  // Métodos de Arrays
  // Filtrar productos por precio
  const productosBaratos = productos.filter(producto => producto.precio < 40);
  
  // Función para calcular el total de una compra
  function calcularTotal(carrito) {
    return carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  }
  
  // Condiciones
  if (productos.length > 0) {
    console.log("Hay productos disponibles.");
  } else {
    console.log("No hay productos disponibles.");
  }
  
  // Generación del DOM de forma dinámica
  const contenedorProductos = document.getElementById("productos");
  
  productos.forEach(producto => {
    const elementoProducto = document.createElement("div");
    elementoProducto.innerHTML = `
      <p>${producto.nombre} - Precio: $${producto.precio}</p>
    `;
    contenedorProductos.appendChild(elementoProducto);
  });
  
  // Eventos
  document.getElementById("botonComprar").addEventListener("click", () => {
    const total = calcularTotal(productos);
    console.log(`El total de la compra es: $${total}`);
  });
  
  // Sintaxis avanzada
  // Uso de arrow functions
  const obtenerProductoPorId = (id) => productos.find(producto => producto.id === id);
  
  // Librería de uso relevante para el proyecto (por ejemplo, jQuery)
  // Se utiliza para simplificar la manipulación del DOM
  // Asegúrate de incluir la librería en tu proyecto
  // Ejemplo de uso de jQuery para ocultar un elemento
  $("#productos").hide();
  
  // Manejo de promesas con Fetch y carga de datos desde JSON local o desde una API externa
  // Carga de datos desde un archivo JSON local
  fetch("productos.json")
    .then(response => response.json())
    .then(data => {
      productos = data;
      console.log("Productos cargados desde JSON:", productos);
    })
    .catch(error => console.error("Error cargando productos:", error));
  
  // Ejemplo de carga de datos desde una API externa (requiere una URL válida)
  const apiUrl = "https://ejemplo.com/api/productos";
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log("Productos cargados desde la API:", data);
    })
    .catch(error => console.error("Error cargando productos desde la API:", error));
  