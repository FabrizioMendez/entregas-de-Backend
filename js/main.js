class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros = []
        this.mascotas = mascotas = []
// _______________________________________
// Ahora vamos con las funciones:

        // getFullName:
        this.getFullName = function () {
            return nombre + " " + apellido
    }
// ----------------------------------------

        // addMascota:
        this.addMascota = function (){
            return mascotas.push ()
        }
// ----------------------------------------

        // countMascota:
        this.countMascota = function (){
            return mascotas.length()
        }

// _______________________________________    
}
    }
    
// console.log(Usuario);
let fabrizio = new Usuario (
    "Fabrizio", "Mendez", "FightClub", ["Polilla", "cliford"]
)
console.log(fabrizio.getFullName());
console.log(fabrizio.addMascota());
console.log(fabrizio.countMascota());