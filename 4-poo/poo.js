var Coche = /** @class */ (function () {
    //Le daremos un color por defecto al coche.
    function Coche(colorDefault) {
        this.color = colorDefault;
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        return this.color = color;
    };
    return Coche;
}());
//Para utilizar el Objeto Elaborado debemos crearlo o intanciarlo;
var coche = new Coche('Blanco');
var coche_2 = new Coche('Blanco');
var coche_3 = new Coche('Blanco');
coche.setColor('azul');
coche_2.setColor('Verde');
coche_3.setColor('Rojo');
console.log('el color de este auto es ', coche.getColor());
console.log('el color de este auto es ', coche_2.getColor());
console.log('el color de este auto es ', coche_3.getColor());
