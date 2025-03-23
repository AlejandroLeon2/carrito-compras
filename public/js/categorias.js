import { productos } from './productos.js';

const catalogo = document.getElementById("catalogo")


cardsData.forEach(({ title, content }) => {
    catalogo.innerHTML += `
            <div class=" xl:w-[15rem] xl:h-[22rem]  lg:w-[12rem] lg:h-[16rem] md:w-[12rem] md:h-[16rem] h-[12rem] w-[9rem] col-span-1 bg-cyan-600 rounded-[0.5rem] hover:scale-105 transition duration-300 border" id="Productos">
                <img class="h-1/2  overflow-hidden rounded-[0.5rem] cursor-pointer" src="../image/${url}" alt="foto de producto">
                <p class=" xl:mt-2 lg:mx-2.5 md:my-1.9 md:mx-1 text-wrap  my-1 mx-0.5 " id="nombreProducto" >${nombre}</p>
                <p class="lg:mx-2.5 md:my-1.9 md:mx-1 text-wrap  my-1 mx-0.5 font-bold">Precio: S/<span id="Precio">${precio}</span> </p>
                <button type="button" class="bg-blue-600 hover:bg-blue-700 rounded-[0.8rem]  md:p-0.5 md:mt-0.5 xl:mt-2 lg:mx-[3rem] xl:mx-[3.5rem] mx-8 md:leading-4 leading-3 border hover:scale-105 active:scale-95 cursor-pointer " onclick="">Añadir carrito</button>
            </div>
    `;
  });