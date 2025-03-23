class Usuario{
    #nombre;
    #password;
    constructor (nombre, password){
        this.#nombre = nombre;
        this.#password = password;
    }

     validarPassword(passwordIngresado){
        return this.#password === passwordIngresado;
    }
     validarNombre(nombreIngresado){
        return this.#nombre === nombreIngresado;
    }
}

const pedro = new Usuario ("pedro", "1234")

cosole.log(pedro.validarPassword("1234"));


let contador = 0
function login(){
    const clientes = JSON.parse(localStorage.getItem('usuario'));
    
    contador = ++contador;
    let cliente= clientes[contador-1];
    document.getElementById("Nombre").textContent = cliente.nombre;
    document.getElementById("DNI").textContent = cliente.dni;
}