//Ciclo for en javascript
// inicializacion = 0
// for (inicializacion; condicion; incremento)
// for (let number = 0; number< 10; number++) {
//     console.log(number);
// }

for (let i = 0, j=5;i<5; i++, j--) {
    console.log(i)
}

//Ciclo while
let cuentaAtras = 0
while (cuentaAtras < 10) {
    console.log(cuentaAtras);
    number++;
    if (cuentaAtras== 5){
        break;
    }
}

// Ciclo continue y break
for (let i = 0; i <10 ; i++){
    const ispar = i % 2 === 0
    if (ispar){
        continue
    }
    console.log(i)
    if ( i=== 7){
        break
    }
}

// ciclo do while
let respuesta
do {
    respuesta = confirm("Te gusta Java Script?")
    switch (respuesta){
        case true:
            alert ('Super a mi igual')
            break
        case false:
            alert ('Sigue practicando :)')
            break
    }
} while (respuesta == true);

