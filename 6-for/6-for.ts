const Verduras:string[]= [
'Zanahoria',
'Lechuga',
'Apio'
];

for (let n=0;n < Verduras.length;n++){
console.log('For Clasico: La Verdura es : ',Verduras[n]);
}

for (let Verdura of Verduras){
console.log('For TypeScript: la Veruara es : ', Verdura);

}
    