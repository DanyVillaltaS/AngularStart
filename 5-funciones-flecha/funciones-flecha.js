setInterval(function () {
    console.log('Intervalo de un segundo normal');
}, 1000);
var frutas = [
    'Manzana',
    'Platano',
    'Naranja'
];
frutas.forEach(function (frutas) {
    console.log('la Fruta es : ', frutas);
});
frutas.forEach(function (frutas) {
    console.log('la Fruta es nuevo : ', frutas);
});
