export class Education{
    
    anio_inicio!:number;
    anio_fin!:number;
    nombre!:string;
    lugar_formacion!:string;


    constructor(anio_inicio:number,anio_fin:number,nombre:string,
        lugar_formacion:string){
            this.anio_inicio=anio_inicio;
            this.anio_fin=anio_fin;
            this.nombre=nombre;
            this.lugar_formacion=lugar_formacion;
}
}