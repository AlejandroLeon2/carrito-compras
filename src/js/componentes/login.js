export function pageLogin() {
    return `
        <h1 class="text-center py-6">Inicio de Sesion</h1>
                <button
          class="  bg-gray-600/40 rounded text-white justify-around flex  ml-6 my-4 hover:bg-gray-300/40 hover:scale-105 active:scale-95 cursor-pointer h-[2rem]  w-[3rem]  md:px-2"><svg
            xmlns="http://www.w3.org/2000/svg" class="regresar"  width="24" height="24" viewBox="0 0 23 10" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 3 4 7l4 4" />
            <path d="M4 7h16" />

          </svg></button>
        
        <article
            class="md:max-w-90 max-w-70 w-full gap-3 rounded-sm mx-auto  bg-white/30 backdrop-grayscale-200 p-6 shadow-xl shadow-gray-900/80">
            <header>
                <h2 class="text-3xl grid justify-items-center font-bold py-5">Login</h2>
            </header>
            <main>
                <form id="formLogin">
                    <fieldset class="grid grid-cols-1 gap-4">
                        <label class="mx-5" for="usuario">Usuario:</label>
                        <input class="rounded-sm bg-stone-50/100 p-2" type="text" name="usuario" id="usuario"
                            placeholder=" Alejandro82" required maxlength="24" >

                        <label class="mx-5" for="contraseña">Contraseña:</label>
                        <input class="rounded-sm bg-stone-50/100 p-2" type="password" name="Contraseña" id="contraseña"
                            placeholder=" contra1234" required maxlength="24" autocomplete="current-password">

                        <button
                            class="col-span-1 bg-blue-700 text-white px-4 py-2 rounded-sm mt-4 hover:bg-blue-500 hover:shadow-lg"
                            type="submit">Ingresar</button>
                    </fieldset>
                </form>

            </main>
            <footer class="text-center my-4">
                <a class="hover:text-gray-200  decoration-blue-400">¿Olvidaste tu contraseña?</a>
                <br>
                <a id="linkRegister" type="button" class="hover:text-gray-200 cursor-pointer ">¿No tienes cuenta?</a>
            </footer>
        </article>
    `;
}