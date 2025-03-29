

const carrito  = JSON.parse(localStorage.getItem('carrito'));

  console.log(carrito);

  function renderCarrito(carritoItems) {
    const html = carritoItems.map(item => {
      // Calculamos el subtotal para cada item
      const precios = parseInt(item.precio,10)
      const subtotal = precios * item.cantidad;
      
      return `
        <tr class="border-b border-gray-200 hover:bg-gray-50">
          <td class="py-3 px-6 text-left">
            <div class="flex items-center">
              <img src="${item.url}" class="w-10 h-10 rounded-full mr-3" alt="${item.nombre}">
              <span>${item.nombre}</span>
            </div>
          </td>
          <td class="py-3 px-6 text-center">S/ ${precios}</td>
          <td class="py-3 px-6 text-center">
            <div class="flex justify-center items-center">
              <input 
  type="number" 
value="${+item.cantidad}" data-nombre="${item.nombre}" class="cantidad-input bg-gray-100 px-4 py-1 rounded" />
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
  document.addEventListener("finalizarCarrito",()=>{

    
  });
  document.addEventListener("DOMContentLoaded", function() {
  renderCarrito(carrito);
  });