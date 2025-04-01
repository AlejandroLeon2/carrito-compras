export function Usuario(nom_usuario, nombre, correo, contraseña) {
   this.nom_usuario = nom_usuario;
   this.nombre = nombre;
   this.correo = correo;
   this.contraseña = contraseña;

   Usuario.instancias[nombre] = this;
}
Usuario.instancias = {};

Usuario.prototype.validarNombre = function (nombre) {
   this.nom_usuario === nombre ? console.log(`El nombre ingresado: ${nombre} es correcto`) : console.log(`Nombre de usuario ingresado: ${nombre} es incorrecto`)
   return this.nom_usuario === nombre
}
Usuario.prototype.validarCorreo = function (correo) {
   this.correo === correo ? console.log(`Correo ingresado es correcto`) : console.log(`EL correo ingresado: ${correo} es incorrecto`)
   return this.correo === correo
}
Usuario.prototype.validarContraseña = function (contraseña) {
   this.contraseña === contraseña ? console.log(`contraseña ingresada correcta`) : console.log(`contraseña ingresada es incorrecta`)
   return this.contraseña === contraseña
}

Usuario.prototype.validarUsuario = function () {
   return this.validarContraseña && this.validarNombre ? alert(`Usuario ingresado es correcto`) : alert(`Usuario ingresado es incorrecto`)
}

new Usuario(`Alejandro`, `Pedro Alejandro`, `alejandroleonpedro7@gmail.com`, `contra123`);
new Usuario(`Alejandro82`, `Pedro Martines`, `alejandroleonpedro8@gmail.com`, `contra1234`);
new Usuario(`Alejandro1`, `Pedro Santivañes`, `alejandroleonpedro9@gmail.com`, `contra12`);
