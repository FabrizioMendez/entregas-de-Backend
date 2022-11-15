// ___________________________________________________________________________________________________________________________________________________________________________
                                                                         // ENTREGA NUMERO 2°
// ___________________________________________________________________________________________________________________________________________________________________________
const fs = require("fs")

class Contenedor{  // Creamos la class Contenedor.
    constructor(file_name){  // Definimos el constructor.
        this.file_name=file_name;  // Indicamos que el nombre del archivo sera file_name.
    }
// ___________________________________________________________________________________
static=0  // Este static nos va a servir dsp para que arranque a contar desde este numero=0.
// ___________________________________________________________________________________
    // getAll ()  // Definimos la funcion Get All:
async getAll(){
    try{
        let data = await fs.promises.readFile(this.file_name, 'utf-8')  // Le indicamos que lo que entre en "data" sea async y que lo que lea en el archivo lo pase a un lenguaje que maneje la compu.
        return await JSON.parse (data)  // Aca tambien es async y espera a que sea compilada la "data" para parsearlo y poder leerlo.
    }
    catch(error){
        console.log(error);  // Si hay errores son atrapados y consologeado aca.
    }
}
// ___________________________________________________________________________________
    // save (Object)  // Definimos la funcion save:
async save(newProduct){  // Le damos un "newProduct" para guardar.
    try{                                                                            
        let productos =  await this.getAll()  // Definimos "productos" y le decimos que sea async esperando el getAll.                                     
        if (productos.length==0){  // Si el largo del array "productos" es 0.
            newProduct.id = 0      // Le damos el id 0.
            Contenedor.id = 1      // Y lo pasamos a 1, osea de 0 pasa a 1 y se va para el final.
        }
        if (productos.length){                 // Si el largo del array productos. 
            let copia =productos.map(e=>e.id)  // No es 0 y ya hay dos elementos con el mismo id se crea una copia del producto con mismo id.
            Contenedor.id = copia.pop()        // Se saca del array el producto con mismo id.
            newProduct.id = ++Contenedor.id;   // Para luego sumarle +1 al original.
        }
        productos.push (newProduct)            // Y se vuelve a insertar el nuevo producto
        await fs.promises.writeFile(this.file_name, JSON.stringify(productos))  // Se espera a que este toda la data junto a productos. 
        console.log("Guardado con exito!!");  // Y se consologuea un cartel de exito.
        return obj.id
    }
    catch(error){
        console.log(error);                 // Si hay errores son atrapados aqui.
    }
}
// ___________________________________________________________________________________
// getById(Number-->id)  // Definimos la funcion getById:
async getById (id){  // Creamos la funcion. 
    try{
        let productos = await this.getAll()  // Solicitamos toda la data con los productos.
        let busqueda = productos.filter (p=>p.id==id)  // Filtramos con busqueda por medio de id.
        return busqueda   // Y devolvemos lo que encontramos en la busqueda.
    }
    catch(error){
        console.log(error);                 // Si hay errores son atrapados aqui.
    }
}
// ___________________________________________________________________________________
// deleteById (Number-->id)  // Definimos la funcion deleteById:
async deleteById (id){       // Creamos a deleteById.
    try{
        let productos = await this.getAll()  // Esperamos a tenes toda la data de los productos.
        let busqueda = productos.filter (p=>p.id!==id)  // Realizamos una busqueda por id pero ahora buscamos los que no son iguales al producto en especifico.
        await fs.promises.writeFile(this.file_name, JSON.stringify(busqueda))  // Y realizamos a guardar todo lo que la busqueda encontro, que serian todos los id menos el indicado, asi lo borramos.
        return busqueda  // Devolvemos la busqueda 
    }
    catch(error){
        console.log(error);                 // Si hay errores son atrapados aqui.
    }
}
// ___________________________________________________________________________________
// deleteAll ()  // Definicmos la fucion deleteAll: 
async deleteAll(){  // Creamos deleteAll.
    try{
        await fs.promises.writeFile(this.file_name, JSON.stringify([]))  // Y para borrar todo simplemente esperamos a toda la data con los productos y cuando la vamos a guardar le decimos que nos guarde solo un array vacio: "[]".
    }
    catch(error){
        console.log(error);                 // Si hay errores son atrapados aqui.
    }
}
// ___________________________________________________________________________________
}
// ___________________________________________________________________________________
// test de prueba   // Esto lo hacemos para ver si anda todo bien 
let fakedb = new Contenedor("producto.txt")  //Creamos un nuevo contenedor que se llamara "fakedb" y un array que sera "producto.txt".

async function main (){                     // Le indicamos lo que tiene que realizar:
    // console.log(await fakedb.getAll());  // Esto es para agarrar toda la data.
// ___________________________________________________________________________________
    await fakedb.save({producto})          // Aca guardamos los productos.
    for(let i = 0 ; i< 5;i++){             // Aca un indice que arranca en 0, es menor que 5 (para que sean 5 productos) y luego va a ir sumando de a 1.
        await fakedb.save({                // Guardamos en fakedb.
            name:`producto${i}`,           // Le damos nombre con "producto" y su numero de indice.
            price:i**2,                    // El precio sera su numero de indice multiplicado 2.
            stock:`${i*3}`                 // Y el stock sera el numero de indice multiplicado por 3.
        })
    }
// ___________________________________________________________________________________
    console.log(await fakedb.getAll());  // Esto es para agarrar toda la data.
// await fakedb.deleteAll()              // Esto es para borrar toda la data.
// ___________________________________________________________________________________
console.log(await fakedb.getById(2));    // Esto es para agarrar el producto con id=2.
// ___________________________________________________________________________________
console.log(await fakedb.deleteById(2));  // Esto es para borrar el producto con id=2.
// ___________________________________________________________________________________
console.log(await fakedb.getAll());  // Esto es para agarrar toda la data.
// ___________________________________________________________________________________
}
main()  // Y esto es para que ande todo xd.