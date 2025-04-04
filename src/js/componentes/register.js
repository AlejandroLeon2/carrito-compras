export function pageRegister() {
    return `    
        <h1 class="text-center py-5">Crea tu cuenta</h1>
                        <button
          class="  bg-gray-600/40 rounded text-white justify-around flex  ml-6 my-4 hover:bg-gray-300/40 hover:scale-105 active:scale-95 cursor-pointer h-[2rem]  w-[3rem]  "><svg
            xmlns="http://www.w3.org/2000/svg" class="regresar w-full h-full" width="24" height="24" viewBox="0 0 28 13" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 3 4 7l4 4" />
            <path d="M4 7h16" />

          </svg></button>
        <article
            class="md:max-w-90 max-w-70 w-full gap-3 rounded-sm mx-auto  bg-white/30 backdrop-grayscale-200 p-6 shadow-xl shadow-gray-900/80">
            <header>
                <h2 class="text-3xl grid justify-items-center font-bold py-5">Registrase</h2>
            </header>
            <main>
                <form action="" id="formRegister" >
                    <fieldset class="grid grid-cols-1 gap-4">
                        <label class="mx-5" for="usuario">Usuario:</label>
                        <input class="rounded-sm bg-stone-50/100 p-2" type="text" name="usuario" id="usuarioNew"
                            placeholder=" Alejandro82" required minlength="5" maxlength="30">

                        <label class="mx-5" for="correo">Correo electronico:</label>
                        <input class="rounded-sm bg-stone-50/100 p-2" type="email" name="correo" id="correoNew"
                            placeholder=" Alejandro82@gmail.com" required minlength="5" maxlength="50">

                        <label class="mx-5" for="contraseña">Contraseña:</label>
                        <input class="rounded-sm bg-stone-50/100 p-2" type="password" name="Contraseña" id="contraseñaNew"
                            placeholder=" contra1234" required minlength="5" maxlength="30">
                        <button id="botonRegister"
                            class="col-span-1 bg-blue-700 text-white px-4 py-2 rounded-sm mt-4 hover:scale-105 active:scale-95 cursor-pointer hover:bg-blue-500 hover:shadow-lg"
                            type="submit">Ingresar</button>
                    </fieldset>
                </form>
            </main>
            <footer class="text-center my-4">
                <a id="linkLogin" type="button" class="hover:text-gray-200 cursor-pointer">¿Ya tienes cuenta?</a>
            </footer>
        </article>
    `
}
