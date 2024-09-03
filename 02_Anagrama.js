/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

const anagrama = (str1, str2) => {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if ((str1 === str2) || (str1.length !== str2.length)) {
        return false
    }
    return str1.split('').sort().join('') === str2.split('').sort().join('')
    // let string1 = str1.split('').sort().join('');
    // let string2 = str2.split('').sort().join('');
    // if (string1 != string2) {
    //     return false
    // } else {
    //     return true
    // }
};

console.log(anagrama('word1', 'word2'))