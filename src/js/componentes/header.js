export function headerComponente() {
    return `<img src="../image/logo01.webp"  alt="logo tienda" class="md:col-span-3 md:  h-18  mx-auto col-span-12" >
        <nav class="md:col-span-9 md: md:w-full col-span-12 grid grid-cols-12 place-items-center">
            <section class="md:col-start-1 grid grid-cols-8 col-span-8 col-start-2">
                <form class="relative md:w-[26rem] xl:w-[40rem] w-[13rem] " action="/buscar" method="GET" role="search">
                    <label for="busqueda" class="sr-only">Buscar:</label>
                    <input id="busqueda" type="text" name="q" placeholder="Busca lo que necesitas"
                        class="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none dark:text-white dark:font-bold">
                    <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <img src="../image/busqueda.svg" alt="Logo de busqueda" class="md:h-8 md:w-8">
                    </span>
                </form>
            </section>
            <button id="abrirCarrito" class="col-span-1 col-start-10 hover:scale-110 "><img src="../image/carrito.svg" alt="Logo carrito"
                class="md:h-8 md:w-8 grayscale dark:invert"></button>
        <a class="col-span-1 col-start-11 hover:scale-110" href="login.html"><img src="../image/user.svg" alt="Logo usuario"
                class="md:h-8 md:w-8 dark:invert"></a>
        </nav>
        <section class="flex items-center col-span-12 justify-center md:gap-8 gap-4 mt-[1rem]">
            <a id="mostrarCatalogo" class="font-semibold cursor-pointer hover:scale-105" type="button "  >Catalogo</a>
            <a id="mostrarAccesorios" class="font-semibold cursor-pointer hover:scale-105" type="button"  >Accesorios</a>
            <a id="mostrarPc" class="font-semibold cursor-pointer hover:scale-105" type="button"  >Pc</a>
            <a id="mostrarImpresoras" class="font-semibold cursor-pointer hover:scale-105" type="button">Impresoras</a>
            <a id="mostrarLaptop" class="font-semibold cursor-pointer hover:scale-110" type="button" >Laptop</a>
        </section>

    `;
}

export const categorias = ["Accesorios", "Pc", "Impresoras", "Laptop"];