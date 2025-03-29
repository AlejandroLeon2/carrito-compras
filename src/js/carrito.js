function leerLocalStorage(carrito) {
    return JSON.parse(localStorage.getItem(carrito)) || [];
  }

  const carrito = leerLocalStorage("carrito");

  // Ahora 'carrito' contendrá el array con los objetos guardados,
  // o un array vacío [] en caso de que no existan datos en la clave "carrito".
  console.log(carrito);

  function renderCarrito(carritoItems) {
    const html = carritoItems.map(item => {
      // Calculamos el subtotal para cada item
      const subtotal = item.precio * item.cantidad;
      
      return `
        <tr class="border-b border-gray-200 hover:bg-gray-50">
          <td class="py-3 px-6 text-left">
            <div class="flex items-center">
              <img src="${item.url}" class="w-10 h-10 rounded-full mr-3" alt="${item.nombre}">
              <span>${item.nombre}</span>
            </div>
          </td>
          <td class="py-3 px-6 text-center">S/ ${item.precio}</td>
          <td class="py-3 px-6 text-center">
            <div class="flex justify-center items-center">
              <button class="disminuir bg-gray-200 px-2 py-1 rounded-l" data-nombre="${item.nombre}">-</button>
              <span class="bg-gray-100 px-4 py-1">${item.cantidad}</span>
              <button class="aumentar bg-gray-200 px-2 py-1 rounded-r" data-nombre="${item.nombre}">+</button>
            </div>
          </td>
          <td class="py-3 px-6 text-center">S/ ${subtotal.toFixed(2)}</td>
          <td class="py-3 px-6 text-center">
            <button class="eliminar text-red-500 hover:text-red-700" data-nombre="${item.nombre}">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      `;
    }).join('');
    
    // Mostrar el resultado en el tbody con id "carrito"
    document.getElementById("carrito").innerHTML = html;
  }
  document.addEventListener("DOMContentLoaded", function() {
  renderCarrito(carrito);
  })