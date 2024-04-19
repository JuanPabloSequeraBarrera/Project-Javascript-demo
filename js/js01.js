// console.log('Hola JS');
// console.error('Esto es un error');
// console.info('Mensaje informativo');
// console.warn('Mensaje de advertencia');

// let numero = 10;
// let numero2 = Number;
// numero2 = 2.42;
// console.log(typeof(numero2));

let edad = 17;
// if (edad >= 18){
//     console.log('Es mayor de edad');
// } else{
//     console.log('Es menor de edad');
// }
if ((edad >= 1) && (edad < 11)){
    // Expresiones
} else if ((edad >= 11) && (edad < 18)){
    // Expresiones
} else if ((edad >= 18) && (edad < 51)){
    // Expresiones
}  else {
    // Aqui termina la vida
}
// let se usa para declarar variables
// const se usa para declarar constantes
let dia = new Date().getDay();
switch (dia){
    case 1:
        console.log(' Hoy es Lunes 😊');
        break;
    case 2:
        console.log(' Hoy es Martes 😊');
        break;
    case 3:
        console.log(' Hoy es Miercoles 😊');
        break;
    case 4:
        console.log('Hoy es jueves 😊');
        break;
}
