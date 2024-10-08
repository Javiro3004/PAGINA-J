class persona  {
    constructor (nom , ape , num  ) {
        this.nombre= nom ;
        this.apellido = ape ;
        this.numero = num ;
    }
}

class profesor extends persona{
    constructor (nom , ape , num , espe ) {
        super(nom , ape , num );
        this.especialidad= espe
    }
    getDatos(){
        const  datos =  `nombre: ${this.nombre}, 
        apellido: ${this.apellido} ,
        numrto de conatcto : ${this.numero},
        materia: ${this.especialidad}`
        return datos ;
        }
}

let  profesor1 = new profesor('pepe', 'Perez', 123456789, 'fisca')
console.log(profesor1.getDatos())