export function Usuario(nom_usuario, correo, contraseña) {
   this.nom_usuario = nom_usuario;
   this.correo = correo;
   this.contraseña = contraseña;

   Usuario.instancias[nom_usuario] = this;
}
Usuario.instancias = {};

Usuario.prototype.validarRegistro = function (usuarioNew) {

   console.log(usuarioNew);
   if (!usuarioNew || !usuarioNew.nom_usuario) {
      console.error("El objeto usuarioNew es inválido ");
      return false;
   }
   console.log(Usuario.instancias);
   if (Usuario.instancias[usuarioNew.nom_usuario]) {
      alert(`El usuario '${usuarioNew.nom_usuario}' ya existe.`);
      return false;
   } else {
      alert(`El usuario '${usuarioNew.nom_usuario}' no existe. Procediendo al registro...`);
      new Usuario(usuarioNew.nom_usuario, usuarioNew.correo, usuarioNew.contraseña);
      console.log(Usuario.instancias);
      try {
         localStorage.setItem(usuarioNew.nom_usuario, JSON.stringify(usuarioNew));

         alert(`Usuario '${usuarioNew.nom_usuario}' registrado exitosamente.`);
         return true;
      } catch (error) {
         console.error("Error al guardar el usuario en localStorage:", error);
         return false;
      }
   }
};


Usuario.prototype.validarNombre = function (nombre, usuarioExistente) {
   if (usuarioExistente.nom_usuario === nombre) {
      console.log(`El nombre ingresado: ${nombre} es correcto`);
      return true;
   } else {
      console.log(`Nombre de usuario ingresado: ${nombre} es incorrecto`);
      return false;
   }
}
Usuario.prototype.validarContraseña = function (contraseña, usuarioExistente) {
   if (usuarioExistente.contraseña === contraseña) {
      console.log(`contraseña ingresada correcta`);
      return true;
   }
   else {
      console.log(`contraseña ingresada es incorrecta`);
      return false;
   }

}

Usuario.prototype.validarUsuario = function (nombre, contraseña) {
   const usuarioExistente = Usuario.instancias[nombre];
   console.log(usuarioExistente);
   if (usuarioExistente.validarContraseña(contraseña, usuarioExistente) && usuarioExistente.validarNombre(nombre, usuarioExistente)) {
      alert(`Usuario ingresado es correcto`);
      const usuarioActivo = { activo: true, nombre: `${nombre}` };
      localStorage.setItem(`usuarioActivo`, JSON.stringify(usuarioActivo));
      return true;
   }
   else {
      alert(`Usuario ingresado: ${nombre} ,${contraseña} , ${usuarioExistente} es incorrecto`);
      return false;
   }
}

new Usuario(`Alejandro`, `alejandroleonpedro7@gmail.com`, `contra123`);
new Usuario(`Alejandro82`, `alejandroleonpedro8@gmail.com`, `contra1234`);
new Usuario(`Alejandro1`, `alejandroleonpedro9@gmail.com`, `contra12`);
