/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

const areaPoligono = (figura, parametros) => {
    let area;
    switch (figura) {
        case 'Triangulo':
            area = 0.5 * parametros.base * parametros.altura
            break;
        case 'Cuadrado':
            area = parametros.lado * parametros.lado
            break;
        case 'Rectangulo':
            area = parametros.base * parametros.altura
            break;
    }
    console.log(`Área ${figura}: ${area}`)
}

areaPoligono('Triangulo', { base: 5, altura: 10 });
areaPoligono('Cuadrado', { lado: 4 });
areaPoligono('Rectangulo', { base: 4, altura: 8 });