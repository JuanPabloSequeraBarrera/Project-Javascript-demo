'use strict'

let personajes = Array();
let menu = "1. Agregar personaje\n2. Eliminar ultimo personaje\n3. Ver personaje\n4. Salir"
let opcion = 0;
do{
    opcion = parseInt(prompt(menu))
    switch(opcion){
        case 1:
            personajes.push(prompt('Ingrese el nombre del personaje'))
            break;
        case 2:
            let per = personajes.pop();
            if (confirm('Desea eliminar el ultimo personaje insertado?')){
                alert('Se ha eliminado')
            }else{
                personajes.push(per);
            }
            break;
        case 3:
            console.table(personajes)
            break;
    }
}while (opcion != 4)