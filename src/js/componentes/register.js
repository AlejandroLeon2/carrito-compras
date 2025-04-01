export function register() {
    return `    <main class=" bg-cover h-screen bg-[url(../image/mon.png)] text-xs font-mono md:text-base">
        <h1 class="text-center py-5">Crea tu cuenta</h1>
        <article
            class="md:max-w-90 max-w-70 w-full gap-3 rounded-sm mx-auto  bg-white/30 backdrop-grayscale-200 p-6 shadow-xl shadow-gray-900/80">
            <header>
                <h2 class="text-3xl grid justify-items-center font-bold py-5">Registrase</h2>
            </header>
            <main>
                <form action="">
                    <fieldset class="grid grid-cols-1 gap-4">
                        <label class="mx-5" for="usuario">Usuario:</label>
                        <input class="rounded-sm bg-stone-50/100 p-2" type="text" name="usuario" id="usuario"
                            placeholder=" Alejandro82" required maxlength="24">

                        <label class="mx-5" for="usuario">Correo electronico:</label>
                        <input class="rounded-sm bg-stone-50/100 p-2" type="email" name="correo" id="correo"
                            placeholder=" Alejandro82@gmail.com" required maxlength="24">

                        <label class="mx-5" for="contraseña">Contraseña:</label>
                        <input class="rounded-sm bg-stone-50/100 p-2" type="password" name="Contraseña" id="contraseña"
                            placeholder=" contra1234" required maxlength="24">

                        <button
                            class="col-span-1 bg-blue-700 text-white px-4 py-2 rounded-sm mt-4 hover:bg-blue-500 hover:shadow-lg"
                            type="submit">Ingresar</button>
                    </fieldset>
                </form>
            </main>
            <footer class="text-center my-4">
                <a href="../src/login.html" class="hover:text-gray-200 ">¿Ya tienes cuenta?</a>
            </footer>
        </article>
    </main>`
}
