let numero = prompt("Ingrese un número del 1 al 10");


for(let i=0; i<=10; i++){
    if(numero <= 0){
        console.log("ERROR el numero ingresado es menor a 1");
        break;
    } else if (numero >=11){
        console.log("ERROR el numero ingresado es mayor a 10")
        break;
    } else {
        console.log(`${numero} por ${i} es igual a ${numero*i}`)

    }
}