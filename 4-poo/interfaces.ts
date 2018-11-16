//Interfaz es como un contrato de cnla cual la calse trabaja;
interface CocheBase{
listar()
guardar()
editar()
eliminar()
}

class Coche implements CocheBase{
public listar() {}
public guardar(){}
public editar(){}
public eliminar(){}


}