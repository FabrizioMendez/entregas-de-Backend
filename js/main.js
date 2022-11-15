// ___________________________________________________________________________________________________________________________________________________________________________
                                                                         // ENTREGA NUMERO 1°
// ___________________________________________________________________________________________________________________________________________________________________________
class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
// _______________________________________
// Ahora vamos con las funciones:
  getFullName() {
    return `Nombre Completo: ${this.nombre} ${this.apellido}`;
  }
// _______________________________________
// addMascota:
  addMascotas(newMascotas){
    this.mascotas.push(newMascotas);
    return "nueva mascota agregada con exito"
  }
// _______________________________________
  // countMascota:
countMascotas(){
    return this.mascotas.length;
}
// _______________________________________
  // addLibro:
  addLibro(titulo, autor){
      this.libros.push({titulo, autor});
      return "nuevo libro agregado con exito"
    }
// _______________________________________
 //getBooksName:
getBooksName(){
    return this.libros.map((libro)=>libro.titulo)
}
// _______________________________________
}
let fabrizio = new Usuario(
  "Fabrizio",
  "Mendez",
  [{titulo: "figthclub", autor: "alan poe" }],["Polilla", "cliford"]
);
console.log(fabrizio.getFullName());
console.log(fabrizio.addMascotas("el pepe"));
console.log(fabrizio.countMascotas());
console.log(fabrizio.addLibro("La historia del pepe", "Fabri"));
console.log(fabrizio.getBooksName());
console.log("\n\n\n\n\n\n\n");
console.log(fabrizio);
