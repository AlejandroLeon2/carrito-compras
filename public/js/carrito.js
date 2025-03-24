

const carrito = [];
const array = document.getElementById("array");
const botones = document.querySelectorAll("#añadir-carrito");

// Agregar evento click a cada botón
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const nombre = boton.getAttribute("data-nombre");
    const precio = boton.getAttribute("data-precio");
    const url = boton.getAttribute("data-url");

    // Crear el producto
    const producto = { nombre, precio, url };

    carrito.push(producto);
    array.textContent = JSON.stringify(carrito, null, 2);
     
  });
});