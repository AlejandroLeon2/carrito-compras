import { Producto } from './productos.js';


const carrito = [];
const array = document.getElementById("array");

function mostrarCard() {


    const botones = document.querySelectorAll("#añadir-carrito");
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const nombre = boton.getAttribute("data-nombre");
            const precio = boton.getAttribute("data-precio");
            const url = boton.getAttribute("data-url");

            const producto = { nombre, precio, url };

            carrito.push(producto);
            array.textContent = JSON.stringify(carrito, null, 2);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    Producto.prototype.mostrarProducto();
    mostrarCard ();
});


// Obtener elementos del DOM
const modal = document.getElementById('modal');
const filtroButton = document.getElementById('filtro');
const applyFiltersButton = document.getElementById('apply-filters');

// Mostrar el modal
const showModal = () => {
  modal.classList.remove('hidden');
  modal.classList.add('flex'); // Asegura que el modal sea visible y con diseño flexible
};

// Ocultar el modal
const hideModal = () => {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
};

// Capturar los valores seleccionados
const applyFilters = () => {
  const selectedPrice = document.querySelector('input[name="price"]:checked');
  const selectedStatuses = document.querySelectorAll('input[name="status"]:checked');

  const priceValue = selectedPrice ? selectedPrice.value : null; // Captura el valor del radio seleccionado
  const statusValues = Array.from(selectedStatuses).map((checkbox) => checkbox.value); // Captura los valores de los checkboxes seleccionados

  // Mostrar los valores en consola
  console.log('Precio seleccionado:', priceValue);
  console.log('Estados seleccionados:', statusValues);

  // Aquí puedes implementar lógica adicional para aplicar los filtros en tu página, como filtrar productos dinámicamente.

  // Ocultar el modal después de aplicar los filtros
  hideModal();
};

// Event listeners para botones
filtroButton.addEventListener('click', showModal); // Mostrar el modal
applyFiltersButton.addEventListener('click', applyFilters); // Aplicar los filtros y ocultar el modal




  
  // Obtener elementos del DOM
  const togglePanelButton = document.getElementById("togglePanel");
  const sidePanel = document.getElementById("sidePanel");
  const overlay = document.getElementById("overlay");
  const productList = document.getElementById("productList");
  const closePanel = document.getElementById("closePanel");
  
  // Función para mostrar el panel
  const showPanel = () => {
    overlay.classList.remove("hidden");
    sidePanel.style.transform = "translateX(-300px)"; // Mover el panel a la vista
  };
  
  // Función para cerrar el panel
  const hidePanel = () => {
    overlay.classList.add("hidden");
    sidePanel.style.transform = "translateX(0)"; // Ocultar el panel
  };
  
  // Función para renderizar productos en el carrito
  const renderCarrito = () => {
    productList.innerHTML = ""; // Limpiar contenido previo
    carrito.forEach((producto, index) => {
      const li = document.createElement("li");
      li.classList.add("flex", "items-center", "rounded", "justify-center", "mb-4" , "bg-amber-800", "border-black","border","h-[5rem]", "overflow-hidden");
  
      li.innerHTML = `
        <img src="${producto.url}" alt="${producto.nombre}" class="w-[6rem]  h-full rounded-l shadow-xl">
        <div class="flex-1">
          <p class="font-semibold">${producto.nombre}</p>
          <p class="text-sm text-gray-700">S/ ${producto.precio}</p>
        </div>
        <button class="bg-red-500 text-white py-1 px-2 rounded remove-btn mr-2" data-index="${index}">X</button>
      `;
      productList.appendChild(li);
    });
  
    // Añadir funcionalidad para eliminar productos
    const removeButtons = document.querySelectorAll(".remove-btn");
    removeButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const productIndex = e.target.getAttribute("data-index");
        carrito.splice(productIndex, 1); // Eliminar producto del array
        renderCarrito(); // Actualizar la lista
      });
    });
  };
  
  // Event listeners
  togglePanelButton.addEventListener("click", () => {
    renderCarrito(); // Renderizar los productos en el panel
    showPanel();
  });
  
  closePanel.addEventListener("click", hidePanel);
  