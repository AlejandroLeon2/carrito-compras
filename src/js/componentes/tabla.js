export function tablaProductos(nombre, precios, url, codigo) {
    return `
          <td class="py-1 px-2 text-left">
            <div class="flex items-center">
              <img src="${url}" class="w-10 h-10 rounded-full mr-3 overflow-hidden object-cover" alt="${nombre}">
              <span class="overflow-hidden w-25 h-[4rem]" >${nombre}</span>
            </div>
          </td>
          <td class="py-1 px-2 text-center">S/ ${precios.toFixed(2)}</td>
                    <td class="py-1 px-2 text-center">
            <input type="number" value="1" min="1" class="cantidad-input border rounded w-6 text-center"
            data-codigot = "${codigo}" data-precio="${precios}" />
          </td>
          <td class="flex justify-center items-center ">
            <button class="eliminar-btn text-black bg-red-500  w-5 h-5 rounded" data-codigoPago="${codigo}  ">X</button>
          </td>
    `;
}
export function tablaProductosbase() {
    return `
            <h2 class="text-center h-[2rem] font-semibold mb-4">Carrito de Compras</h2>
            <div class="">
                <table class="w-[19rem] md:w-[47rem] bg-white mx-auto">
                    <thead>
                        <tr class=" bg-gray-50 text-gray-600 uppercase ">
                            <th class="py-3 px-6 text-left">Producto</th>
                            <th class="py-3 px-6 text-center">Precio</th>
                            <th class="py-3 px-6 text-center">Cantidad</th>
                            <th class="py-3 px-6 text-center"></th>
                        </tr>
                    </thead>
                    <tbody id="cardPago" class="text-gray-600 text-sm font-light"></tbody>
                </table>
            </div>
            <p class=" font-bold  w-[15rem] md:w-[42rem] mx-auto mt-4 flex">Total: <span id="total">S/ 0</span></p>
            <div class="flex justify-around w-[19rem] md:[47rem] mt-4 mx-auto gap-6 md:gap-20 ">
                <button id="seguirComprando"
                    class="bg-blue-500 text-white  rounded-lg hover:bg-blue-600 w-[6rem] md:w-[8rem] px-2 py-1 hover:scale-105 active:scale-95 ">Seguir
                    Comprando</button>
                <div class="gap-4 flex">
                    <button id="vaciarCarrito"
                        class="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600  md:w-[6rem] w-[4rem] hover:scale-105 active:scale-95 ">Vaciar
                        Carrito</button>
                    <button id="finalizarPedido"
                        class="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600 md:w-[8rem] w-[6rem] hover:scale-105 active:scale-95 ">Finalizar
                        Pedido</button>
                </div>
            </div>
    `;
}

