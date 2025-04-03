export function card(nombre, precio, url, codigo) {
    return `<div id="cardProducto" class="flex flex-col xl:w-[15rem] xl:h-[22rem] lg:w-[12rem] lg:h-[16rem] md:w-[12rem] md:h-[16rem] h-[12rem] w-[9rem] text-xs md:text-sm col-span-1 bg-gray-100 dark:bg-[#091525] rounded hover:scale-105 transition duration-300 border-black dark:border-white border dark:text-white text-black ">
    <img class="h-[6rem] md:h-[8rem] lg:h-[8rem] xl:h-[11rem] overflow-hidden rounded-t cursor-pointer w-full" src="${url}" alt="foto de producto">
    <p class="xl:mt-2 lg:mx-3 md:my-1.9 md:mx-3 lg:h-[2.7rem] my-1 mx-2 lg:break-normal  lg:whitespace-normal truncate" id="nombreProducto">${nombre}</p>
    <p class="lg:mx-2.5 md:my-1.9 md:mx-1 text-wrap my-1 mx-0.5 font-semibold">
    Precio: S/<span id="Precio">${precio.toFixed(2)}</span>
    </p>
    <button data-codigo="${codigo}" type="button" class="añadir-carrito dark:bg-gray-700 dark:hover:bg-gray-800  bg-[#1d2027e8] hover:bg-[#091525] py-1 px-1 rounded-[0.7rem] mt-auto mx-auto xl:w-[5.5rem] lg:w-[5rem] w-[4.5rem] md:leading-[0.8rem] leading-[0.6rem] border hover:scale-105 active:scale-95 cursor-pointer text-white">
    Añadir carrito</button>
    <button  type="button" data-codigo="${codigo}" class="ver-mas w-[5rem] text-xs mx-auto mb-2 hover:scale-105 active:scale-95 cursor-pointer text-black dark:text-white">
    Ver más</button>
 </div>`;
}