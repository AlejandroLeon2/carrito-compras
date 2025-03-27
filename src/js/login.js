function Usuario (nom_usuario,nombre,correo,contraseña){
    this.nom_usuario = nom_usuario;
    this.nombre = nombre;
    this.correo = correo;
    this.contraseña = contraseña;
}
 Usuario.prototype.validarNombre = function(nombre){
    this.nom_usuario === nombre ?   console.log(`El nombre ingresado: ${nombre} es correcto`) : console.log(`Nombre de usuario ingresado: ${nombre} es incorrecto`)
    return this.nom_usuario === nombre
 }
 Usuario.prototype.validarCorreo = function (correo){
    this.correo === correo ? console.log(`Correo ingresado es correcto`) : console.log(`EL correo ingresado: ${correo} es incorrecto`)  
    return this.correo === correo
 }
 Usuario.prototype.validarContraseña = function(contraseña){
     this.contraseña === contraseña ?   console.log(`contraseña ingresada correcta`) : console.log(`contraseña ingresada es incorrecta`)
     return this.contraseña === contraseña
 }

 Usuario.prototype.validarUsuario = function (){
    return this.validarContraseña && this.validarCorreo && this.validarNombre ? console.log(`Usuario ingresado es correcto`) : console.log(`Usuario ingresado es incorrecto`)
 }

 const usuario1 = new Usuario (`Alejandro`,`Pedro Alejandro`,`alejandroleonpedro7@gmail.com`,`contra123`);
 const usuario2 = new Usuario (`Alejandro82`,`Pedro Martines`,`alejandroleonpedro8@gmail.com`,`contra1234`);
 const usuario3 = new Usuario (`Alejandro1`,`Pedro Santivañes`,`alejandroleonpedro9@gmail.com`,`contra12`);
 const usuario = {nom_usuario: `Alejandro`,nombre:`Pedro Alejandro`,correo:`alejandroleonpedro7@gmail.com`,contraseña:`contra123`}

usuario1.validarNombre(usuario.nom_usuario); 
usuario1.validarContraseña(usuario.contraseña);
usuario1.validarCorreo(usuario.correo);



usuario1.validarUsuario();