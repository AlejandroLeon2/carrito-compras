export function pageProducto(nombre, descripcion, precio, codigo, url) {
  return `    <section id="sectionProducto" class=" h-full  w-[18rem] md:w-[42rem] lg:w-2/3 my-8 mx-auto rounded border">
   
   <section class="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-full rounded-lg bg-white overflow-hidden">
          <div class="flex flex-col">
        <div  class="relative h-full">
          <img src="${url}"
            alt="Imagen del producto" class="md:w-full w-[20rem] h-full object-cover">
        </div>
      </div>
        <div class="flex flex-col mb-4 gap-2 p-5">
            <h2 class="text-3xl text-gray-700 font-bold mb-4 mx-2">${nombre}</h2>
            <p class="text-gray-700 mb-4 mx-2" id="descripcionProducto">${descripcion}</p>
            <p class="text-4xl font-bold mb-2 mx-2 text-cyan-700" id="precioProducto">s/${precio}</p>
    <button data-codigo="${codigo}" id ="añadir-carrito" type="button" class="añadir-carrito dark:bg-gray-700 dark:hover:bg-gray-800  bg-[#1d2027e8] hover:bg-[#091525] py-1 px-1 rounded-[0.7rem] mt-auto mx-auto xl:w-[5.5rem] lg:w-[5rem] w-[4.5rem] md:leading-[0.8rem] leading-[0.6rem] border hover:scale-105 active:scale-95 cursor-pointer text-white">
    Añadir carrito</button>
        </div>
    </section>
     </section>`;
}