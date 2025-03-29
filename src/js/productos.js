export class Producto {
    static listaProductos = [];
    constructor(nombre, descripcion,precio,nuevo, codigo,url,categoria,enOferta){
        this.nombre = nombre;
        this.descripcion = descripcion ;
        this.precio = precio;
        this.nuevo = nuevo ;
        this.codigo = codigo ;
        this.url = url ;
        this.categoria = categoria;
        this.enOferta = enOferta;

        Producto.listaProductos.push(this);
    }

    mostrarProducto(){
        const catalogo = document.getElementById("catalogo");
            const html = Producto.listaProductos.map(({ nombre, precio, url, codigo }) => `
                <div class="flex flex-col xl:w-[15rem] xl:h-[22rem] lg:w-[12rem] lg:h-[16rem] md:w-[12rem] md:h-[16rem] h-[12rem] w-[9rem] col-span-1 bg-gray-100 dark:bg-[#091525] rounded hover:scale-105 transition duration-300 border-black dark:border-white border dark:text-white text-black" id="cardProducto">
                    <img class="h-1/2 overflow-hidden rounded-t cursor-pointer w-full" src="${url}" alt="foto de producto">
                    <p class="xl:mt-2 lg:mx-2.5 md:my-1.9 md:mx-1 text-wrap my-1 mx-0.5" id="nombreProducto">${nombre}</p>
                    <p class="lg:mx-2.5 md:my-1.9 md:mx-1 text-wrap my-1 mx-0.5 font-semibold">
                        Precio: S/<span id="Precio">${precio}</span>
                    </p>
                    <button id="añadir-carrito" data-nombre="${nombre}" data-precio="${precio}" data-url="${url}" type="button" class="dark:bg-gray-700 dark:hover:bg-gray-800 text-sm bg-[#1d2027e8] hover:bg-[#091525] py-1 px-1 rounded-[0.7rem] mt-auto mx-auto xl:w-[5.5rem] lg:w-[5rem] w-[4.5rem] md:leading-4 leading-3 border hover:scale-105 active:scale-95 cursor-pointer text-white">
                        Añadir carrito
                    </button>
                    <button type="button" codigo="${codigo}" class="ver-mas w-[5rem] text-xs mx-auto mb-2 hover:scale-105 active:scale-95 cursor-pointer text-black dark:text-white">
                        Ver más
                    </button>
                </div>
            `).join('');
            catalogo.innerHTML = html;
        
        catalogo.innerHTML = html; 
    }
    

    filtrarProducto(categoria) {
        const catalogo = document.getElementById("catalogo");
        const productosFiltrados = Producto.listaProductos.filter(producto => producto.categoria === categoria);
        
        if (productosFiltrados.length) {
            const html = productosFiltrados.map(({ nombre, precio, url, codigo }) => `
                <div class="flex flex-col xl:w-[15rem] xl:h-[22rem] lg:w-[12rem] lg:h-[16rem] md:w-[12rem] md:h-[16rem] h-[12rem] w-[9rem] col-span-1 bg-gray-100 dark:bg-[#091525] rounded hover:scale-105 transition duration-300 border-black dark:border-white border dark:text-white text-black" id="cardProducto">
                    <img class="h-1/2 overflow-hidden rounded-t cursor-pointer w-full" src="${url}" alt="foto de producto">
                    <p class="xl:mt-2 lg:mx-2.5 md:my-1.9 md:mx-1 text-wrap my-1 mx-0.5" id="nombreProducto">${nombre}</p>
                    <p class="lg:mx-2.5 md:my-1.9 md:mx-1 text-wrap my-1 mx-0.5 font-semibold">Precio: S/<span id="Precio">${precio}</span></p>
                    <button id="añadir-carrito" data-nombre="${nombre}" data-precio="${precio}" data-url="${url}" type="button" class="dark:bg-gray-700 dark:hover:bg-gray-800 text-sm bg-[#1d2027e8] hover:bg-[#091525] py-1 px-1 rounded-[0.7rem] mt-auto mx-auto xl:w-[5.5rem] lg:w-[5rem] w-[4.5rem] md:leading-4 leading-3 border hover:scale-105 active:scale-95 cursor-pointer text-white">
                        Añadir carrito
                    </button>
                    <button type="button" codigo="${codigo}" class="ver-mas w-[5rem] text-xs mx-auto mb-2 hover:scale-105 active:scale-95 cursor-pointer text-black dark:text-white">Ver más</button>
                </div>
            `).join('');
    
            catalogo.innerHTML = html;
        } else {
            catalogo.innerHTML = `<p class="text-center text-gray-500 dark:text-gray-300">No hay productos en esta categoría.</p>`;
        }
    }

    filtrarCantidad(seccion, ids) {
        const seccionBox = document.getElementById(ids);
        const productosFiltrados = Producto.listaProductos
          .filter(producto => producto[seccion] === true)
          .slice(0, 4);
      
        if (productosFiltrados.length) {
            const html = productosFiltrados.map(({ nombre, precio, url, codigo }) => {
                return `
                <div class="flex flex-col xl:w-[15rem] xl:h-[22rem] lg:w-[12rem] lg:h-[16rem] md:w-[12rem] md:h-[16rem] h-[12rem] w-[9rem] col-span-1 bg-gray-100 dark:bg-[#091525] rounded hover:scale-105 transition duration-300 border-black dark:border-white border dark:text-white text-black" id="cardProducto">
                    <img class="h-1/2 overflow-hidden rounded-t cursor-pointer w-full" src="${url}" alt="foto de producto">
                    <p class="xl:mt-2 lg:mx-2.5 md:my-1.9 md:mx-1 text-wrap my-1 mx-0.5" id="nombreProducto">${nombre}</p>
                    <p class="lg:mx-2.5 md:my-1.9 md:mx-1 text-wrap my-1 mx-0.5 font-semibold">
                    Precio: S/<span id="Precio">${precio}</span>
                    </p>
                    <button id="añadir-carrito" data-nombre="${nombre}" data-precio="${precio}" data-url="${url}" type="button" class="dark:bg-gray-700 dark:hover:bg-gray-800 text-sm bg-[#1d2027e8] hover:bg-[#091525] py-1 px-1 rounded-[0.7rem] mt-auto mx-auto xl:w-[5.5rem] lg:w-[5rem] w-[4.5rem] md:leading-4 leading-3 border hover:scale-105 active:scale-95 cursor-pointer text-white">
                    Añadir carrito
                    </button>
                    <button type="button" codigo="${codigo}" class="ver-mas w-[5rem] text-xs mx-auto mb-2 hover:scale-105 active:scale-95 cursor-pointer text-black dark:text-white">
                    Ver más
                    </button>
                </div>
                `;
            }).join('');
          
          seccionBox.innerHTML = html;
        } else {
          seccionBox.innerHTML = `<p class="text-center text-gray-500 dark:text-gray-300">No hay productos en esta categoría.</p>`;
        }
    }
}

