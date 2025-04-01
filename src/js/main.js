import { headerComponente, categorias } from './componentes/header.js';
import { footerComponente } from './componentes/footer.js';
import { Producto } from './productos.js';
import { modalComponente } from './componentes/modal.js';
import { Usuario } from './Usuario.js';
import { pageLogin } from './componentes/login.js';


document.getElementById('footer-container').innerHTML = footerComponente();
document.getElementById(`header-container`).innerHTML = headerComponente();
document.getElementById(`modal-carrito`).innerHTML = modalComponente();
document.body.innerHTML = pageLogin();




document.addEventListener(`DOMContentLoaded`, () => {


    document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();
        const usuario = document.getElementById("usuario").value.trim();
        const contrasena = document.getElementById("contraseña").value.trim();
        Usuario.prototype.validarNombre(usuario);
        Usuario.prototype.validarContraseña(contrasena);

    });


    Producto.prototype.filtrarCantidad("enOferta");
    Producto.prototype.filtrarCantidad("nuevo");
    document.body.addEventListener("click", (event) => {
        if (event.target.classList.contains("añadir-carrito")) {
            Producto.prototype.guardarCard(event);
        }
    });

    let i = 0;
    const m = (s) => document.querySelector(".carousel-images").style.transform = `translateX(-${(i = (i + s + 3) % 3) * 100}%)`;
    setInterval(() => m(1), 3000);
    document.querySelectorAll(".carousel-btn").forEach(btn =>
        btn.addEventListener("click", () => m(btn.classList.contains("next") - btn.classList.contains("prev")))
    );


    document.getElementById("mostrarCatalogo").addEventListener("click", () => {
        Producto.prototype.mostrarProducto();


    });

    document.querySelectorAll("#mostrarAccesorios,#mostrarPc,#mostrarImpresoras,#mostrarLaptop").forEach((id, indice) => {
        console.log
        id.addEventListener("click", () => {
            document.getElementById("textTitulo").textContent = categorias[indice];
            document.getElementById("Ruta").textContent = categorias[indice];
            Producto.prototype.filtrarProducto(categorias[indice]);
        });
    });

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

        }
    });

    document.getElementById("modal-carrito").addEventListener("click", (event) => {
        (event.target.matches("#enviarCarrito")) ? Producto.prototype.subirCarrito() : console.log("no se subio")
        if (event.target.classList.contains("remove-btn")) {
            const elem = event.target.dataset.codigo;
            Producto.carrito = Producto.carrito.filter(filtro => filtro.codigo !== elem);
            const childToRemove = event.target.closest("li");
            childToRemove.remove();
        }
    });


});