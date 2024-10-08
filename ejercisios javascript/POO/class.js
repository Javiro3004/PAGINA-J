class carnes {
    constructor (nam , prize , type  ) {
        this.nombre= nam ;
        this.precio = prize ;
        this.tipo = type ;
    }
    getDatos(){
        const  datos =  `nombre: ${this.nombre}, 
        Precio: ${this.precio} ,
        Tipo: ${this.tipo}`
        return datos ;
        
    }
}

export{carnes}

let mipedido = new carnes ('carne', 5000, 'carne de res ');
document.write(mipedido.getDatos());


alert(mipedido.getDatos());
