export class Experience{
    anio_inicio!:number;
    anio_fin!:number;
    nombre!:string;
    description!:string;

    constructor(anio_inicio:number,anio_fin:number,nombre:string,description:string){
        this.anio_inicio=anio_inicio;
        this.anio_fin=anio_fin;
        this.nombre=nombre;
        this.description=description;
    }

}