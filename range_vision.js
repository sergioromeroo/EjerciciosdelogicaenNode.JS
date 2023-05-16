// Creamos la función que toma un entero no negativo y devuelve un booleano
function range_vision(num) {

    // Convertimos el número a una cadena para poder acceder a sus dígitos
    let numString = num.toString();

    // Creamos una variable para almacenar el valor de visión más bajo encontrado hasta ahora
    let minVision = Infinity;

    // Creamos una variable para almacenar si hay algún dígito 1 con el valor de visión más bajo
    let digitoUno = false;

    // Recorremos cada dígito de la cadena
    for (let i = 0; i < numString.length; i++) {
        // Obtenemos el valor del dígito actual
        let digito = Number(numString[i]);
        // Creamos una variable para almacenar el valor de visión del dígito actual
        let vision = 0;
        // Recorremos los dígitos dentro del rango de visión del dígito actual
        for (let j = i - digito; j <= i + digito; j++) {
            // Si el índice está dentro de los límites de la cadena, sumamos el valor del dígito al valor de visión
            if (j >= 0 && j < numString.length) {
                vision += Number(numString[j]);
            }
        }
        // Si el valor de visión es menor que el mínimo encontrado hasta ahora, actualizamos el mínimo y comprobamos si el dígito actual es 1
        if (vision < minVision) {
            minVision = vision;
            digitoUno = digito === 1;
            // Si el valor de visión es igual al mínimo encontrado hasta ahora y el dígito actual es 1, actualizamos la variable digitoUno a true
        } else if (vision === minVision && digito === 1) {
            digitoUno = true;
        }
    }
    // Devolvemos el valor de la variable digitoUno
    return digitoUno;
}

console.log(range_vision(1))