/*  Escriba la función number_cardinality() que toma un número entero y devuelve una cadena, de la siguiente manera:

Devuelve la cadena zero si el número termina en 0
Devuelve la cadena five si el número termina en 5
Devuelve la cadena even si el número es par (divisible por 2) Y no termina en 0
Devuelve la cadena odd si el número es impar (no divisible por 2) Y no termina en 5 */


function number_cardinality(num) {
  // Si el número termina en 0, devolvemos la cadena "zero"
  if (num % 10 === 0) {
    return "zero";
  // Si el número termina en 5, devolvemos la cadena "five"
  } else if (num % 10 === 5) {
    return "five";
  // Si el número es par y no termina en 0, devolvemos la cadena "even"
  } else if (num % 2 === 0) {
    return "even";
  // Si el número es impar y no termina en 5, devolvemos la cadena "odd"
  } else {
    return "odd";
  }
}
//llamo a la funcion y en la terminal coloco = node number_cardinality.js
console.log(number_cardinality(100))
console.log(number_cardinality(88))
console.log(number_cardinality(155))
console.log(number_cardinality(99))