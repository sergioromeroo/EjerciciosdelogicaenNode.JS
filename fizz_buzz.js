/*  PRIMERA OPCION CON FOR*/
function fizz_buzz(N) {
    // Creamos un array vacío para almacenar los resultados
    let resultado = [];
    // Recorremos los números del 1 al N
    for (let i = 1; i <= N; i++) {
        // Si el número es múltiplo de 3 y 5, añadimos "FizzBuzz"
        if (i % 3 === 0 && i % 5 === 0) {
            resultado.push(`${i} = FizzBuzz`);
            // Si el número es múltiplo de 3, añadimos "Fizz"
        } else if (i % 3 === 0) {
            resultado.push(`${i} = Fizz`);
            // Si el número es múltiplo de 5, añadimos "Buzz"
        } else if (i % 5 === 0) {
            resultado.push(`${i} = Buzz`);
            // Si no es múltiplo de ninguno, añadimos el número
        } else {
            resultado.push(i);
        }
    }
    // Devolvemos el array resultante
    return (resultado);
}
//llamo a la funcion y le paso el dato que quiero poner en N,  me trae todo el array coloco= node fizz_buzz.js
console.log(fizz_buzz(100))




/*  SEGUNDA OPCION CON WHILE para verlo en el navegador console*/

/* let i = 0;
while (i < 100) {
    i++;
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} = FizzBuzz`)
    } else if(i % 3 === 0) {
        console.log(`${i} = Fizz`)
    } else if(i % 5 === 0) {
        console.log(`${i} = Buzz`)
    } else {
        console.log(`${i}`)
    }
} */