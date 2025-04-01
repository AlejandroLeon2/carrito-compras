export function pageLogin() {
    return `<section class=" bg-cover h-screen bg-[url(/image/mon.png)] text-xs font-mono md:text-base">
        <h1 class="text-center py-8">Inicio de Sesion</h1>
        <article
            class="md:max-w-85 max-w-70 w-full gap-3 rounded-sm mx-auto my-2 bg-white/30 backdrop-grayscale-200 p-6 shadow-xl shadow-gray-900/80">
            <header>
                <h2 class="text-3xl grid justify-items-center font-bold py-5">Login</h2>
            </header>
            <main>
                <form>
                    <fieldset class="grid grid-cols-1 gap-4">
                        <label class="mx-5" for="usuario">Usuario:</label>
                        <input class="rounded-sm bg-stone-50/100 p-2" type="text" name="usuario" id="usuario"
                            placeholder=" Alejandro82" required maxlength="24">

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
                <a href="" class="hover:text-gray-200  decoration-blue-400">¿Olvidaste tu contraseña?</a>
                <br>
                <a href="js/login.js" class="hover:text-gray-200 ">¿No tienes cuenta?</a>
            </footer>
        </article>
    </section>`;
}