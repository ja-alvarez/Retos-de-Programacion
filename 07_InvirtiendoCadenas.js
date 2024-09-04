/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

const invertirCadena = (string) => {
    nuevaCadena = '';
    for (i = string.length - 1; i >= 0; i--) {
        nuevaCadena += (string[i])
    }
    return nuevaCadena
};

console.log(invertirCadena('Hola mundo'));