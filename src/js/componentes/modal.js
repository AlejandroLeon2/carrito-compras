export function modalComponente() {
  return `<section class=" fixed inset-0 bg-black/50 text-xs md:text-base " >
  <div id="sidePanel" class="fixed top-0 right-[-300px] w-[18rem] h-full overflow-y-scroll md:w-[20rem] bg-cyan-50 dark:bg-gray-700 shadow-lg transform transition-transform duration-300">
          <div class="py-2 px-1 w-full">
            <h3 class="text-lg w-[18rem] font-bold dark:text-white mb-4 text-black">Carrito de Compras</h3>
            <button id="enviarCarrito" type="button" class="bg-green-500 w-[6rem] md:w-[7rem] px-4 py-1 hover:scale-105 active:scale-95 cursor-pointer text-black dark:text-white rounded mb-4 ">Pagar</button>
            <ul id="productList" class=" h-[50rem] "></ul>
            <button id="closePanel" class="absolute top-4 right-2 bg-red-500 text-white py-0.5 px-2 rounded">X</button>
          </div>
        </div>
        </section>
`;
}

export function modalcard(url, nombre, precio, codigo) {
  return `
    <img src="${url}" alt="${nombre}" class="w-[6rem]  h-full rounded-l shadow-xl">
    <div class="flex-1">
      <p class="font-semibold overflow-hidden mx-1">${nombre}</p>
      <p class="text-sm text-black dark:text-white">S/ ${precio.toFixed(2)}</p>
    </div>
    <button data-codigo="${codigo}" class="remove-btn  bg-red-500 text-white px-1 py-0.5 rounded  mr-1 mt-1 hover:scale-105 active:scale-95 cursor-pointer">X</button>
    `;
}

