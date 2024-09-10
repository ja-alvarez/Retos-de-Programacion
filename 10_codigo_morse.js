/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto "·", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 *  
 *  Nota: Este código no soporta caracteres especiales como tildes, 
 * por lo que el input para convertir texto a morse no debe incluirlos.
 */


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
        if (index < array.length - 1) {
            resultado += ' ';
        }
    });
    resultado = resultado.trim();
    resultado += ' ·—·—·'
    console.log('Texto a morse: ' + resultado)
};

textoAMorse('memoria llena')

const morseATexto = (codigo) => {
    codigo = codigo.replace(/\./g, '·').replace(/-/g, '—').replace(/\//g, '');
    let resultado = '';
    codigo.split('  ').forEach((palabra, index, array) => {
        palabra.split(' ').forEach(letraMorse => {
            for (const [letra, morse] of Object.entries(codigoMorse)) {
                if (morse === letraMorse) {
                    resultado += letra;
                    break;
                }
            }
        });
        if (index < array.length - 1) {
            resultado += ' ';
        }
    });
    console.log('Morse a texto: ' + resultado);
};

morseATexto('-- . -- --- .-. .. .- / .-.. .-.. . -. .- .-.-.')

/**
 *  Nota:
 *  En este código se utilizan los símbolos "·" y "—" para representar el código Morse, 
 *  siguiendo las especificaciones proporcionadas en las instrucciones y en la página de Wikipedia 
 *  sobre el código Morse. Aunque muchos traductores utilizan el punto y el guion normales, 
 *  este código mantiene la consistencia con las especificaciones mencionadas.
 *  
 *  La conversión de Morse a texto soporta tanto los puntos y guiones normales como los símbolos
 *  utilizados en este código para asegurar la flexibilidad en la entrada.
 */


let textoPrueba = textoAMorse('En este codigo se utiliza el punto y el guion como se especifica en las instrucciones');
console.log(textoPrueba)
morseATexto('· —·  · ··· — ·  —·—· ——— —·· ·· ——· ———  ··· ·  ··— — ·· ·—·· ·· ——·· ·—  · ·—··  ·——· ··— —· — ———  —·——  · ·—··  ——· ··— ·· ——— —·  —·—· ——— —— ———  ··· ·  · ··· ·——· · —·—· ·· ··—· ·· —·—· ·—  · —·  ·—·· ·— ···  ·· —· ··· — ·—· ··— —·—· —·—· ·· ——— —· · ··· ·—·—·');
