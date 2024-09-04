/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

const primo = (n) => {
    console.log(n)
    if (n>1){
        for(let i = 2; i < n; i++) {
            if (n % i === 0) return false;
        }
        return true
    } else {
        return false
    }
};

console.log(primo(17));