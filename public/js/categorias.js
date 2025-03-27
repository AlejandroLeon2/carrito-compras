import { productos } from './productos';



const catalogo = document.getElementById("catalogo");

function mostrarProductos() {
  catalogo.innerHTML = ""; 
  productos.forEach(({ nombre, precio, url, codigo }) => {
    catalogo.innerHTML += `
            <div class=" xl:w-[15rem] xl:h-[22rem]  lg:w-[12rem] lg:h-[16rem] md:w-[12rem] md:h-[16rem] h-[12rem] w-[9rem] col-span-1 bg-[#091525] rounded-[0.5rem] hover:scale-105 transition duration-300 border text-white" id="cardProducto">
                <img class="h-1/2  overflow-hidden rounded-[0.5rem] cursor-pointer" src="${url}" alt="foto de producto">
                <p class=" xl:mt-2 lg:mx-2.5 md:my-1.9 md:mx-1 text-wrap  my-1 mx-0.5 " id="nombreProducto" >${nombre}</p>
                <p class="lg:mx-2.5 md:my-1.9 md:mx-1 text-wrap  my-1 mx-0.5 font-bold">Precio: S/<span id="Precio">${precio}</span> </p>
                <button id ="añadir-carrito" data-nombre="${nombre}" data-precio="${precio}" data-url="${url}" type="button" class="hover:bg-[#a9adb6] bg-[#e7e7e9] py-0.5 rounded-[0.8rem]  md:p-0.5 md:mt-0.5 xl:mt-2 lg:mx-[3rem] xl:mx-[3.8rem] md:mx-[3rem] mx-9 md:leading-4 leading-3 border hover:scale-105 active:scale-95 cursor-pointer text-black " >Añadir carrito</button>
                <button type="button" codigo="${codigo}" class="ver-mas hover:bg-gray-700 bg-transparent transition py-2 px-3 rounded-[0.8rem] text-gray-300 md:mt-0.5 xl:mt-2 lg:mx-[3rem] xl:mx-[3.8rem] md:mx-[3rem] mx-9 md:leading-4 leading-3 hover:scale-105 active:scale-95 cursor-pointer text-[14px] ">Ver más</button>
            </div>
   
    `;
  });
}
mostrarProductos(); 




  const modal = document.getElementById ("modal");
  const filtroModal = document.getElementById ("apply-filters");
  const botonFiltro = document.getElementById("filtro");

  filtroModal.addEventListener("click", () =>{
    modal.classList.toggle  ("hidden");
  });
  botonFiltro.addEventListener("click", ()=>{
    modal.classList.toggle  ("hidden");
  });

  
catalogo.addEventListener("click", function(event) {
  if (event.target.classList.contains("ver-mas")) {
    const codigo = event.target.getAttribute("codigo");
    window.location.href = `../../detalleProducto.html?codigo=${codigo}`
  }
});