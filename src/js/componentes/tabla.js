export function tablaProductos(url, nombre, precios) {
    return `
        <tr class="border-b border-gray-200 hover:bg-gray-50 text-center ">
          <td class="py-1 px-2 text-left">
            <div class="flex items-center">
              <img src="${url}" class="w-10 h-10 rounded-full mr-3 overflow-hidden" alt="${nombre}">
              <span class="overflow-hidden" >${nombre}</span>
            </div>
          </td>
          <td class="py-1 px-2 text-center">S/ ${precios}</td>
          <td class="flex justify-center items-center ">
            <button class="eliminar text-black bg-red-500  w-5 h-5 rounded" data-nombre="${item.nombre}">X</button>
          </td>
        </tr>
    `;
}
export function tablaProductosbase() {
    return `
            <section
            class="mt-8 py-4 bg-white shadow-md rounded-lg text-xs md:text-base md:leading-[1rem] leading-[0.7rem] ">
            <h2 class="text-center  font-semibold mb-4">Carrito de Compras</h2>
            <div class="overflow-auto">
                <table class="w-full bg-white">
                    <thead>
                        <tr class=" bg-gray-50 text-gray-600 uppercase ">
                            <th class="py-3 px-6 text-left">Producto</th>
                            <th class="py-3 px-6 text-center">Precio</th>
                            <th class="py-3 px-6 text-center"></th>
                        </tr>
                    </thead>
                    <tbody id="carrito" class="text-gray-600 text-sm font-light"></tbody>
                </table>
            </div>
            <p class=" font-bold  mt-4 ml-4">Total: <span id="total">S/ 0</span></p>
            <div class="flex justify-around mt-4">
                <button id="seguirComprando"
                    class="bg-blue-500 text-white  rounded-lg hover:bg-blue-600 w-[6rem] md:w-[8rem] px-2 py-1 hover:scale-105 active:scale-95 ">Seguir
                    Comprando</button>
                <div class="gap-8">
                    <button id="vaciarCarrito"
                        class="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600  md:w-[6rem] w-[4rem] hover:scale-105 active:scale-95 ">Vaciar
                        Carrito</button>
                    <button id="finalizarPedido"
                        class="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600 md:w-[6rem] w-[4rem] hover:scale-105 active:scale-95 ">Finalizar
                        Pedido</button>
                </div>
            </div>
        </section>
    `;
}

