import { Producto } from './productos.js';

//==============================================================>
//             Guarda productos en array carrito 
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

mostrarCard ();

document.addEventListener(`DOMContentLoaded`,()=>{
  document.getElementById("mostrarCatalogo").addEventListener("click",()=>{
    Producto.prototype.mostrarProducto();
  });
  document.getElementById("mostrarPc").addEventListener("click",()=>{
    Producto.prototype.filtrarProducto("Pc")
  });
  document.getElementById("mostrarImpresoras").addEventListener("click",()=>{
    Producto.prototype.filtrarProducto("Impresoras")
  });
  document.getElementById("mostrarLaptop").addEventListener("click",()=>{
    Producto.prototype.filtrarProducto("Laptop")
  });
  document.getElementById("mostrarAccesorios").addEventListener("click",()=>{
    Producto.prototype.filtrarProducto("Accesorios")
  });

});

// =====================================================================>
//                 modal filters
const closeModal = document.getElementById (`closeModal`);
const modal = document.getElementById('modal');
const filtroButton = document.getElementById('filtro');
const apply_filters = document.getElementById('apply-filters');

const Modal = () => {
  modal.classList.toggle('hidden');
  modal.classList.toggle('flex');
};

// Capturar los valores seleccionados
const applyFilters = () => {
  const selectedPrice = document.querySelector('input[name="price"]:checked');
  const selectedStatuses = document.querySelectorAll('input[name="status"]:checked');

  const priceValue = selectedPrice ? selectedPrice.value : null; // Captura el valor del radio seleccionado
  const statusValues = Array.from(selectedStatuses).map((checkbox) => checkbox.value); // Captura los valores de los checkboxes seleccionados

  console.log('Precio seleccionado:', priceValue);
  console.log('Estados seleccionados:', statusValues);

  Modal();
};


filtroButton.addEventListener('click', Modal);
closeModal.addEventListener(`click`,Modal)
apply_filters.addEventListener('click', applyFilters);

//=============================================================>
//               modal carrito

  const togglePanelButton = document.getElementById("togglePanel");
  const sidePanel = document.getElementById("sidePanel");
  const overlay = document.getElementById("overlay");
  const productList = document.getElementById("productList");
  const closePanel = document.getElementById("closePanel");
  
  const hiddenPanel = () => {
    overlay.classList.toggle("hidden");
    const isVisible = sidePanel.classList.toggle("-translate-x-[300px]");
    sidePanel.classList.toggle("translate-x-0", !isVisible);
  };
  
  const modalCarrito = () => {
    productList.innerHTML = ""; 
    carrito.forEach((producto, index) => {
      const li = document.createElement("li");
      li.classList.add("flex", "items-center", "rounded", "justify-center", "mb-4" ,"dark:text-white","text-black", "dark:bg-[#272829]","bg-[#f0e7d6]", "border-black","dark:border-white","border","h-[5rem]", "overflow-hidden","items-start","hover:scale-105");
  
      li.innerHTML = `
        <img src="${producto.url}" alt="${producto.nombre}" class="w-[6rem]  h-full rounded-l shadow-xl">
        <div class="flex-1">
          <p class="font-semibold">${producto.nombre}</p>
          <p class="text-sm text-black dark:text-white">S/ ${producto.precio}</p>
        </div>
        <button class="bg-red-500 text-white px-1 py-0.5 rounded remove-btn  mr-1 mt-1 hover:scale-105 active:scale-95 cursor-pointer" data-index="${index}">X</button>
      `;
      productList.appendChild(li);
    });
  
    // Añadir funcionalidad para eliminar productos
    const removeButtons = document.querySelectorAll(".remove-btn");
    removeButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const productIndex = e.target.getAttribute("data-index");
        carrito.splice(productIndex, 1); // Eliminar producto del array
        modalCarrito(); // Actualizar la lista
      });
    });
  };
  
  togglePanelButton.addEventListener("click", () => {
    modalCarrito(); 
    hiddenPanel();
  });

  
  closePanel.addEventListener("click", hiddenPanel);
  //========================================================>
    //subiendo carrito al local Storage
  
  document.getElementById("enviarCarrito").addEventListener("click", ()=>{
    localStorage.setItem("carrito", JSON.stringify(carrito));
  })
  
//==================================================>
 // redirecciona a la pagina detalle Producto

  document.addEventListener("DOMContentLoaded", function() {
   
    catalogo.addEventListener("click", function(event) {
      if (event.target.classList.contains("ver-mas")) {
        const codigo = event.target.getAttribute("codigo");
        window.location.href = `../src/detalleProducto.html?codigo=${codigo}`;
      }
    });
  });