const producto1 = new Producto(
    "Producto Ejemplo 1",
    "Este es un producto de ejemplo con características únicas.",
    99,
    true,
    "001",
    "../image/producto-001.png",
    "Accesorios",
    true
);

const producto2 = new Producto(
    "Producto Ejemplo 2",
    "Otro producto de ejemplo con características destacadas.",
    149,
    false,
    "002",
    "../image/producto-002.png",
    "Pc",
    true
);

const producto3 = new Producto(
    "Producto Ejemplo 3",
    "Un tercer producto de ejemplo con excelentes especificaciones.",
    199,
    true,
    "003",
    "../image/producto-003.png",
    "Impresoras",
    false
);

const producto4 = new Producto(
    "Producto Ejemplo 4",
    "Un producto práctico y accesible.",
    129,
    true,
    "004",
    "../image/producto-004.png",
    "Laptop",
    true
);

const producto5 = new Producto(
    "Producto Ejemplo 5",
    "Ideal para quienes buscan calidad a buen precio.",
    89,
    false,
    "005",
    "../image/producto-005.png",
    "Accesorios",
    true
);

const producto6 = new Producto(
    "Producto Ejemplo 6",
    "Perfecto para tareas diarias y profesionales.",
    159,
    true,
    "006",
    "../image/producto-001.png",
    "Pc",
    false
);

const producto7 = new Producto(
    "Producto Ejemplo 7",
    "Diseñado con características avanzadas.",
    189,
    false,
    "007",
    "../image/producto-002.png",
    "Impresoras",
    true
);

const producto8 = new Producto(
    "Producto Ejemplo 8",
    "Compacto y funcional.",
    74,
    true,
    "008",
    "../image/producto-003.png",
    "Laptop",
    false
);

const producto9 = new Producto(
    "Producto Ejemplo 9",
    "Ideal para amantes de la tecnología.",
    204,
    false,
    "009",
    "../image/producto-004.png",
    "Accesorios",
    true
);

const producto10 = new Producto(
    "Producto Ejemplo 10",
    "Un producto premium para los usuarios más exigentes.",
    299,
    true,
    "010",
    "../image/producto-005.png",
    "Pc",
    false
);

const producto11 = new Producto(
    "Producto Ejemplo 11",
    "Un accesorio imprescindible para tu día a día.",
    493,
    true,
    "011",
    "../image/producto-001.png",
    "Accesorios",
    true
);

const producto12 = new Producto(
    "Producto Ejemplo 12",
    "Una PC potente para tus necesidades.",
    179,
    false,
    "012",
    "../image/producto-002.png",
    "Pc",
    false
);

const producto13 = new Producto(
    "Producto Ejemplo 13",
    "Impresora de alta calidad para tus proyectos.",
    249,
    true,
    "013",
    "../image/producto-003.png",
    "Impresoras",
    true
);

const producto14 = new Producto(
    "Producto Ejemplo 14",
    "Laptop ultradelgada y potente.",
    899,
    false,
    "014",
    "../image/producto-004.png",
    "Laptop",
    false
);

const producto15 = new Producto(
    "Producto Ejemplo 15",
    "Accesorio económico y funcional.",
    293,
    true,
    "015",
    "../image/producto-005.png",
    "Accesorios",
    true
);


  