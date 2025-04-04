import { card } from "./componentes/card";
import { modalcard } from "./componentes/modal";
import { pageProducto } from "./componentes/producto";
import { tablaProductos } from "./componentes/tabla";



export class Producto {
    static carrito = [];
    static listaProductos = [];
    constructor(nombre, descripcion, precio, nuevo, codigo, url, categoria, enOferta) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.nuevo = nuevo;
        this.codigo = codigo;
        this.url = url;
        this.categoria = categoria;
        this.enOferta = enOferta;

        Producto.listaProductos.push(this);
    }

    bajarCarrito() {
        const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));
        const pago = JSON.parse(localStorage.getItem(`carrito${usuarioActivo.nombre}`));
        if (pago) {
            document.getElementById("cardPago").innerHTML = " ";
            pago.forEach((producto) => {
                const tr = document.createElement("tr");
                const clases = "border-b border-gray-200 hover:bg-gray-50 text-center";
                tr.classList.add(...clases.split(" "));
                tr.innerHTML = tablaProductos(producto.nombre, producto.precio, producto.url, producto.codigo);

                document.getElementById("cardPago").appendChild(tr);
            });
        } else {
            console.log("no hay productos en el carrito de pago");
        }

    }

    subirCarrito() {
        const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));

        console.log(Producto.carrito);
        if (usuarioActivo.activo === true) {
            localStorage.setItem(`carrito${usuarioActivo.nombre}`, JSON.stringify(Producto.carrito));
        } else {
            alert("iniciar sesion para guardar en el carrito");
        }
    }
    verCard(data) {
        const product = Producto.listaProductos.find(producto => producto.codigo == data);
        document.getElementById("sectionProducto").innerHTML = pageProducto(product.nombre, product.descripcion, product.precio, product.codigo, product.url);
    };


    guardarCard(event, pago) {

        if (event) {
            const data = event.target.getAttribute("data-codigo");
            const filtrado = Producto.listaProductos.find(producto => producto.codigo === data);
            (Producto.carrito.some(p => p.codigo === filtrado.codigo)) ? console.log("ya existe") : Producto.carrito.push(filtrado);
            document.getElementById("productList").innerHTML = " ";
        }
        if (pago) {
            console.log(pago);
            document.getElementById("productList").innerHTML = " ";
            Producto.carrito = pago;
            
        }

        Producto.carrito.forEach((producto) => {
            const li = document.createElement("li");
            const clases = "flex items-start rounded justify-center mb-4 dark:text-white text-black dark:bg-[#272829] bg-[#f0e7d6] border-black dark:border-white border h-[5rem] overflow-hidden hover:scale-105";
            li.classList.add(...clases.split(" "));
            li.innerHTML = modalcard(producto.url, producto.nombre, producto.precio, producto.codigo);
            document.getElementById("productList").appendChild(li);
        });
    }

    mostrarProducto() {
        const catalogo = document.getElementById("catalogo");
        if (Producto.listaProductos.length) {
            const html = Producto.listaProductos.map(({ nombre, precio, url, codigo }) => card(nombre, precio, url, codigo)).join('');
            catalogo.innerHTML = html;
        } else {
            catalogo.innerHTML = `<p class="text-center text-gray-500 dark:text-gray-300">No hay productos.</p>`;
        }
    }

    filtrarProducto(categoria) {
        const catalogo = document.getElementById("catalogo");
        const productosFiltrados = Producto.listaProductos.filter(producto => producto.categoria === categoria);

        if (productosFiltrados.length) {
            const html = productosFiltrados.map(({ nombre, precio, url, codigo }) => card(nombre, precio, url, codigo)).join('');
            catalogo.innerHTML = html;
        } else {
            catalogo.innerHTML = `<p class="text-center text-gray-500 dark:text-gray-300">No hay productos en esta categoría.</p>`;
        }
    }

    filtrarCantidad(seccion) {
        const seccionBox = document.getElementById(seccion);
        const productosFiltrados = Producto.listaProductos.filter(producto => producto[seccion] === true).slice(0, 6);
        if (productosFiltrados.length) {
            const html = productosFiltrados.map(({ nombre, precio, url, codigo }) => card(nombre, precio, url, codigo)).join('');
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
    "../image/producto-002.png",
    "Accesorios",
    true
);

const producto2 = new Producto(
    "Producto Ejemplo 2",
    "Otro producto de ejemplo con características destacadas.",
    149,
    false,
    "002",
    "../image/producto-004.png",
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
    "MacBook Air Apple 13.6 Chip M3, 256GB SSD, 16GB RAM, 8GPU",
    "Un producto práctico y accesible.",
    129,
    true,
    "004",
    "../image/producto-005.png",
    "Laptop",
    true
);

const producto5 = new Producto(
    "Producto Ejemplo 5",
    "Ideal para quienes buscan calidad a buen precio.",
    89,
    false,
    "005",
    "../image/producto-001.png",
    "Accesorios",
    true
);

const producto6 = new Producto(
    "Producto Ejemplo 6",
    "Perfecto para tareas diarias y profesionales.",
    159,
    true,
    "006",
    "../image/producto-004.png",
    "Pc",
    false
);

const producto7 = new Producto(
    "Producto Ejemplo 7",
    "Diseñado con características avanzadas.",
    189,
    false,
    "007",
    "../image/producto-003.png",
    "Impresoras",
    true
);

const producto8 = new Producto(
    "Producto Ejemplo 8",
    "Compacto y funcional.",
    74,
    true,
    "008",
    "../image/producto-005.png",
    "Laptop",
    false
);

const producto9 = new Producto(
    "Producto Ejemplo 9",
    "Ideal para amantes de la tecnología.",
    204,
    false,
    "009",
    "../image/producto-001.png",
    "Accesorios",
    true
);

const producto10 = new Producto(
    "Producto Ejemplo 10",
    "Un producto premium para los usuarios más exigentes.",
    299,
    true,
    "010",
    "../image/producto-004.png",
    "Pc",
    false
);

const producto11 = new Producto(
    "Producto Ejemplo 11",
    "Un accesorio imprescindible para tu día a día.",
    493,
    true,
    "011",
    "../image/producto-002.png",
    "Accesorios",
    true
);

const producto12 = new Producto(
    "Producto Ejemplo 12",
    "Una PC potente para tus necesidades.",
    179,
    false,
    "012",
    "../image/producto-004.png",
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
    "../image/producto-005.png",
    "Laptop",
    false
);

const producto15 = new Producto(
    "Producto Ejemplo 15",
    "Accesorio económico y funcional.",
    293,
    true,
    "015",
    "../image/producto-002.png",
    "Accesorios",
    true
);


