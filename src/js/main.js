import { headerComponente, categorias } from './componentes/header.js';
import { footerComponente } from './componentes/footer.js';
import { Producto } from './productos.js';
import { modalComponente } from './componentes/modal.js';
import { Usuario } from './Usuario.js';
import { pageLogin } from './componentes/login.js';
import { pageRegister } from './componentes/register.js';
import { tablaProductosbase } from './componentes/tabla.js';

document.getElementById('footer-container').innerHTML = footerComponente();
document.getElementById(`header-container`).innerHTML = headerComponente();
document.getElementById(`modal-carrito`).innerHTML = modalComponente();
document.getElementById(`loginPage`).innerHTML = pageLogin();
document.getElementById(`registerPage`).innerHTML = pageRegister();
document.getElementById(`pagoPage`).innerHTML = tablaProductosbase();


const usuarioInactivo = { activo: false, nombre: null };
localStorage.setItem(`usuarioActivo`, JSON.stringify(usuarioInactivo));


document.addEventListener(`DOMContentLoaded`, () => {
    //==========================================================================
    //barra de busqueda
    document.getElementById("busqueda").addEventListener("input", function (event) {
        const palabra = event.target.value.toLowerCase();
        const productos = document.querySelectorAll("#cardProducto");

        productos.forEach(producto => {
            const nombreProducto = producto.getAttribute("data-nombre").toLowerCase();
            if (nombreProducto.includes(palabra)) {
                producto.classList.remove("hidden");

            } else {
                producto.classList.add("hidden");
            }
        });
    });


    //===================================================================
    //vista  login y register 
    document.getElementById("loginPage").addEventListener("click", (event) => {
        if (event.target.matches("#linkRegister")) {
            document.getElementById("registerPage").classList.remove("hidden");
            document.getElementById("loginPage").classList.add("hidden");

        }
    });
    document.getElementById("registerPage").addEventListener("click", (event) => {
        if (event.target.matches("#linkLogin")) {
            document.getElementById("registerPage").classList.add("hidden");
            document.getElementById("loginPage").classList.remove("hidden");

        }
    });
    document.body.addEventListener("click", (event) => {
        if (event.target.matches(".regresar")) {
            document.getElementById("registerPage").classList.add("hidden");
            document.getElementById("loginPage").classList.add("hidden");
            document.getElementById("home").classList.remove("hidden");
            document.getElementById("header-container").classList.remove("hidden");
        }
    });


    //==============================================================
    // page pago

    document.getElementById("pagoPage").addEventListener("click", (event) => {
        const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));
        let pago = JSON.parse(localStorage.getItem(`carrito${usuarioActivo.nombre}`));


        if (event.target.classList.contains("eliminar-btn")) {
            const elem = event.target.dataset.codigoPago;
            pago = pago.filter(filtro => filtro.codigo !== elem);
            const childToRemove = event.target.closest("tr");
            childToRemove.remove();
            localStorage.setItem(`carrito${usuarioActivo.nombre}`, JSON.stringify(pago));
            Producto.prototype.calcularTotal();
        }
        if (event.target.matches("#finalizarPedido")) {
            document.getElementById("header-container").classList.remove("hidden");
            document.getElementById("catalogoProducto").classList.add("hidden");
            document.getElementById("home").classList.remove("hidden");
            document.getElementById("pagePago").classList.add("hidden");

            alert(`Gracias por su compra ${usuarioActivo.nombre}`);
        }
        if (event.target.matches("#vaciarCarrito")) {
            localStorage.setItem(`carrito${usuarioActivo.nombre}`, JSON.stringify([]));
            Producto.prototype.bajarCarrito();
            let pagoNew = JSON.parse(localStorage.getItem(`carrito${usuarioActivo.nombre}`));
            const carritolocal = Producto.carrito = [...pagoNew];
            Producto.prototype.guardarCard(null, carritolocal);
        }
        if (event.target.matches("#seguirComprando")) {
            document.getElementById("header-container").classList.remove("hidden");
            document.getElementById("catalogoProducto").classList.add("hidden");
            document.getElementById("home").classList.remove("hidden");
            document.getElementById("pagoPage").classList.add("hidden");

        }

        document.querySelectorAll(".cantidad-input").forEach(input => {
            const productos = Array.from(document.querySelectorAll(".cantidad-input")).map(input => {
                const valor = parseInt(input.value) || 0;
                const precio = parseFloat(input.dataset.precio);
                return { valor, precio };
            });
            const total = productos.reduce((acumulador, producto) => {
                return acumulador + (producto.precio * producto.valor);
            }, 0);
            console.log(total);

            document.getElementById("total").textContent = `S/ ${total.toFixed(2)}`;
        });
    });



    //==============================================================
    //register page
    document.querySelector("#formRegister").addEventListener("submit", (event) => {
        event.preventDefault();
        const usuarioNew = document.getElementById("usuarioNew").value.trim();
        const correoNew = document.getElementById("correoNew").value.trim();
        const contraseñaNew = document.getElementById("contraseñaNew").value.trim();

        const nuevoUsuario = { nom_usuario: `${usuarioNew}`, correo: `${correoNew}`, contraseña: `${contraseñaNew}` }
        const validarRegistro = Usuario.prototype.validarRegistro(nuevoUsuario);
        if (validarRegistro) {
            document.getElementById("loginPage").classList.remove("hidden");
            document.getElementById("registerPage").classList.add("hidden");
        }

    });
    //===============================================================
    // login page
    document.querySelector("#formLogin").addEventListener("submit", (event) => {

        event.preventDefault();
        const usuario = document.getElementById("usuario").value.trim();
        const contraseña = document.getElementById("contraseña").value.trim();


        const usuariovalidar = JSON.parse(localStorage.getItem(usuario));
        console.log(usuariovalidar);
        if (usuariovalidar) {
            const nuevoUsuario = { nom_usuario: `${usuariovalidar.nom_usuario}`, correo: `${usuariovalidar.correo}`, contraseña: `${usuariovalidar.contraseña}` }
            console.log(nuevoUsuario);
            Usuario.prototype.validarRegistro(nuevoUsuario);
        }
        const validar = Usuario.prototype.validarUsuario(usuario, contraseña);

        const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));
        const pago = JSON.parse(localStorage.getItem(`carrito${usuarioActivo.nombre}`));

        if (validar === true) {
            document.getElementById("loginPage").classList.add("hidden");
            document.getElementById("home").classList.remove("hidden");
            document.getElementById("header-container").classList.remove("hidden");
            if (usuarioActivo.activo === true && Array.isArray(pago) && pago.length > 0) {
                const carritolocal = Producto.carrito = [...pago];
                Producto.prototype.guardarCard(null, carritolocal);
            } else {
                console.log("El carrito está vacío o no es válido.");
            }

            document.getElementById("logout").classList.remove("hidden");
            document.getElementById("login").classList.add("hidden");
        }
    });
    //===========================================================
    // home page
    Producto.prototype.filtrarCantidad("enOferta");
    Producto.prototype.filtrarCantidad("nuevo");
    document.body.addEventListener("click", (event) => {
        const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));
        if (event.target.classList.contains("añadir-carrito") && (usuarioActivo.activo === false)) {

            alert("Bienvenido no olvide iniciar sesion para guardar cosas en el carrito")
        } else if (event.target.classList.contains("añadir-carrito") && (usuarioActivo.activo === true)) {
            Producto.prototype.guardarCard(event);
        }
    });

    let i = 0;
    const m = (s) => document.querySelector(".carousel-images").style.transform = `translateX(-${(i = (i + s + 3) % 3) * 100}%)`;
    setInterval(() => m(1), 3000);
    document.querySelectorAll(".carousel-btn").forEach(btn =>
        btn.addEventListener("click", () => m(btn.classList.contains("next") - btn.classList.contains("prev")))
    );
    document.getElementById("login").addEventListener("click", () => {
        const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));
        document.getElementById("loginPage").classList.remove("hidden");
        document.getElementById("catalogoProducto").classList.add("hidden");
        document.getElementById("sectionProducto").classList.add("hidden");
        document.getElementById("home").classList.add("hidden");
        document.getElementById("header-container").classList.add("hidden");
    })

    document.getElementById("logout").addEventListener("click", () => {
        const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));
        if (usuarioActivo.activo === true) {
            localStorage.setItem(`usuarioActivo`, JSON.stringify(usuarioInactivo));
            document.getElementById("logout").classList.add("hidden");
            document.getElementById("login").classList.remove("hidden");

        }


    });

    //==============================================================
    // mostrar Productos

    document.getElementById("mostrarCatalogo").addEventListener("click", () => {
        document.getElementById("home").classList.add("hidden");
        document.getElementById("catalogoProducto").classList.remove("hidden");
        document.getElementById("sectionProducto").classList.add("hidden");
        Producto.prototype.mostrarProducto();
    });

    document.querySelectorAll("#mostrarAccesorios,#mostrarPc,#mostrarImpresoras,#mostrarLaptop").forEach((id, indice) => {
        id.addEventListener("click", () => {
            document.getElementById("home").classList.add("hidden");
            document.getElementById("catalogoProducto").classList.remove("hidden");
            document.getElementById("sectionProducto").classList.add("hidden");
            document.getElementById("textTitulo").textContent = categorias[indice];
            document.getElementById("Ruta").textContent = categorias[indice];
            Producto.prototype.filtrarProducto(categorias[indice]);
        });
    });

    //====================================================================
    // carrito
    document.querySelectorAll("#abrirCarrito , #closePanel , #enviarCarrito ").forEach(id => {
        id.addEventListener("click", () => {
            document.getElementById("modal-carrito").classList.toggle("hidden");
            const isHidden = sidePanel.classList.contains("-translate-x-[300px]");
            sidePanel.classList.toggle("-translate-x-[300px]", !isHidden);
            sidePanel.classList.toggle("translate-x-0", isHidden);
        });
    });

    document.body.addEventListener("click", (event) => {
        if (event.target.classList.contains("ver-mas")) {
            const data = event.target.getAttribute("data-codigo");
            Producto.prototype.verCard(data);
            document.getElementById("sectionProducto").classList.remove("hidden");
            document.getElementById("home").classList.add("hidden");
            document.getElementById("catalogoProducto").classList.add("hidden");
        }
    });

    document.getElementById("modal-carrito").addEventListener("click", (event) => {
        if (event.target.matches("#enviarCarrito")) {
            Producto.prototype.subirCarrito();
            Producto.prototype.bajarCarrito();
            document.getElementById("header-container").classList.add("hidden");
            document.getElementById("sectionProducto").classList.add("hidden");
            document.getElementById("pagoPage").classList.remove("hidden");
            document.getElementById("catalogoProducto").classList.add("hidden");
            document.getElementById("home").classList.add("hidden");
        }

        if (event.target.classList.contains("remove-btn")) {
            const elem = event.target.dataset.codigo;
            Producto.carrito = Producto.carrito.filter(filtro => filtro.codigo !== elem);
            const childToRemove = event.target.closest("li");
            childToRemove.remove();
        }
    });
    //=====================================================================================================

});