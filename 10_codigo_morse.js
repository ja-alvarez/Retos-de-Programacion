/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto "·", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */

// alt 0151 —

const codigoMorse = {
    'a': '·—', 
    'b': '—···',
    'c': '—·—·',
    'ch': '————',
    'd': '—··',
    'e': '·',
    'f': '··—·',
    'g': '——·',
    'h': '····',
    'i': '··',
    'j': '·———',
    'k': '—·—',
    'l': '·—··',
    'm': '——',
    'n': '—·',
    'ñ': '——·——',
    'o': '———',
    'p': '·——·',
    'q': '——·—',
    'r': '·—·',
    's': '···',
    't': '—',
    'u': '··—',
    'v': '···—',
    'w': '·——',
    'x': '—··—',
    'y': '—·——',
    'z': '——··',
    '0': '—————',
    '1': '·————',
    '2': '··———',
    '3': '···——',
    '4': '····—',
    '5': '·····',
    '6': '—····',
    '7': '——···',
    '8': '———··',
    '9': '————·',
    '.': '·—·—·—',
    ',': '——··——',
    '?': '··——··',
    '/': '—··—·',
    '"': '·—··—·'
};

const textoAMorse = (frase) => {
    frase = frase.toLowerCase();
    let resultado = '';
    frase.split(' ').forEach((palabra, index, array) => {
        palabra.split('').forEach(letra => {
            if (letra in codigoMorse) {
                resultado += codigoMorse[letra] + ' ';
            }
        });
        if (index < array.length -1) {
            resultado += ' ';
        }
    });
    resultado = resultado.trim();
    resultado += ' ·—·—·'
    console.log(resultado)
}

textoAMorse('memoria llena')


/*
 * Nota:
 * En este código se utiliza el punto "·" y el guion "—" como se especifica en las instrucciones
 * y en la página de Wikipedia sobre el código Morse. Aunque muchos traductores utilizan el punto
 * y el guion normales, este código sigue las especificaciones mencionadas para mantener la
 * consistencia con las instrucciones proporcionadas.
 */


// -- . -- --- .-. .. .- / .-.. .-.. . -. .- .-.-.
// -- . -- --- .-. .. .-   .-.. .-.. . -. .- .-.-.
// —— · —— ——— ·—· ·· ·—  ·—·· ·—·· · —· ·— ·—·—·
