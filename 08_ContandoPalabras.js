/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

const contarPalabras = (str) => {
    const regex = /[.,!?;:()'"¡¿\-{}[\]<>@#$%^&*_+=|\\/~`]/g;
    let nuevoString = str.toLowerCase().replace(regex, '').split(' ');
    let palabras = {}
    for (let i = 0; i < nuevoString.length; i++) {
        let palabra = nuevoString[i].trim();
        if (palabra.length > 0) {
            if (!(palabra in palabras)) {
                palabras[nuevoString[i]] = 1;  //palabras[palabra] = 1;
            } else {
                palabras[nuevoString[i]] += 1;
            }
        }
    }
    return palabras
};

console.log(contarPalabras('"El sol brilla en el cielo azul. El cielo es brillante y el sol es cálido. Brilla el sol y el cielo está claro."'))

