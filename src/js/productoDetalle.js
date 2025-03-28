import { productos } from "./productos";

document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const productoId = urlParams.get("codigo");
  if (productoId) {
      const producto = productos.find(p => p.codigo == productoId);

      if (producto) {
          document.getElementById("nombreProducto").textContent = producto.nombre;
          document.getElementById("descripcionProducto").textContent = producto.descripcion;
          document.getElementById("imagenProducto").src = producto.url;
          document.getElementById("precioProducto").textContent = `S/. ${Number.parseInt(producto.precio).toFixed(2)}`;
      } else {
          document.getElementById("nombreProducto").textContent = "Producto no encontrado";
      }
  } else {
      document.getElementById("nombreProducto").textContent = "No se proporcionó un ID";
  }
});