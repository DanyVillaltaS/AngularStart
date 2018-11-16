class Coche{

private color:string;
private modelo:string;
private velocidad:number;


//Le daremos un color por defecto al coche.
constructor(colorDefault?:string){
    this.color=colorDefault;
    
}

public  getColor(){
    return this.color;
    }

public  setColor(color){
    return this.color=color;
    }
}

//Para utilizar el Objeto Elaborado debemos crearlo o intanciarlo;

var coche=new Coche('Blanco');
var coche_2=new Coche();
var coche_3=new Coche('Blanco');

coche.setColor('azul');
coche_2.setColor('Verde');
coche_3.setColor('Rojo');

console.log('el color de este auto es ',coche.getColor());
console.log('el color de este auto es ',coche_2.getColor());
console.log('el color de este auto es ',coche_3.getColor());




