class programa{
    private nombre:string;
    private version: number;

    setNombre (nombre:string){
        this.nombre=nombre;
    }
    getNombre (): string{
        return this.nombre;
    }
    setVersion (version:number){
        this.version=version;
    }
    getVersion ():number{
        return this.version;
    }
}

class EditarVideo extends programa{
    private timeLine:number;

    public setTimeLine (timeLine:number):void{
        this.timeLine=timeLine;
    }
    public getTimeLine():number{
        return this.timeLine;
    }

    getAllData(): string{
        return 'Nombre: '+ this.getNombre()
        + ' Version: ' + this.getVersion()
        + ' TimeLine: ' + this.getTimeLine();

    }

}

let programas=new EditarVideo();
programas.setNombre('AdobePremiere');
programas.setVersion(456);
programas.setTimeLine(45785);

console.log(programas.getAllData());